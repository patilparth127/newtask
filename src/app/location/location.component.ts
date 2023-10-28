import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  isSidebarOpen: boolean = false;
  constructor(private router: Router) {}
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }

  navigate(res : any){
    this.router.navigate(['/'+res]);

  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
