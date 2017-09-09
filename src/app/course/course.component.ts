import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CoursesService]
})
export class CourseComponent implements OnInit {
	courses;
  newcourse: string = 'java';  
  username = 'Text';
  constructor(public coursesService : CoursesService) {
  	this.courses = coursesService.getcourses();
  }
  addcourse() {
    event.preventDefault();
    this.coursesService.addcourse(this.newcourse);
    this.newcourse = "";
  }

  removecourse(i){
    event.preventDefault();
    this.coursesService.removecourse(i);
  }

  ngOnInit() {
  }


}
