import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { ValidationService } from '../services/app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  login: any;
  userName: any;
  dashboard: Boolean = false;
  userList: Array<any> = [
    {
      name: "guhan",
      password: "guhan"
    },
    {
      name: "sangar",
      password: "sangar"
    },
    {
      name: "aleem",
      password: "aleem"
    },
    {
      name: "santhosh",
      password: "santhosh"
    }
  ]
  constructor(private router: Router, private loginForm: FormBuilder) {
 
  this.login = this.loginForm.group({
    'name': ['', Validators.required],
    // 'email': ['', [Validators.required, ValidationService.emailValidator]],
    'password': ['', Validators.required]
  })
}
onSubmitClick() {
  console.log(this.login.value);
  for (let i = 0; i < this.userList.length; i++) {
    if (this.login.value.name == this.userList[i]['name'] && this.login.value.password == this.userList[i]['password']) {
      this.dashboard = true;
      this.userName = this.login.value.name;
      return;
    }
  }
}
onHomeClick() {
  this.dashboard = false;
  this.login.reset();
}
  
  

  ngOnInit() {
  }

}
