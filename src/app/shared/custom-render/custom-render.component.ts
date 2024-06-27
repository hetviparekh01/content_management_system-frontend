import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-custom-render',
  templateUrl: './custom-render.component.html',
  styleUrls: ['./custom-render.component.scss'],
})
export class CustomRenderComponent implements ICellRendererAngularComp {
  params: any;
  constructor(private ls:LocalstorageService){}
  role:string=this.ls.getRole() as string


  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

  viewBtn() {
    this.params.viewBtn(this.params.data._id);
  }
  updateBtn() {
    this.params.updateBtn(this.params.data._id);
  }
  deleteBtn() {
    this.params.deleteBtn(this.params.data._id);
  }
}
