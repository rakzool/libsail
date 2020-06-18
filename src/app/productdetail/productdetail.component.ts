import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { flyInOut, expand } from '../animations/app.animation';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comments' ;


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class ProductdetailComponent implements OnInit {
  
  product: product;

  commentForm: FormGroup;
  comment: Comment;
//----------------------------------------------------------------------------------------------------------------
  formErrors = {
    'author': '',
    'comment': ''
  };


  validationMessages = {
    'author': {
      'required':      'Author Name is required.',
      'minlength':     'Author Name must be at least 2 characters long.',
      'maxlength':     'Author Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 1 characters long.'
    }
  };

  @ViewChild('fform') feedbackFormDirective;
CommentFormDirective: any;
//_______________________________________________________________________________________________________________________________

  constructor(private productservice : ProductService,
     private route : ActivatedRoute,
     private location: Location,
     private fb: FormBuilder) { this.createForm()}
     //-------------------------------------------------------------------------------------------------

     createForm() {
      this.commentForm = this.fb.group({
        author: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        comment :['',[Validators.required, Validators.minLength(1)]],
        rating: 5
      });
      this.commentForm.valueChanges
      .subscribe(data =>  this.onValueChanged(data));
  
      this.onValueChanged();
     }


     onValueChanged(data?: any) {
      if (!this.commentForm) { return; }
      const form = this.commentForm;
      for (const field in this.formErrors ) {
        if (this.formErrors.hasOwnProperty(field)) {
          // clear previous error message (if any)
          this.formErrors[field] = '';
          const control = form.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
              if (control.errors.hasOwnProperty(key)) {
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }

    onSubmit() {
      this.comment = this.commentForm.value;
    console.log(this.comment);
    this.comment.date  = new Date().toISOString();
     
    this.comment.rating = this.commentForm.value.rating;
    this.comment.author = this.commentForm.value.author;
    this.comment.comment = this.commentForm.value.comment;
    this.commentForm.reset({
       author:'',
       comment: '',
       rating: 5
    });
    this.feedbackFormDirective.resetForm();

    }
//------------------------------------------------------------------------------------------------------------
  ngOnInit(){
    let id =  this.route.snapshot.params['id'];
    this.product = this.productservice.getProduct(id);
  }

  goBack(): void {
    this.location.back();
  }

}
