import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  title: string = '';
  body: string = '';

  @Output() addPost: EventEmitter<Post> = new EventEmitter();

  createPost(): void {
    const post: Post = {
      title: this.title,
      body: this.body,
      votes: 1,
    };

    this.addPost.emit(post);

    this.resetForm();

    alert('Post created successfully');
  }

  resetForm(): void {
    this.title = '';
    this.body = '';
  }
}
