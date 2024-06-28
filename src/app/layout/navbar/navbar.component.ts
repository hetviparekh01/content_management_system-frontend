import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

constructor(private ls:LocalstorageService,private route:Router){}
  title:string=this.ls.getName() as string
  logOut() {
    this.ls.clearLocalStorage()
     this.route.navigate(['/auth/login'])
     Swal.fire({
      icon: 'success',
      title: "USER LOGGED OUT SUCCESSFULLY",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
