import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FormBuilder } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';

//Para definir o serviço de acesso do banco de dados;
import { BeneficiosService } from '../dao/beneficios.service';
import { BeneficiarioJSON } from '../dao/tiposJSON';
import { first } from 'rxjs/operators';
import { LoginService } from '../dao/login.service';

@Component({
  selector: 'app-page-beneficios-terceiro',
  templateUrl: './page-beneficios-terceiro.component.html',
  styleUrls: ['./page-beneficios-terceiro.component.css']
})
export class PageBeneficiosTerceiroComponent implements OnInit {


  getBeneficiario !: BeneficiarioJSON;

  constructor(private router: Router,
              private loginService: LoginService,
              private beneficiosService: BeneficiosService
              ) { }
  
  ngOnInit(): void {
    this.carregaBeneficiario();
    }
    
  //Função que trata o JSON recebido pelo GET
  carregaBeneficiario(){
    //Obtém os valores para alimentar a página
    this.beneficiosService.getBeneficiarios()
        .pipe(first())
        .subscribe(data=>{    
          try{
            console.warn(data);
            if(data[0].nomeTerceiro){
              this.getBeneficiario = data[0];
            }
          }catch{
              
          }
          });
  }
}

