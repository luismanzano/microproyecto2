import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  game: any;

  constructor(
    protected userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getGame()
      .subscribe(
        (data) => {
          // Success
          console.log('Este es el juego que trajimos')
          console.log('El juego de info' + data)
          this.game = data['results'];
          console.log(this.users);
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
