import { Component, OnInit, Injectable } from '@angular/core';

import { ColoresService } from 'src/app/services/colores.service';
import { ModalServicesService } from '../../services/modal.service';
import { EmitService } from '../../services/emit.service';

import { ModalColorComponent } from './modal-color/modal-color.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {
  colores: any;

  //paginador

  page:number = 1;
  per_page:number = 1;
  total = 1;
  total_pages = 1;

  constructor(
    private coloresService: ColoresService,
    private modalService: ModalServicesService,
    private emitService: EmitService
  ) { 
  }

  async obtenerColores() {
    let response = await this.coloresService.obtenerColores(this.page);
    if(response['error'] === undefined){
      this.colores = response['data'];
      this.per_page = response['per_page'];
      this.page = response['page'];
      this.total = response['total'];
      this.total_pages = response['total_pages'];
    }
    else{
      alert('error');
    }
  }

  ngOnInit() {
    this.obtenerColores();
  }

  async pageChanged(){
    await this.obtenerColores();
  }
  abreModal(color){
    this.modalService.openModal(ModalColorComponent);
    this.emitService.enviarDato(color);
  }
}
