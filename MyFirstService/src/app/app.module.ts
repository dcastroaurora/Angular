import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Route[] = [
  { path:'', component: InicioComponent},
  { path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
