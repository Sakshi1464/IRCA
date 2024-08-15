import { Component } from '@angular/core';
import { PlanService } from '../shared/plan.service';
import { NgForm } from '@angular/forms';
import { Plan } from '../shared/plan.model';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css',
  providers:[PlanService]
})
export class PlanComponent {
constructor(public planService:PlanService,private router:Router){}
ngOnInit(){
  this.resetForm();
}
resetForm(form?:NgForm){
  if (form)
  form.reset();
this.planService.selectedPlan = {
  _id: "",
  sa:"",
  tf:"",
  sa1:"",
  tf1:"",
  sa2:"",
  tf2:"",
  sa3:"",
  tf3:"",
  sa4:"",
  tf4:"",
  sa5:"",
  tf5:"",
  sa6:"",
  tf6:"",
  sa7:"",
  tf7:"",
  sa8:"",
  tf8:"",
  dropout:"",
  date:"",
  lackofmotivation:"",
  lackoffamilysupport:"",
  poverty:"",
  legalproblem:"",
  unabletocope:"",
  inadequatefacilities:"",
  anyother:"",
  days:"",
  months:"",
  reasons:"",
}
M.AutoInit();
}

onSubmit(form: NgForm) {
  if (form.value._id == "") {
    // Validate time format for tf, tf1, ..., tf8
    if (!this.validateTimeFields(form)) {
      return;
    }

    this.planService.postPlan(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshPlanList();
      M.toast({ html: 'Saved successfully', classes: 'rounded' });
      this.router.navigate(['print']);
    });
  } else {
    // Validate time format for tf, tf1, ..., tf8
    if (!this.validateTimeFields(form)) {
      return;
    }

    this.planService.putPlan(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshPlanList();
      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
  }
}

validateTimeFields(form: NgForm): boolean {
  const timeFields = ['tf', 'tf1', 'tf2', 'tf3', 'tf4', 'tf5', 'tf6', 'tf7', 'tf8'];

  for (const field of timeFields) {
    const value = form.value[field];

    // Check if the value is not null or undefined
    if (value != null && value !== '') {
      // Split the value by dot (.) to get the first two digits and the next two digits
      const [hours, minutes] = value.split('.');

      // Check if the hours are between 00 and 24 and minutes are between 00 and 59
      if (!(parseInt(hours, 10) >= 0 && parseInt(hours, 10) <= 23) ||
          !(parseInt(minutes, 10) >= 0 && parseInt(minutes, 10) <= 59)) {
        alert('Please enter a valid time format.');
        return false;
      }
    }
  }

  return true;
}

  

refreshPlanList() {
  this.planService.getPlanList().subscribe((res) => {
    this.planService.plan = res as Plan[];
  });
}

onEdit(pla: Plan) {
  this.planService.selectedPlan = pla;
}
onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.planService.deletePlan(_id).subscribe((res) => {
      this.refreshPlanList();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}
}
