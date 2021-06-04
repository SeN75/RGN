import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';

@Component({
  selector: 'app-tounaments-dialog',
  templateUrl: './tounaments-dialog.component.html',
  styleUrls: ['./tounaments-dialog.component.scss']
})
export class TounamentsDialogComponent implements OnInit {
  isLinear = false;
  inputs = [
    { name: 'TOURNAMENTS.name', controlName: 'name', grid: 'col' },
    { name: 'TOURNAMENTS.number-of-participants', controlName: 'numberOfParticipants', grid: 'col' },
  ]
  createForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    numberOfParticipants: ['', Validators.required],
    gameId: ['1', Validators.required],

  })
  createForm2: FormGroup = this.formBuilder.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    logo: ['', Validators.required],
    prize: ['', Validators.required],
    rule: ['', Validators.required],
    descriptioon: ['', Validators.required],

  })
  constructor(public dialogRef: MatDialogRef<TounamentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
