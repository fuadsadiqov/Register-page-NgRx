import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions';
import { isSubmittingSelector } from '../../store/selector';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  registerForm!: FormGroup  
  isSubmitting$!: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store){}

  initalizeForm(){
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(6)]]
    })
  }
  initalizeValues(){
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))    
  }
  onSubmit(): void{
    console.log('submit', this.registerForm.value);
    this.store.dispatch(registerAction({user: this.registerForm.value} ));  
  }
  ngOnInit(): void{
    this.initalizeForm()
    this.initalizeValues()
  }
  
}
