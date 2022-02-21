import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _fireauth: AngularFireAuth) {
    
   }

  async register( email: string, password:string){
    try {
      return await this._fireauth.createUserWithEmailAndPassword(email,password);
    } catch (error) {
      console.log('Ha ocurrido un error con su registro normal', error);
      return null;
    }
  }


  async login( email: string, password:string){
    try {
      return await this._fireauth.createUserWithEmailAndPassword(email,password);
    } catch (error) {
      console.log('Ha ocurrido un error con su login', error);
      return null;
    }
  }

  
  async loginWhitGoogle( email: string, password:string){
    try {
      return await this._fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log('Ha ocurrido un error de login de google', error);
      return null;
    }
  }

 getUserLogged(){
  return this._fireauth.authState;
 }

 logout(){
    this._fireauth.signOut();
 }
  
}
