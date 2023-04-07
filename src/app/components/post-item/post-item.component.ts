import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent {
  @Input() post: Post;
  @Output() hidePost: EventEmitter<Post> = new EventEmitter();

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

  hide(post: Post): void {
    this.hidePost.emit(post);
  }
}
