import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegistraionService } from 'src/app/_services/registraion.service';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {
  userForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private registerSrv: RegistraionService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.userForm = this.formBuilder.group({
      fullname: [(this.data.user.fullname ? this.data.user.fullname : ''), Validators.required],
      email: [(this.data.user.email ? this.data.user.email : ''), [Validators.email, Validators.required]],
      birthday: [(this.data.user.birthday ? this.data.user.birthday : ''), Validators.required],
      gender: [(this.data.user.gender ? this.data.user.gender : ''), Validators.required]
    })
  }
  onNoClick() {
    this.dialogRef.close();
  }
  editUser() {
    if (this.userForm.valid) {
      this.registerSrv.updateUser(this.userForm.value, this.data.user.id);
      this.onNoClick();
    }
  }
}
