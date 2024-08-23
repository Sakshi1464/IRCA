import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounsellorService } from '../shared/counsellor.service';
import { Counsellor } from '../shared/counsellor.model';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-counsellor',
  templateUrl: './counsellor.component.html',
  styleUrl: './counsellor.component.css',
  providers:[CounsellorService]
})
export class CounsellorComponent {
constructor(public counsellorService:CounsellorService,private router:Router){}
ngOnInit(){
  this.resetForm();
}
resetForm(form?:NgForm){
  if(form)
  form.reset();
this.counsellorService.selectedCounsellor={
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
  if (form.value._id === "") {
    this.counsellorService.postCounsellor(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshCounsellorList();
      M.toast({ html: 'Saved successfully', classes: 'rounded' });
      this.router.navigate(['plan']);
    });
  } else {
    this.counsellorService.putCounsellor(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshCounsellorList();
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
    alert('Please enter a valid date.');
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
    alert('Please enter a valid date.');
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
    alert('Please enter a valid date.');
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
    alert('Please enter a valid date.');
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
    alert('Please enter a valid date.');
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
    alert('Please enter a valid date.');
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
refreshCounsellorList() {
this.counsellorService.getCounsellorList().subscribe((res) => {
  this.counsellorService.counsellor= res as Counsellor[];
});
}

onEdit(coun:Counsellor) {
this.counsellorService.selectedCounsellor = coun;
}
onDelete(_id: string, form: NgForm) {
if (confirm('Are you sure to delete this record ?') == true) {
  this.counsellorService.deleteCounsellor(_id).subscribe((res) => {
    this.refreshCounsellorList();
    this.resetForm(form);
    M.toast({ html: 'Deleted successfully', classes: 'rounded' });
  });
}
}
}
