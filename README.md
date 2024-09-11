# interview_demo

1. Scenario
   Given a Form into which User can enter details. On Click of a button a PDF file should be generated including the form data

   **Solution**
   We create an LWC component to generate the Form called **pdfForm**
   To store the data we created a Custom Object called **PDF_Data__c**
   Then using an Apex class we **PDFController** we provide link to a VisualForce Page that we created called **PDFPage**



2. Scenario
   When an object reaches a certain statge it should no longer be deletable

   **Solution**
   We will take Opportunity object as an example. When an Opportunity reacehes Closed Won stage it should no longer be deletable.
   For this we have created a new **Trigger** called **OpportunityTrigger**. Using this we are able to check Opportunity Stage and throw an error. 

