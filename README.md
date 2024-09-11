# interview_demo

1. Scenario
   Given a Form into which User can enter details. On Click of a button a PDF file should be generated including the form data

   **Solution**
   We create an LWC component to generate the Form called **pdfForm**
   To store the data we created a Custom Object called **PDF_Data__c**
   Then using an Apex class we **PDFController** we provide link to a VisualForce Page that we created called **PDFPage**

