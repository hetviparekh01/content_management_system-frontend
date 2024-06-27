import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/core/services/content.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalUsers!:number
  constructor(private ls:LocalstorageService,private contentService:ContentService,private userServie:UserService){}
  ngOnInit(): void {
    this.getUsersFilterartion()
  }
  // role:string=this.ls.getRole() as string;
  title!:string;
  viewer:string='viewer'
  getUsersFilterartion(){
    this.userServie.getUser().subscribe({
      next:(response)=>{
        this.totalUsers=response.length
      }
    })
  }
}
