import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService {
  @Output() enviar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  enviarDato(dato){
    this.enviar.emit(dato);
  }
}
