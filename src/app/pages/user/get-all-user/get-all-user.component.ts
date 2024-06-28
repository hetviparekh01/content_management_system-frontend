import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { UserService } from 'src/app/core/services/user.service';
import { CustomRenderComponent } from 'src/app/shared/custom-render/custom-render.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-user',
  templateUrl: './get-all-user.component.html',
  styleUrls: ['./get-all-user.component.scss']
})
export class GetAllUserComponent implements OnInit {
 

  userData: any;
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.getAllUser()
  }
  cloumDefs!: ColDef[];
  columnDefs = [
    { headerName: 'Name', field: 'name' ,flex:3},
    { headerName: 'Email', field: 'email', flex:3 },
    { headerName: 'Role', field: 'role', flex:3},
    { headerName: 'TotalContent', field: 'totalContent', flex:3},
    { headerName: '', field: '', flex:3,cellRenderer:CustomRenderComponent,cellRendererParams:{
      viewBtn:(id:string)=>this.viewUser(id),
      updateBtn:(id:string)=>this.updateUser(id),
      deleteBtn:(id:string)=>this.deleteUser(id)
    }},
    
];
viewUser(id: string) {
  console.log("view Btn clcicked");
}
updateUser(id: string) {
  this.router.navigate([`/user/edituser/${id}`])
}
deleteUser(id: string) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.userService.deleteUSer(id).subscribe({
        next:(response:any)=>{
          Swal.fire({
            icon: "success",
            title: response.content,
            showConfirmButton: false,
            timer: 1500
          });
          this.getAllUser()
        },
        error:(error)=>{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:error.error.content, 
          });
        }
      })
    }
  });
}

  getAllUser(){
    this.userService.getUser().subscribe({
      next: (response: any) => {
        this.userData = response.content;
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
