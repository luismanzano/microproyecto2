import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { ActivatedRoute } from '@angular/router';


interface Game {
  name: string;
  description: string;
  rating: string;
  tba: boolean;
  image: any;
  website: string;
  developers: any[];
  genres: any[];
  platforms: any[];
  released: string;
  trailer: string;
  screenshots: any[];
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent implements OnInit {

  game: any;

  url: string;

  clientName: string;
  clientEmail: string;
  //clientGame = this.game.name;

  constructor(
    protected userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log('er paramertro' + params['slug']);
      this.url = params['slug'];

      this.userService.getGame(params['slug'])
        .subscribe( (game: any) => {
          console.log('el juego traido por la api');
          console.log(game);
          console.log(game.name);
          console.log(game.developers);
          this.game = {
            name: game.name,
            description: game.description_raw,
            rating: game.rating,
            tba: game.tba,
            image: game.background_image,
            website: game.website,
            developers: game.developers,
            genres: game.genres,
            platforms: game.platforms,
            released: game.released,
            trailer: game.clip.clip,
            screenshots: game.stores
          };
        } );
    });
  }
  //
   addPurchase() {
    if (this.clientName != "" && this.clientEmail != "") {
      alert('Compra Realizada')
      this.userService.addPurchase(this.clientEmail, this.clientName, this.game.name);
      this.clientName = '';
      this.clientEmail = '';
    } else {
      alert("Faltan campos de datos");
    }
  }


}
