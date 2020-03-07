import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  page = 1;
  search: string;
  gameFetch: string;

  clientName: string;
  clientEmail: string;
  clientGame: string;

  getUsers() {
    return this.http.get('https://rawg.io/api/games?page=' + this.page + '&page_size=20');
  }

  nextPage() {
    this.page = this.page + 1;
  }

  getSearch() {
    return this.http.get('https://rawg.io/api/games?search=' + this.search + '&page_size=20');
    console.log('searchy en el servicio ' + this.search);
  }

  getGame(url: string) {
    return this.http.get('https://rawg.io/api/games/' + url);
    console.log('El slug del juego que queremos buscar ' + url);
  }

  addPurchase(){
    return this.firestore.collection('purchases').doc().set({

    });
  }
}
