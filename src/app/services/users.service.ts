import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {
	users: any;
  posts: any;
  constructor(private http: Http) { }

  getUsers(){
  	return ["Ravindra", "kad", "Arun", "Avi"];
  }

  getallUsers(){
  	this.users= {1:{Name: "Ravindra",Email:"Ravindra@gmail.com",Phone:"8686525288",Age:26,Gender:"male"},
	  		  2:{Name: "Kad",Email:"Kad@gmail.com",Phone:"87398473894",Age:26,Gender:"male"},
	  		  3:{Name: "Arun",Email:"Arun@gmail.com",Phone:"9272824234",Age:27,Gender:"male"},
	  		  4:{Name: "Avi",Email:"Avi@gmail.com",Phone:"9267343",Age:30,Gender:"male"},
	  		  5:{Name: "Sudhagar",Email:"Sudhagar@gmail.com",Phone:"983473743",Age:30,Gender:"male"},
	  		  6:{Name: "Mani",Email:"Mani@gmail.com",Phone:"987567343",Age:28,Gender:"male"}};
	  		  console.log(1);
  	// for(let result of this.users){
  	//    console.log(1);
  	// }
	  	return this.users ;
  }

  removeUser(i){
  console.log(this.users[i]);
  delete this.users[i];
  console.log(this.users);
  }

}
