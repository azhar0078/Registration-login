import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginClientService } from '../client/login-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email!: string;
  password! : string;
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authService.authenticationService(this.email, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/menu']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}