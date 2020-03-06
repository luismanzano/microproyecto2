import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }

  page = 1;
  search: string;

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
}
