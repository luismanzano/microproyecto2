import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
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

  game: Game;

  url: string;

  constructor(
    protected userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log('er paramertro' + params['slug']);
      this.url = params['slug'];

      this.userService.getGame(params['slug'])
        .subscribe( game => {
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


    // this.userService.getGame()
    //   .subscribe(
    //     (data) => {
    //       // Success
    //       console.log('Este es el juego que trajimos')
    //       console.log('El juego de info' + data)
    //       this.game = data['results'];
    //       console.log(this.users);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
  //}

}
