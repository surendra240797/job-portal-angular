import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userRegistration: any = {}

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  handleRegistration() {
    console.log(this.userRegistration.name, this.userRegistration.email, this.userRegistration.password, this.userRegistration.repeatpassword);
   
    this.http.post('https://1337-shrill-disk-50897621.in-ws2.runcode.io/registration', this.userRegistration).subscribe(response => {
      console.log(response);
      // alert("Account Created Successfully")
    })
  }
}