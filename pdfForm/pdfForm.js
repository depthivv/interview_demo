import { LightningElement } from 'lwc';
import generatePDF from '@salesforce/apex/PDFController.generatePDF';

export default class PdfForm extends LightningElement {
    firstName = '';
    lastName = '';

firstNameHandleChange(event){
       this.firstName = event.target.value;

}
lastNameHandleChange(event){
       this.lastName = event.target.value;
}

handleSubmit(event){

       generatePDF({firstName: this.firstName, lastName: this.lastName })
       .then(result => {
              // handle success, like displaying the PDF or providing a download link
              window.open(result);
          })
          .catch(error => {
              // handle error
              console.error('Error generating PDF:', error);
          });
}


}

