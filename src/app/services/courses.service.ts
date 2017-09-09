import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  courses = ["Java", "Php", "Node JS", "Angular JS", ".Net"];

  constructor() { }
  
  getcourses(){
  	return this.courses;
  }

  addcourse(newcourse){
  	if(newcourse)
    this.courses.push(newcourse);
  }

  removecourse(index){
  	this.courses.splice(index, 1);
  }


}
