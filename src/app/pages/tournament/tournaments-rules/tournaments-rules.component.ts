import { Component, OnInit } from '@angular/core';
import { DialogService } from './../../../_services/dialog.service';

@Component({
  selector: 'app-tournaments-rules',
  templateUrl: './tournaments-rules.component.html',
  styleUrls: ['./tournaments-rules.component.scss']
})
export class TournamentsRulesComponent implements OnInit {
  ruleNav = {
    battle: {
      isSystem: false,
      withLeague: false,
      withExclusion: false

    },
    point: {
      isSystem: false,
      isSimple: false,
      isGroup: false
    }
  }
  constructor(public dialogSrv: DialogService) { }

  ngOnInit(): void {
  }

}
