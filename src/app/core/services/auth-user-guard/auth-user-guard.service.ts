import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class AuthUserGuardService implements CanActivate {
  constructor(private router: Router, private storage: LocalStorageService) { }

  canActivate() {
    let currentUser: IUser = this.storage.retrieve('currentUser');
    if (currentUser && currentUser.id) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
