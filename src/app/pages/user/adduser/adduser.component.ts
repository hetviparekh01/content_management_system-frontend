import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent {
  signupform!: FormGroup;
  userId = this.activatedRoute.snapshot.paramMap.get('id') as string;
  isUpdate: boolean = false;
  isSubmit: boolean = true;
  constructor(
    private fb: FormBuilder,
    private userServie: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.signupform = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required])],
    });
    if (this.userId) {
      this.isUpdate = true;
      this.isSubmit = false;
      this.getUserById();
    }
  }
  getUserById() {
    this.userServie.getUserbyId(this.userId).subscribe({
      next: (response: any) => {
        this.signupform.patchValue({
          name: response.content.name,
          email: response.content.email,
          role: response.content.role,
        });
      },
    });
  }
  onSubmit() {
    if (this.isSubmit) {
      this.userServie.signUp(this.signupform.value).subscribe({
        next: (response: any) => {
          Swal.fire({
            icon: 'success',
            title: response.content,
            showConfirmButton: false,
            timer: 1500,
          });
          this.signupform.reset();
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.content,
          });
        },
      });
    }else{
      this.userServie.updateUser(this.signupform.value,this.userId).subscribe({
        next: (response: any) => {
          Swal.fire({
            icon: 'success',
            title: response.content,
            showConfirmButton: false,
            timer: 1500,
          });
          this.signupform.reset();
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.content,
          });
        },
      });
    }
    this.router.navigate(['/user/getalluser'])
  }
}
