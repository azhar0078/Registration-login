import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User=new User();
  errorMessage:string;
  constructor(private authService :AuthService, private router: Router) { }



  ngOnInit() {
  }

  login(){
    this.authService.logIn(this.user)
      .subscribe(data=>{
        this.router.navigate(['/profile']);
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }
}