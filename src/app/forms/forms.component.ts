import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  defaultCourse = 'Angular'
  userName = "";
  genders = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
  ]
  defaultGender = 'Male'
  submitted: boolean = false;
  formData = {
    username: '',
    email: '',
    password: '',
    course: '',
    gender: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  setUsername() {
    this.myForm.form.patchValue({
      userDetail: {
        username: 'Uxtrendz'
      }
    })
  }

  onSubmit() {
    console.log(this.myForm)
    this.submitted = true
    this.formData.username = this.myForm.value.userDetail.username;
    this.formData.email = this.myForm.value.userDetail.email;
    this.formData.password = this.myForm.value.password;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;
    this.myForm.reset()
  }

}
