import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: any;
  ngOnInit(): void {
    this.getParticularUser()
  }
  constructor(private userService:UserService){}
  getParticularUser(){
      this.userService.getParticularUser().subscribe({
        next: (response: any) => {
          this.userData = response.content;
          console.log(this.userData);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: err.error.content,
            text: 'Something went wrong!',
          });
        },
      })
  }
}
