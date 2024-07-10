import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { LocalstorageService } from './core/services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'content_management_system-frontend';
  constructor(
    private permissionsService: NgxPermissionsService,
    private http: HttpClient,
    private ls:LocalstorageService
  ) {}

  role:string=this.ls.getRole() as string
  ngOnInit(): void {
    // const perm = ['admin', 'editor','viewer'];
    // console.log(this.role,"Role");
    // if (Array.isArray(this.role)) {
    //   this.permissionsService.loadPermissions(this.role);
    // } else if (this.role) {
    //   this.permissionsService.loadPermissions([this.role]);
    // } else {
    //   console.error('Role not found or invalid:', this.role);
    // }
    // this.permissionsService.loadPermissions(this.role as any);

    this.http.get('assets/permissions.json').subscribe((response:any) => {
      console.log(response);
      this.permissionsService.loadPermissions(response.permissions);
    });
  }
}
