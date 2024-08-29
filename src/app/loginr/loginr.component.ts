import { Component } from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-loginr',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './loginr.component.html',
  styleUrl: './loginr.component.scss'
})
export class LoginrComponent {
  loginform!: FormGroup;

  submitted = false;
  userLogin = {
    "email": "",
    "password": ""
  }

  constructor(private formbuilder:FormBuilder){ }
    ngOnInit(){
      this.loginform = this.formbuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

    submitlogin(){
      this.submitted = true;
      if(this.loginform.valid){
        return
    }else{
        this.userLogin.email = this.loginform.value.email
        this.userLogin.password = this.loginform.value.password
        if(this.userLogin.email == "admin@gmail.com" &&
        this.userLogin.password == "12345"){
          alert("เข้าสู่ระบบสำเร็จ")
        }else{
          alert("เข้าสู่ระบบไม่สำเร็จ")
        }
      }
    }

  resetForm(){
    this.submitted = true;
    this.loginform.reset();
  }
}
