public class ImageUploadController {

     @AuraEnabled
    public static String uploadImage(String base64Data, String fileName) {

        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://console.cloudinary.com/');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');

        // 🔐 AUTH MANUALLY (Bearer Token Example)
        req.setHeader(
            'Authorization',
            '731682483164476'
        );

        Map<String, Object> body = new Map<String, Object>();
        body.put('fileName', fileName);
        body.put('fileData', base64Data);

        req.setBody(JSON.serialize(body));

        Http http = new Http();
        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200 || res.getStatusCode() == 201) {

            Map<String, Object> result =
                (Map<String, Object>) JSON.deserializeUntyped(res.getBody());

            String imageUrl = (String) result.get('imageUrl');

            // Save URL in Salesforce
            Image_Record__c img = new Image_Record__c();
            img.Image_URL__c = imageUrl;
            insert img;

            return imageUrl;
        } else {
            throw new AuraHandledException(
                'Error from API: ' + res.getBody()
            );
        }
    }
    
}