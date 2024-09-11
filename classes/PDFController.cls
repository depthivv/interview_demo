public with sharing class PDFController {
    @AuraEnabled
    public static String generatePDF(String firstName, String lastName) {
        // Create a temporary record to pass data
        PDF_Data__c record = new PDF_Data__c(First_Name__c = firstName, Last_Name__c = lastName);
        insert record;

        // Render the PDF using a Visualforce page
        PageReference pdfPage = Page.PDFPage;
        pdfPage.getParameters().put('id', record.Id);
        pdfPage.setRedirect(true);

        // Return the URL of the PDF to the LWC
        return pdfPage.getUrl();
    }
}