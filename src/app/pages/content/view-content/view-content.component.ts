import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { RowDragFeature } from 'ag-grid-community/dist/types/core/gridBodyComp/rowDragFeature';
import { ContentService } from 'src/app/core/services/content.service';
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
    this.getContent();
  }
  constructor(private contentServcie: ContentService,private router:Router) {}
  columnDefs: ColDef[] = [
    { headerName: 'Title', field: 'title', flex: 2 },
    { headerName: 'Content', field: 'content', flex: 2 },
    { headerName: 'Type', field: 'type', flex: 2 },
    { headerName: 'Description', field: 'description', flex: 2 },
    {
      headerName: '',
      field: '',
      flex: 2,
      cellRenderer: CustomRenderComponent,
      cellRendererParams: {
        viewBtn: (id: string) => this.viewContent(id),
      },
    },
  ];
  viewContent(id: string) {
    this.router.navigate ([`/content/particularcontent/${id}`])
  }
  getContent() {
    this.contentServcie.getContent().subscribe({
      next: (response: any) => {
        console.log(response);
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
