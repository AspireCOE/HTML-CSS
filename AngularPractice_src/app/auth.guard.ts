import { CanActivateFn, Router } from '@angular/router';
import { Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let _route=Inject(Router);
  let loggedin=sessionStorage.getItem('isloggedin')
  if(loggedin==='false'){
    alert("Please Login")
    _route.navigate(['templateform']);
    return false;
  }
  return true;
};
