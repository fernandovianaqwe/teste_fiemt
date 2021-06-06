import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private route: Router ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
         if (!sessionStorage.getItem("token"))  {
             return this.route.navigate(['']);
         } 
        return true;
    }
 
}