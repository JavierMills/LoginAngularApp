import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario = {
    email : '',
    password : ''
  }
  title = 'loginAngular';
  constructor( private _authService: AuthService) {
    
  }

  Ingresar(){
    console.log(this.usuario);
    const { email, password} = this.usuario;
    this._authService.login(email, password).then(res => {
      console.log('Se registro normal', res);
    })
  }

  IngresarConGoogle(){
    const { email, password} = this.usuario;
    this._authService.loginWhitGoogle(email, password).then(res => {
      console.log('Se registro Google ', res);
    })
  }
  ObtenerUsuarioLogeado(){
    this._authService.getUserLogged().subscribe(res =>{
      console.log(res?.email);

    });
  }

  Logout(){
    this._authService.logout();

  }
}
