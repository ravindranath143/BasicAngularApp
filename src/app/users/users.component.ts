import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
	users;
  constructor(public usersService: UsersService) { 
    console.log(usersService.getallUsers());
  	this.users = usersService.getallUsers();
  }

  removeUser(i,j,event){
    event.preventDefault();
    this.usersService.removeUser(i);
  }

  ngOnInit() {
    
  }

}
