import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent {
  @Input() post: Post;

  constructor() {
    this.post = {
      id: 0,
      title: '',
      body: '',
      votes: 1,
    };
  }

  upvote(post: Post): void {
    post.votes++;
  }

  downvote(post: Post): void {
    post.votes--;
  }
}
