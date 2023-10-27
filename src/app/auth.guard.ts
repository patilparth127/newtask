import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(state['url']);
  
  const customRouter = new Router();
  const token = localStorage.getItem('token');
  if (token != null) {
    return true;
  }

  return false;
  }
