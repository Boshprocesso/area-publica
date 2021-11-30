import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginJSON } from './tiposJSON';
import {Router} from '@angular/router';

var linkBaseAPI = 'http://localhost:4200/assets/api/';
linkBaseAPI = 'https://61a567484c822c00170421e7.mockapi.io/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Servico entre Front e Back-end
  loginLocal!: LoginJSON;      //JSON de Beneficios que o usuário tem direito

  constructor(private router: Router,
              private http: HttpClient      //Coloca no Construtor agora o Http Client
              ) { }

  postLogin(params: any) {
    var linkJSON = linkBaseAPI + 'loginPost.json';
    
    linkJSON = linkBaseAPI + 'login';


    return this.http.post<LoginJSON>(linkJSON, params);
  }

  chaveLogin(){
    const headers = { 'cod': '1', 'nascimento': '1' };
    //headers.cod = this.loginLocal.login.codFuncionario;
    //headers.cod = this.loginLocal.login.nascimento;

    return {headers};
  }

  validaLogin(){
    if(this.loginLocal){
      this.router.navigate(["beneficios"]);
    }else{
      this.router.navigate([""]);
    }
  }

  cancelaLogin(){
    
  }
}