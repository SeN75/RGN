import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar,
  ) { }

  showMessage(message: any, status: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      direction: 'rtl',
      panelClass: [status]
    })
  }
}
