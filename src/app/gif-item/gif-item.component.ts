import { Component, OnInit, Input } from '@angular/core';
import { GifItem } from '../model/gif-item';

@Component({
  selector: 'gpc-gif-item',
  templateUrl: './gif-item.component.html',
  styleUrls: ['./gif-item.component.scss']
})
export class GifItemComponent implements OnInit {

  constructor() { }

   @Input() data: GifItem;


  ngOnInit(): void {
  }

}
