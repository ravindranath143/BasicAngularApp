import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';

import { KeysPipe } from './pipes/objects.pipe';
import { PostsComponent } from './posts/posts.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CourseComponent,
    HeaderComponent,
    NavComponent,
    KeysPipe,
    PostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
