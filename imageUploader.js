import { LightningElement, track } from 'lwc';
import uploadImage from '@salesforce/apex/CloudinaryImageUploadController.uploadImage';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ImageUploader extends LightningElement {

    @track fileName;
    @track fileSizeKB;
    @track base64Data;
    @track imageUrl;
    @track isUploading = false;
    @track fileReadyMessage;   // ✅ Added variable

    handleFileChange(event) {
        const file = event.target.files[0];

        if (file) {
            this.fileName = file.name;
            this.fileSizeKB = (file.size / 1024).toFixed(2);

            // ✅ Show message after selecting file
            this.fileReadyMessage = 'File selected successfully. Click Upload to continue.';

            const reader = new FileReader();
            reader.onload = () => {
                this.base64Data = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }

    uploadImage() {
        if (!this.base64Data) {
            this.showToast('Error', 'Please select a file first', 'error');
            return;
        }

        this.isUploading = true;

        uploadImage({
            fileName: this.fileName,
            base64Data: this.base64Data
        })
        .then(result => {
            this.imageUrl = result;
            this.showToast('Success', 'Image Uploaded Successfully', 'success');

            // ✅ Clear message after upload
            this.fileReadyMessage = '';
        })
        .catch(error => {
            this.showToast('Error', error.body.message, 'error');
        })
        .finally(() => {
            this.isUploading = false;
        });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}