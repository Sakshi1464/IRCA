import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IndividualService } from '../shared/individual.service';
import { Individual } from '../shared/individual.model';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.css',
  providers:[IndividualService]
})
export class IndividualComponent {
  constructor(public individualService:IndividualService,private router:Router){}
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form)
    form.reset();
  this.individualService.selectedIndividual={
    _id:"",
    date:"",
    issues:"",
    date1:"",
    issues1:"",
    date2:"",
    issues2:"",
    date3:"",
    issues3:"",
    date4:"",
    issues4:"",
    date5:"",
    issues5:"",
    date6:"",
    issues6:"",
    date7:"",
    issues7:"",
    date8:"",
    issues8:"",
    date9:"",
    issues9:"",
    date10:"",
    issues10:"",
    date11:"",
    issues11:"",
  }
  M.AutoInit();
  }
  onSubmit(form: NgForm) {
    if (!this.validateDate(form)) {
      return;
    }
    if (!this.validateDate1(form)) {
      return;
    }
    if (!this.validateDate2(form)) {
      return;
    }
    if (!this.validateDate3(form)) {
      return;
    }
    if (!this.validateDate4(form)) {
      return;
    }
    if (!this.validateDate5(form)) {
      return;
    }
    if (!this.validateDate6(form)) {
      return;
    }
    if (!this.validateDate7(form)) {
      return;
    }
    if (!this.validateDate8(form)) {
      return;
    }
    if (!this.validateDate9(form)) {
      return;
    }
    if (!this.validateDate10(form)) {
      return;
    }
    if (!this.validateDate11(form)) {
      return;
    }
    if (form.value._id == "") {
      this.individualService.postIndividual(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshIndividualList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.router.navigate(['counsellor']);
      });
    }
    else {
      this.individualService.putIndividual(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshIndividualList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
  validateDate(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date) {
      alert('Please enter a valid date1.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate1(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date1);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date1) {
      alert('Please enter a valid date1.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate2(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date2);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date2) {
      alert('Please enter a valid date1.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate3(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date3);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date3) {
      alert('Please enter a valid date1.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate4(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date4);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date4) {
      alert('Please enter a valid date1.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate5(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date5);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date5) {
      alert('Please enter a valid date1.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate6(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date6);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
    if (!form.value.date6) {
      alert('Please enter a valid date.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate7(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date7);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date7) {
      alert('Please enter a valid date.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate8(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date8);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date8) {
      alert('Please enter a valid date.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate9(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date9);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date9) {
      alert('Please enter a valid date.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate10(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date10);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date10) {
      alert('Please enter a valid date.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  validateDate11(form: NgForm): boolean {
    const currentDate = new Date();
    const enteredDate = new Date(form.value.date11);
  
    // Extract the year part from the entered date string
    const enteredYear = parseInt(form.value.date.substring(0, 4), 10);
  
    // Check if the extracted year is greater than 2024
    if (enteredYear > 2024) {
      alert('Please enter a valid year (less than 2024).');
      return false;
    }
  
    // You can add similar checks for other date fields (date1, date2, ...)
    // if needed.
  
    if (!form.value.date11) {
      alert('Please enter a valid date.');
      return false;
    }
    if (enteredDate > currentDate) {
      alert('Please enter a valid date.');
      return false;
    }
  
    return true;
  }
  refreshIndividualList() {
  this.individualService.getIndividualList().subscribe((res) => {
    this.individualService.individuals= res as Individual[];
  });
  }
  
  onEdit(indi:Individual) {
  this.individualService.selectedIndividual = indi;
  }
  onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.individualService.deleteIndividual(_id).subscribe((res) => {
      this.refreshIndividualList();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
  }
}

