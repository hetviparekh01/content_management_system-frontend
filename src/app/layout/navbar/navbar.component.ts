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
    Swal.fire({
      title: "Are you sure you want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
          this.ls.clearLocalStorage()
          this.route.navigate(['/auth/login'])
      }
    }).catch((error)=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:"Error in logging out", 
      });
    });
  }
  
}
