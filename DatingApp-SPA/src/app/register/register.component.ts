import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('Hello', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', Validators.required)
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {mismatch: true};
  }

  register(){
  //   this.authService.register(this.model).subscribe(() => {
  //     this.alertify.success('registration successfull');
  //   }, error => {
  //     this.alertify.error(error);
  //   });
    console.log(this.registerForm.value);
   }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
