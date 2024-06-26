import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';

@Component({
  selector: 'app-particular-content',
  templateUrl: './particular-content.component.html',
  styleUrls: ['./particular-content.component.scss']
})
export class ParticularContentComponent implements OnInit {
  contentId=this.activatedRoute.snapshot.paramMap.get('id') as string
  content:any
  type: any;
  constructor(private activatedRoute:ActivatedRoute,private contentService:ContentService,private sanitizer:DomSanitizer){}
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getContentById()
  }
  
  getContentById(){
    this.contentService.getContentById(this.contentId).subscribe({
      next:(response)=>{
        this.content=response.content.content
        this.type=response.content.type
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  localurl:string='http://localhost:3000/'
  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`${this.localurl}${url}`);
  }
}
