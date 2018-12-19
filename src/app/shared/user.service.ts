import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from './user-model';

@Injectable()
export class UserService {
  isLoggedin = false;

  constructor(private _router: Router) {

  }
  private _user: UserModel;

  login(email: string, password: string) {
    if (email === 'angular' && password === 'angular') {
        this._user = new UserModel(UserModel.exampleUser);
        this.isLoggedin = true;
        console.log('sikeres belépés', this.isLoggedin);
        this._router.navigate(['/user']);
    }
    return false;
  }

  register(param?: UserModel) {
    if (param) {
      this._user = new UserModel(param);
    } else {
      this._user = new UserModel(UserModel.exampleUser);
    }
    this.isLoggedin = true;
    this._router.navigate(['user']);
}

  logout() {
    delete(this._user);
    this.isLoggedin = false;
    this._router.navigate(['/home']);
    console.log('sikeres belépés', this.isLoggedin);
  }
}
