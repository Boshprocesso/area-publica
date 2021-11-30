import { Injectable } from '@angular/core';

import { LoginService } from './login.service';

//Tipos de cada JSON que deseja ser recebido ou enviado.
import { BeneficiarioJSON, BeneficioEstrutura, BeneficioJSON, BeneficioUsuario, LoginJSON } from './tiposJSON';
import { HttpClient } from '@angular/common/http';

var linkBaseAPI = 'http://localhost:4200/assets/api/';

linkBaseAPI = 'https://61a567484c822c00170421e7.mockapi.io/'

@Injectable({
  providedIn: 'root'
})

export class BeneficiosService {
  quantidade = 0;                           //Quantidade de beneficios que irá popular o Header
  beneficios: BeneficioUsuario[] = [];      //JSON de Beneficios que o usuário tem direito

  constructor(private loginService: LoginService,
              private http: HttpClient      //Coloca no Construtor agora o Http Client
              ) { }

  getQuantidadeBeneficios(){
    return this.quantidade;
  }

  acrescentaQuantidade(objeto:BeneficioEstrutura){
    if(objeto.status=="Pendente"){
      this.quantidade++;
    }
  }

  getTodosBeneficios(){
    var linkJSON = linkBaseAPI + 'beneficio';

    return this.http.get<BeneficioJSON>(linkJSON, this.loginService.chaveLogin());
  }

  //Função para obter os beneficiarios Cadastrados
  getBeneficiarios(){
    var linkJSON = linkBaseAPI + 'beneficiario';

    return this.http.get<BeneficiarioJSON[]>(linkJSON, this.loginService.chaveLogin());
  }

  //Função para obter os beneficiarios Cadastrados
  postBeneficiarios(headers: any){
    var linkJSON = linkBaseAPI + 'beneficiario';

    return this.http.post<BeneficiarioJSON>(linkJSON, headers);
  }

  //Função para obter os beneficiarios Cadastrados
  deleteBeneficiarios(id: number){
    var linkJSON = linkBaseAPI + 'beneficiario/' + id;

    return this.http.delete(linkJSON);
  }
}
