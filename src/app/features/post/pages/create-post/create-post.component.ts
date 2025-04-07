import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
 
})
export class CreatePostComponent {
  createPostForm = new FormGroup({
    title: new FormControl<string>('', {nonNullable: true}),
    content: new FormControl<string>('', { nonNullable: true })
  });

  onFormSubmit(){
    console.log(this.createPostForm.value);
  }
}
