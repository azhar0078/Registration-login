import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,NgForm } from '@angular/forms';
import { RequestRegistration } from '../dto/request-registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  visible = false;
  buttonRegister= true;
  registrationForm!: FormGroup;
  isSubmitted: boolean = false; 
  
  private registrationData!: RequestRegistration;

  
  constructor(private formBuilder: FormBuilder) {  
    this.registrationForm = this.formBuilder.group({  
      firstName: new FormControl('', [  
        Validators.required,  
        Validators.minLength(3),  
        Validators.maxLength(30),  
        Validators.pattern('^[a-zA-Z ]*$')]),  
      lastName: new FormControl('', []),    
      phoneNumber: new FormControl('', [  
        Validators.required,  
        Validators.minLength(8),  
        Validators.maxLength(12),  
        Validators.pattern('^[0-9]*$')]),  
      email: new FormControl('', [  
        Validators.required,  
        Validators.minLength(5),  
        Validators.maxLength(80),  
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")  
      ]),  
      password: new FormControl('', [  
        Validators.required,  
        Validators.minLength(5),  
        Validators.maxLength(12)          
      ])  
    });  
  }  
  
  ngOnInit() {  
  
  }  
  
  onRegistrationFormSubmit() {  
    this.isSubmitted = true;  
    if(this.registrationForm.valid){        
      console.log("User Registration Form Submit", this.registrationForm.value);  
    }  
      
  }  
}  