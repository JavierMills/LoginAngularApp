import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './components/navbar/navbar.component';

const firebaseConfig = {
  apiKey: "AIzaSyAX9VtH7ouF2Tpyhdepli8YFwybNSzlG0o",
  authDomain: "firechat-app-282dd.firebaseapp.com",
  projectId: "firechat-app-282dd",
  storageBucket: "firechat-app-282dd.appspot.com",
  messagingSenderId: "955373295017",
  appId: "1:955373295017:web:9008dd5794076e170560b8"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
