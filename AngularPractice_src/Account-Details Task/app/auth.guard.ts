import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router)
  let loggedIn=sessionStorage.getItem("islogedin")
  if(loggedIn=='false'){
    alert("Please Login, Redirecting to login page!!")
    _router.navigate(['login'])
    return false;
  }
  return true;
};
