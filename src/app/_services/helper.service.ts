import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  isSidebarOpen = false;
  isDashboard = false;
  constructor() { }
}
