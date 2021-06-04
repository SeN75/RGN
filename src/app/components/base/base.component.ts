import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  isSelectd = false;

  games = [
    {
      logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
      isSelected: false
    },
    {
      logo: '../../../assets/images/games/egs-rocketleague-psyonixllc-s3-2560x1440-56d55e752216.jpg',
      isSelected: false
    },
    {
      logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
      isSelected: false
    }
  ]
  selectGame(index: number) {
    for (let i = 0; i < this.games.length; i++) {
      if (i != index)
        this.games[i].isSelected = false;
    }

    this.games[index].isSelected = !this.games[index].isSelected;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
