import { Component, OnInit } from '@angular/core';
import { Usuario }  from "../usuario"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 
  public usuario: Usuario= new Usuario('');

  constructor() { }

  ngOnInit() {    
  }

  onReset(event: any) {
    let inputEvent=<HTMLInputElement> event;
    this.usuario.name="";
  }

}

