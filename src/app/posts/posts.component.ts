import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
	posts;

  constructor(public postsService: PostsService) {
  		postsService.getPosts().subscribe(posts => {
	      this.posts = posts;
	      });
  	 }

  ngOnInit() {

  }
  removepost(i){
  	this.posts.splice(i,1);
  }

  addpost(i){
  	this.posts.push(
  		{
  			body:"testing",
  			title:"my title",
  			id:10
  		}
  	)
  }

}
