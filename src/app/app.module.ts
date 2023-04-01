import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, Title } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from "@angular/router";


 @NgModule({
  declarations:[
    AppComponent,
    HighlightDirective,
    HomeComponent,
    ProfileComponent,
  ],
  imports:[
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[],
  bootstrap:[
    AppComponent

  ]


 })
 export class AppModule{}

 export class MyTitle extends TitleStrategy{
  constructor(private readonly title: Title){
    super();
  }
  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if(title != undefined){
      this.title.setTitle(`Mysite | $title`)
    }
  }
 }
