# 🚀 Lightning File Upload & Cloudinary API Integration

A Salesforce project built using **Lightning Web Components (LWC)** and **Apex** to upload files from Salesforce and store them securely in **Cloudinary Cloud Storage using REST API integration**.

---

## 📌 Project Overview

This project demonstrates how Salesforce can integrate with external cloud services.

Users can upload files directly from the Salesforce UI. The file is sent to **Cloudinary using an Apex REST API callout**, and the response (image URL and metadata) is stored in Salesforce.

This project showcases practical **Salesforce integration skills** used in real-world enterprise applications.

---

## 🛠 Technologies Used

* Salesforce Lightning Web Components (LWC)
* Apex
* REST API Integration
* HttpRequest / HttpResponse
* JSON Parsing
* Salesforce Custom Objects
* Cloudinary API

---

## ⚙️ Key Features

* Upload files directly from Salesforce UI
* Secure REST API callout to Cloudinary
* Parse API response using JSON
* Store file metadata in Salesforce
* Display uploaded images dynamically
* Toast notifications for success and errors

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

## 👨‍💻 Author

**Bhushan Kalsarpe**

Salesforce Developer | Apex | LWC | Integrations

📧 Email
[bhushankul222@gmail.com](mailto:bhushankul222@gmail.com)

💼 LinkedIn
https://www.linkedin.com/in/bhushan-kalsarpe-b3658216a

💻 GitHub
https://github.com/bhushankul222
