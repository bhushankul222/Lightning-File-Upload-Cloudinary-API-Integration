# 🚀 Lightning File Upload & Cloudinary API Integration

**Duration:** Oct 2025 – Jan 2026

A Salesforce integration project that allows users to upload files from the Salesforce UI and store them securely in **Cloudinary cloud storage** using **REST API callouts**. The system processes API responses, stores file metadata in Salesforce, and dynamically displays uploaded images.

---

## 📌 Project Overview

This project demonstrates **Salesforce external API integration** using **Lightning Web Components (LWC)** and **Apex**.

Users can upload files from Salesforce, which are then sent to **Cloudinary via REST API**. The API response is processed and stored in **Salesforce custom objects**, allowing images to be retrieved and displayed dynamically.

---

## 🛠 Technical Skills

* Salesforce Lightning Web Components (LWC)
* Apex
* REST API Integration
* HttpRequest / HttpResponse
* JSON Deserialization
* Salesforce Custom Objects
* Cloudinary API
* Lightning Toast Messages

---

## ⚙️ Key Features

* Developed a **Lightning Web Component (LWC)** to enable users to upload files directly from Salesforce.
* Integrated **Cloudinary API** using Apex REST callouts.
* Sent file data using **HttpRequest** and processed responses using **HttpResponse**.
* Used **JSON deserialization** to extract response data from Cloudinary.
* Stored image URLs and metadata in **Salesforce Custom Objects**.
* Displayed uploaded images dynamically within Salesforce.
* Integrated **Cloudinary viewer** for easy access to uploaded files.
* Implemented **Toast messages** to provide real-time feedback on upload status, errors, and successful operations.

---

## 🔗 Cloudinary REST API Integration (Apex)

Example Apex code used to send files to Cloudinary.

```apex
public with sharing class CloudinaryUploadController {

    @AuraEnabled
    public static String uploadImage(String base64Data) {

        Http http = new Http();
        HttpRequest req = new HttpRequest();

        req.setEndpoint('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload');
        req.setMethod('POST');
        req.setHeader('Content-Type','application/json');

        String requestBody = '{"file":"data:image/png;base64,' + base64Data + '","upload_preset":"YOUR_UPLOAD_PRESET"}';

        req.setBody(requestBody);

        HttpResponse res = http.send(req);

        if(res.getStatusCode() == 200){

            Map<String,Object> responseData =
            (Map<String,Object>) JSON.deserializeUntyped(res.getBody());

            String imageUrl = (String) responseData.get('secure_url');

            return imageUrl;
        }

        return 'Upload Failed';
    }
}
```

---

## 🖼 Display Uploaded Image in LWC

Example Lightning Web Component HTML snippet used to display the uploaded Cloudinary image.

```html
<template>
    <lightning-card title="Upload Image to Cloudinary" icon-name="utility:upload">
        <div class="slds-p-around_medium">

            <!-- File Selector -->
            <lightning-input 
                type="file"
                label="Choose Image"
                accept="image/*"
                onchange={handleFileChange}>
            </lightning-input>

            <!-- File Details -->
            <template if:true={fileName}>
                <div class="slds-box slds-theme_default slds-m-top_small">
                    <p class="slds-text-title_bold">Selected File</p>
                    <p>{fileName}</p>
                    <p class="slds-text-color_weak">{fileSizeKB} KB</p>
                </div>
                <p>{fileReadyMessage}</p>
            </template>

            <!-- Upload Button -->
            <div class="slds-m-top_medium">
                <lightning-button 
                    label="Upload Image"
                    variant="brand"
                    icon-name="utility:upload"
                    onclick={uploadImage}
                    disabled={isUploading}>
                </lightning-button>
            </div>

            <!-- Uploading Spinner -->
            <template if:true={isUploading}>
                <div class="slds-m-top_medium slds-align_absolute-center">
                    <lightning-spinner alternative-text="Uploading" size="medium"></lightning-spinner>
                </div>
                <p class="slds-text-align_center slds-m-top_small">Uploading Image...</p>
            </template>

            <!-- Success Preview -->
            <template if:true={imageUrl}>
                <div class="slds-box slds-theme_success slds-m-top_medium">
                    <p class="slds-text-heading_small">Upload Successful</p>
                </div>

                <div class="slds-m-top_medium slds-align_absolute-center">
                    <img src={imageUrl} style="max-width:250px; border-radius:6px;" />
                </div>
            </template>

        </div>
    </lightning-card>
</template>
```

---

## 📁 Project Structure

```
cloudinary-file-upload/
├── force-app/
│   └── main/
│       └── default/
│           ├── classes/
│           │   └── CloudinaryUploadController.cls
│           │
│           ├── lwc/
│           │   └── fileUploadComponent/
│           │       ├── fileUploadComponent.html
│           │       ├── fileUploadComponent.js
│           │       └── fileUploadComponent.js-meta.xml
│           │
│           └── objects/
│               └── Uploaded_File__c
│
└── README.md
```

---

## 🎯 Learning Outcomes

* Hands-on experience with **Salesforce external integrations**
* Implemented **secure REST API callouts in Apex**
* Processed API responses using **JSON parsing**
* Built responsive UI using **Lightning Web Components**
* Improved user experience with **real-time notifications**

---

## 📫 Connect With Me

📧 **Email:**
[bhushankul222@gmail.com](mailto:bhushankul222@gmail.com)

💼 **LinkedIn:**
https://www.linkedin.com/in/bhushan-kalsarpe-b3658216a

💻 **GitHub:**
https://github.com/bhushankul222
