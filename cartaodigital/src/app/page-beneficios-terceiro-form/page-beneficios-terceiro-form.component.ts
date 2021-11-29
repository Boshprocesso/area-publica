import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';

import { BeneficiarioJSON } from '../dao/tiposJSON';

interface OpcoesForm {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-page-beneficios-terceiro-form',
  templateUrl: './page-beneficios-terceiro-form.component.html',
  styleUrls: ['./page-beneficios-terceiro-form.component.css']
})
export class PageBeneficiosTerceiroFormComponent implements OnInit {
  @Input() objeto!: BeneficiarioJSON;

  showSpinner = false;

  opcoesForm: OpcoesForm[] = [
    {value: 'cpf', viewValue: 'Somente CPF'},
    {value: 'colaborador', viewValue: 'Colaborador Bosch'}
  ];

  formEnvio = this.formBuilder.group({
    opcao: '',
    nome: '',
    edv: ''
  });
  
  opcaoSelecionada!:string;


  constructor(private router: Router,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit(): void {
    if(this.objeto){
      this.formEnvio.controls['nome'].setValue(this.objeto.nomeTerceiro);
      this.formEnvio.controls['edv'].setValue(this.objeto.identificaoTerceiro);
      
      this.formEnvio.controls['opcao'].disable();
      this.formEnvio.controls['nome'].disable();
      //this.formEnvio.controls['edv'].disable();
    }
  }

  alteraSelecaoColaboradorCPF(event: MatOptionSelectionChange, state: any){
    if (event.source.selected) {
      //console.log('You selected: ' , state);
      this.opcaoSelecionada = state.value;
      //console.log(this.opcaoSelecionada);
      if(state.value != "cpf"){
        this.formEnvio.controls['nome'].disable();
      }else{
        this.formEnvio.controls['nome'].enable();
      }
    }
  }


  
  //Função que irá ser invocada dentro do formulário.
  onSubmit(): void{
    //this.items = this.carrinhoService.limparCarrinho();
    this.showSpinner = true;
    if(this.objeto){
      this.deleteTerceiro();
    }else{
      this.postTerceiro();
    }
  }

  postTerceiro(){
    if(this.formEnvio.status=="VALID"){
      console.warn('Cadastrando o Terceiro! Request do POST', this.formEnvio.value);
    }else{
      console.warn('Verifique os valores digitados, estão errados!');
    }
    //this.formEnvio.reset();
  }

  deleteTerceiro(){
    if(this.formEnvio.status=="VALID"){
      console.warn('Deletando o Terceiro! Request do DELETE', this.formEnvio.value);
    }else{
      console.warn('Verifique os valores digitados, estão errados!');
    }
  }
}
