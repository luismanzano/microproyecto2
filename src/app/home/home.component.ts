import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  searchy: string;

  constructor(
    protected userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        (data) => { // Success
          this.users = data['results'];
          console.log(this.users);
        },
        (error) => {
          console.error(error);
        }
      );

  }

  nextPage() {
      this.userService.nextPage();

      this.userService.getUsers()
        .subscribe(
          (data) => { // Success
            for (var i = 0; i < 20; i++) {

              this.users.push(data['results'][i]);
              console.log(this.users);
            }


          },
          (error) => {
            console.error(error);
          }
        );
    }


  search() {

    // tslint:disable-next-line:triple-equals
    if (this.searchy != '') {
    this.userService.search = this.searchy;
    this.userService.getSearch()
      .subscribe(
        (data) => { // Success
          console.log('lo que trae la busqueda ' + data)
          this.users = data['results'];
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.ngOnInit();
    }
  }
}

