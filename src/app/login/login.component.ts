import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //  email:string = ''
  //  password:string= '' 
  userLogin: any = {}

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log("Email:" + this.userLogin.email, "Password:" + this.userLogin.password);

    this.http.post('https://1337-shrill-disk-50897621.in-ws2.runcode.io/users/login', this.userLogin).subscribe((response: any) => {
      console.log(response);
      if (response.status) {
        alert("Login Successfully")
        this.router.navigate(['/profile'])
        localStorage.setItem('user',JSON.stringify(response.data))
      }
      else {
        alert("Email/Password incorrect");
        //   this.ngOnInit()
      }
    })

    console.log("End of handleLogin()");

  }

}


