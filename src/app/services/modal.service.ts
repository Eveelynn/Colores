import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalServicesService {
  public modalRef: BsModalRef; 

  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };

  constructor(
    private modalService: BsModalService
  ) { }
  
  openModal(component) {
    this.modalRef = this.modalService.show(component, this.config);
  }

  closeModal(){
    this.modalRef.hide();
  }
}