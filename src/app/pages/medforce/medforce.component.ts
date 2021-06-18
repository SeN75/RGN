import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-2';
import { tournaments, tournmaents } from 'src/app/_common/globle';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'medforce',
  templateUrl: './medforce.component.html',
  styleUrls: ['./medforce.component.scss']
})
export class MedforceComponent implements OnInit {
  tournamentsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: false,
    rtl: true,
    navSpeed: 500,
    margin: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };
  tournaments: any
  constructor(public tournamentSrv: TournamentService, public router: Router) {
    this.tournamentSrv.getTournament();
    localStorage.removeItem('tournamentId');
    setTimeout(() => {
      this.tournaments = this.tournamentSrv.tournamentsData
    }, 1000)
  }

  ngOnInit(): void {
  }
  showTournament(tournament: any) {
    this.tournamentSrv.tournaments = tournament;
    this.router.navigateByUrl("/tournament/" + (tournament.permalink ? tournament.permalink : tournament.guidId ? tournament.guidId : tournament.id))
  }
}
