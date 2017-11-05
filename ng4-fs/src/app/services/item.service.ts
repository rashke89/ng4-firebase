import { Injectable } from '@angular/core';

// fatch from firestore / need to inject in dependencies in constructor than can be used in service
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

import { Item } from '../models/item';

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  // inject dependencies
  constructor(public afs: AngularFirestore) {
    // getting collection
    this.items = this.afs.collection('Items').valueChanges()
   }

   getItems() {
     return this.items;
   }
}