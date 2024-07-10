import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { ContentService } from 'src/app/core/services/content.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { CustomRenderComponent } from 'src/app/shared/custom-render/custom-render.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss'],
})
export class ViewContentComponent implements OnInit {
 
  contentData: any = [];

  ngOnInit(): void {
    if(this.ls.getRole()!=='editor'){
      this.getContent();
    }else{
      this.getContentForUser()
    }
  }
  constructor(private contentServcie: ContentService,private router:Router,private ls:LocalstorageService) {}
  columnDefs: ColDef[] = [
    { headerName: 'Title', field: 'title', flex: 1 },
    { headerName: 'Type', field: 'type', flex: 1   },
    { headerName: 'Description', field: 'description', flex: 2 },
    { headerName: 'ContentCreator', field: 'userDetails.name', flex: 2 },
    { headerName: 'CreatedAt', field: 'createdAt', flex: 2},
    {
      headerName: '',
      field: '',
      flex: 2,
      cellRenderer: CustomRenderComponent,
      cellRendererParams: {
        viewBtn: (id: string) => this.viewContent(id),
        updateBtn:(id:string)=>this.updateContent(id),
        deleteBtn:(id:string)=>this.deleteContent(id)
      },
    },
  ];
  viewContent(id: string) {
    this.router.navigate ([`/content/particularcontent/${id}`])
  }
  deleteContent(id: string) {
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
        this.contentServcie.deleteContent(id).subscribe({
          next:(response:any)=>{
            Swal.fire({
              icon: "success",
              title: response.content,
              showConfirmButton: false,
              timer: 1500
            });
            this.getContent()
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
  updateContent(id: string) {
    this.router.navigate ([`/content/updatecontent/${id}`])
  }
 
  getContent() {
    this.contentServcie.getContent().subscribe({
      next: (response: any) => {
        this.contentData = response.content;
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.content,
          text: 'Something went wrong!',
        });
      },
    });
  }
  getContentForUser(){
    this.contentServcie.getContentForUser().subscribe({
      next: (response: any) => {
        this.contentData = response.content;
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.content,
          text: 'Something went wrong!',
        });
      },
    });
  }
}
