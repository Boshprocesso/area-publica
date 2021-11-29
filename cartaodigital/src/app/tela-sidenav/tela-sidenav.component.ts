import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tela-sidenav',
  templateUrl: './tela-sidenav.component.html',
  styleUrls: ['./tela-sidenav.component.css']
})
export class TelaSidenavComponent implements OnInit {
  @Output() toggleSlider = new EventEmitter();  //Aqui para quando precisa conectar as duas interfaces do projeto
  @Output() pageRequest = new EventEmitter();  //Aqui para quando precisa conectar as duas interfaces do projeto

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
		this.toggleSlider.emit();
	}
}
