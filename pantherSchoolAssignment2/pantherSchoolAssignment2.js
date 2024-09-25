/*Create a Lightning Web Component that will display the input to collect below Information
	Text
	Email
	Phone
	Picklist
	Address */
import { LightningElement } from 'lwc';

export default class PantherSchoolAssignment2 extends LightningElement {
    name ='';
    email='';
    phone='';
    street='';
    city='';
    province='';
    country='';
    postalCode='';
    selectedContactMethod = '';

    // Picklist options
    contactOptions = [
        {label:'Email', value:'Email'},
        {label:'Phone', value: 'Phone'},
        {label:'Mail', value: 'Mail'}
    ]

    handleInputChange(event) {
        const field = event.target.dataset.id;
        this.name=field.name;
        this.email=field.email;
        this.phone=field.phone;
        console.log(event.target.value);
        console.log(field);
    }

    handlePicklistChange(event){
        this.selectedContactMethod =event.detail.value;

    }
    handleAddressChange(event){
        this.street=event.detail.street;
        this.city=event.detail.city;
        this.country =event.detail.country;
        this.postalCode=event.detail.postalCode;
        this.province=event.detail.province;
    }
}