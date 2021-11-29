import { Injectable } from '@angular/core';

//Tipos de cada JSON que deseja ser recebido ou enviado.
import { BeneficiarioJSON, BeneficioEstrutura, BeneficioJSON, BeneficioUsuario } from './tiposJSON';
import { HttpClient } from '@angular/common/http';

var linkBaseAPI = 'http://localhost:4200/assets/api/';

@Injectable({
  providedIn: 'root'
})

export class BeneficiosService {
  quantidade = 0;                           //Quantidade de beneficios que irá popular o Header
  beneficios: BeneficioUsuario[] = [];      //JSON de Beneficios que o usuário tem direito

  constructor(
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
    const headers = { 'identificacao': 'CPF ou EDV', 'dataNascimento': '29/10/1992' };
    var linkJSON = linkBaseAPI + 'beneficioGet.json';

    return this.http.get<BeneficioJSON>(linkJSON, {headers});
  }

  //Função para obter os beneficiarios Cadastrados
  getBeneficiarios(){
    const headers = { 'identificacao': 'CPF ou EDV', 'dataNascimento': '29/10/1992' };
    var linkJSON = linkBaseAPI + 'beneficiarioGet.json';
    //linkJSON = 'https://raw.githubusercontent.com/Boshprocesso/area-publica/master/benefiarioGet.json';

    return this.http.get<BeneficiarioJSON>(linkJSON, {headers});
  }

  postLogin(params: any) {
    var linkJSON = linkBaseAPI + 'loginPost.json';

    return this.http.post(linkJSON, params);
  }
}
