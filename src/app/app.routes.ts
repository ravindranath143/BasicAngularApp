import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component'

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'posts', component: PostsComponent }
    ]
  },
  { path: 'users', component: UsersComponent },
  { path: 'courses',      component: CourseComponent },
  { path: 'posts',      component: PostsComponent }
];