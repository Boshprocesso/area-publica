import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  showSpinner = false;
  constructor(private router: Router) { }
  
  matricula?: string;
  nascimento?: string;

  ngOnInit(): void {
  }


  login() : void {
    if(this.matricula == 'admin' && this.nascimento == 'admin'){
        this.router.navigate(["user"]);
    }else {
        this.showSpinner = true;
      
      //alert("Credenciais Invalidas, implementar sistema de login");
      //this.showSpinner = false;
      //this.router.navigate([""]);
    }
  }

}
