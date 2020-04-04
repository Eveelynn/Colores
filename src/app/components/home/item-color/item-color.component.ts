import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-color',
  templateUrl: './item-color.component.html',
  styleUrls: ['./item-color.component.css']
})
export class ItemColorComponent implements OnInit {
  @Input() color:any;

  constructor() { 
  }

  ngOnInit() {
  }

}
