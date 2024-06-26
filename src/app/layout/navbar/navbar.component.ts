import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

constructor(private ls:LocalstorageService){}
  title:string=this.ls.getName() as string
  
}
