import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginJSON } from './tiposJSON';

var linkBaseAPI = 'http://localhost:4200/assets/api/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Servico entre Front e Back-end
  beneficios!: LoginJSON;      //JSON de Beneficios que o usuário tem direito

  constructor(
              private http: HttpClient      //Coloca no Construtor agora o Http Client
              ) { }

  postLogin(params: any) {
    var linkJSON = linkBaseAPI + 'loginPost.json';
    params = {
      "nome": "Amadeu",
      "cpf": "897654321",
      "idade": 50
    };

    this.http.get<any>('http://localhost:5000/Pessoa').subscribe({
        next: data => {
            console.log("Teste de GET2");
            console.log(data);
        },
        error: error => {
          console.log(error.message);
          console.error('There was an error!', error);
        }
    })

    //this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
    //  console.log("Teste de GET");
    //  console.log(data);
    //});  
    return this.http.get(linkJSON, params);
  }
}
