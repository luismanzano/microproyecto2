import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from 'firebase';
import {emailVerified} from '@angular/fire/auth-guard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  purchases: any[];

  constructor(
    protected userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getPurchases().subscribe(purchases => {
          console.log('lo que traemos de la coleccion');
          console.log(purchases);
          this.purchases = [];

          purchases.forEach((purchasesData: any) => {
            console.log(purchasesData.payload.doc.data());
            this.purchases.push({
              id: purchasesData.payload.doc.id,
              name: purchasesData.payload.doc.data().name,
              email: purchasesData.payload.doc.data().email,
              game: purchasesData.payload.doc.data().game,
            });
          }  );
      });
}

getPurchases() {
    this.userService.getPurchases();
  }

}
