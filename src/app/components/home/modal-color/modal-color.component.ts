import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModalServicesService } from '../../../services/modal.service';
import { EmitService } from '../../../services/emit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-color',
  templateUrl: './modal-color.component.html',
  styleUrls: ['./modal-color.component.css']
})
export class ModalColorComponent implements OnInit, OnDestroy {
  emitSubs: Subscription;
  color:any = {
    id: 0,
    name: '',
    color: '',
    pantone_value: ''
  }

  constructor(
    private modalServicesService: ModalServicesService,
    private emitService: EmitService
  ) { }

  ngOnInit() {
    this.emitSubs = this.emitService.enviar.subscribe(data => {
      this.color = data;
    });
  }
  
  ngOnDestroy(): void {
    this.emitSubs.unsubscribe();
  }
  
  cerrarModal(){
    this.modalServicesService.closeModal();
  }

  copyToClipboard(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}
