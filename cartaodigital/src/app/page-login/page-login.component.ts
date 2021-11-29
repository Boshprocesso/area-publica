import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from '../dao/login.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  showSpinner = false;
  constructor(private router: Router,
              private loginService: LoginService
              ) {    }
  
  matricula?: string;
  nascimento?: string;

  ngOnInit(): void {
  }


  login() : void {
    if(this.matricula == 'admin' && this.nascimento == 'admin'){
        this.router.navigate(["user"]);
    }else {
        this.showSpinner = true;
    }

     

    this.initLogin();
  }

  initLogin(){
    this.loginService.postLogin({})
      .pipe(first())
      .subscribe(data=>{    
          console.log(data);
        });
  }

}
