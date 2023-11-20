import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor() { }

  username: string = "";
  password: string = "";

  public realizarlogin(): void {

    

  }

  onUsername(username: string){
      this.username = username;
  }
  onPassword(password: string){
    this.password = password;
}


}
