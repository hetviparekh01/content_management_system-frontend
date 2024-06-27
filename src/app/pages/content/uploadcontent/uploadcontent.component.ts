import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-uploadcontent',
  templateUrl: './uploadcontent.component.html',
  styleUrls: ['./uploadcontent.component.scss'],
})
export class UploadcontentComponent implements OnInit {
  contentform!: FormGroup;
  selectedFile!: File;
  isUpdate: boolean = false;
  isSubmit: boolean = true;
  contentId: string = this.activatedRoute.snapshot.paramMap.get('id') as string;
  constructor(
    private fb: FormBuilder,
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private route:Router
  ) {}
  ngOnInit() {
    this.contentform = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      type: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      content: ['', Validators.compose([Validators.required])],
    });
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.isUpdate = true;
      this.isSubmit = false;
      this.getContentById();
    }
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
      next: (response: any) => {
        Swal.fire({
          icon: 'success',
          title: response.content,
          showConfirmButton: false,
          timer: 1500,
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.content,
        });
      },
    });
  }
  getContentById() {
    this.contentService.getContentById(this.contentId).subscribe({
      next: (response: any) => {
        this.contentform.patchValue({
          title: response.content.title,
          description: response.content.description,
          type: response.content.type,
        });
      },
    });
  }
  updateContent() {
    const form = new FormData();
    form.append('title', this.contentform.get('title')?.value);
    form.append('description', this.contentform.get('description')?.value);
    form.append('type', this.contentform.get('type')?.value);
    form.append('content', this.selectedFile);
    this.contentService.updateContent(this.contentId, form).subscribe({
      next: (response) => {
        Swal.fire({
          icon: 'success',
          title: response.content,
          showConfirmButton: false,
          timer: 1500,
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.content,
        });
      },
    });
  }
  onSubmit() {
    if (this.contentform.valid) {
      if (this.isSubmit) {
        this.addContent();
      } else {
        this.updateContent();
      }
    
      this.contentform.reset();
      this.route.navigate(['/content/viewcontent']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error in Submiting Form",
      });
    }
  }
}
