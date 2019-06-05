import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  update = new Date();
  appareils =[
    {
        name : "Frigo",
        status : "Allumé"
    },
    {
      name : "Téléviseur",
      status : "Eteint"
    },
    {
      name : "Ordinateur",
      status : "Eteint"
    }
  ];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor () {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

  }

  onAllumer() {
    console.log('On allume tout!')
  }
}
