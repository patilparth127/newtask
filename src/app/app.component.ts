import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

 
  constructor(private router: Router) {}


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigate(res : any){
    this.router.navigate(['/'+res]);

  }
}
