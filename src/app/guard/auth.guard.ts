// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authservice : AuthService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if (this.authService.isAuthenticated()) {
//       return true;
//     } else {
//       // Redirect to the login page when the user is not authenticated
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }