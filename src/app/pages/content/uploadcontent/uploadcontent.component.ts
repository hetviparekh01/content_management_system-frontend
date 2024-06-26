import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContentService } from 'src/app/core/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-uploadcontent',
  templateUrl: './uploadcontent.component.html',
  styleUrls: ['./uploadcontent.component.scss'],
})
export class UploadcontentComponent implements OnInit {

  contentform: any;
  selectedFile!: File;
  constructor(private fb: FormBuilder,private contentService:ContentService) {}
  ngOnInit() {
    this.contentform = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      type: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      content: ['', Validators.compose([Validators.required])],
    });
  }
  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0];
  }
  addContent() {
    const form = new FormData();
    form.append('title', this.contentform.get('title')?.value);
    form.append('type', this.contentform.get('type')?.value);
    form.append('description', this.contentform.get('description')?.value);
    form.append('content', this.selectedFile);
    this.contentService.postContent(form).subscribe({
      next:(response:any)=>{
        Swal.fire({
          icon: "success",
          title: response.content,
          showConfirmButton: false,
          timer: 1500
        });
      },
      error:(error)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.content,
        });
      }
    })
  }
  onSubmit() {
    if(this.contentform.valid){
      this.addContent();
      this.contentform.reset()
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: this.contentform.errors,
      });
    }
  }

}
