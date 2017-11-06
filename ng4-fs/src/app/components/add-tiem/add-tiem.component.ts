import { Component, OnInit } from '@angular/core';

import { ItemService } from "../../services/item.service";
import { Item } from "../../models/item";

@Component({
  selector: 'app-add-tiem',
  templateUrl: './add-tiem.component.html',
  styleUrls: ['./add-tiem.component.css']
})
export class AddTiemComponent implements OnInit {
  item: Item = {
    title: '',
    desc: ''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.item.title !== '' && this.item.desc !== ''){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.desc = '';
    }
  }
}
