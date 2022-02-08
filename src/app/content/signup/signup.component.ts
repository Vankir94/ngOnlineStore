import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public validators = [Validators.required];

  public signupForm = new FormGroup({
    username: new FormControl('', this.validators),
    email: new FormControl('', this.validators),
    password: new FormGroup({
      password: new FormControl('', this.validators),
      cpassword: new FormControl('', this.validators)
    },{
      validators: [this.equalValidator]
    })
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goLogin(): void{
    this.router.navigate(['/login']);
  }

  public signup(formValue: any): void {
    console.log(formValue);
  }

  public equalValidator(control: FormGroup): ValidationErrors | null {
    const [password, cpassword] = Object.values(control.value);
    return password === cpassword ? null : {
      'nonEquel': 'Pssword are not equel'
    }
  }
}
