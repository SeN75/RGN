import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from './../../_services/dialog.service';

@Component({
  selector: 'rule-card',
  templateUrl: './rule-card.component.html',
  styleUrls: ['./rule-card.component.scss']
})
export class RuleCardComponent implements OnInit {
  @Input() rule: any = {
    name: 'new rule',
    tournamentRuleTypeId: 6
  }
  constructor(private dialogSrv: DialogService) { }

  ngOnInit(): void {
  }
  rulesDialogs(data: any) {
    if (data.tournamentRuleTypeId == 3)
      this.dialogSrv.openRuleBattleExclusionDialog('edit', data)
    else if (data.tournamentRuleTypeId == 4)
      this.dialogSrv.openRuleBattleLeagueDialog('edit', data)
    else if (data.tournamentRuleTypeId == 5)
      this.dialogSrv.openRulePointSimpleDialog('edit', data)
    else if (data.tournamentRuleTypeId == 6)
      this.dialogSrv.openRulePointGroupDialog('edit', data)

  }
}
