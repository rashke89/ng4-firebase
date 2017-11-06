import { Injectable } from '@angular/core';

// fatch from firestore / need to inject in dependencies in constructor than can be used in service
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

import { Item } from '../models/item';

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  // inject dependencies
  constructor(public afs: AngularFirestore) {

    //set colelction
    this.itemsCollection = this.afs.collection('Items', ref => ref.orderBy('title', 'asc'));

    // getting collection
    //this.items = this.afs.collection('Items').valueChanges();
    this.items = this.afs.collection('Items').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    })
   }

   getItems() {
     return this.items;
   }

   addItem(item: Item){
    this.itemsCollection.add(item);
   }

   deleteItem(item: Item){
     this.itemDoc = this.afs.doc(`Items/${item.id}`);
     this.itemDoc.delete();
   }
}