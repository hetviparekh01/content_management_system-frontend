import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/core/services/content.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalViewer!:number;
  totalEditor!:number;
  totalAdmin!:number;
  totalUsers!:number;
  contentData: any;
  totalContentForUser!:number;
  role:string=this.ls.getRole() as string
  constructor(private ls:LocalstorageService,private contentService:ContentService,private userServie:UserService){}
  ngOnInit(): void {
    if(this.role==='editor'){
      this.getContentForUser()
    }else if(this.role==='admin'){
      this.getUserType();
      this.getUser();
    }
  }
 
  title!:string;
  
  getUserType(){
    this.userServie.getUserType().subscribe({
      next:(response)=>{
        this.totalViewer=response.content.totalViewer
        this.totalEditor=response.content.totalEditor
        this.totalAdmin=response.content.totalAdmin
      }
    })
  }
  getUser(){
    this.userServie.getUser().subscribe({
      next:(response)=>{
       
        this.totalUsers=response.length
      }
    })
  }
  getContentForUser(){
    this.contentService.getContentForUser().subscribe({
      next: (response: any) => {
        this.totalContentForUser = response.length;
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
