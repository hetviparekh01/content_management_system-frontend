import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcontentComponent } from './uploadcontent.component';

describe('UploadcontentComponent', () => {
  let component: UploadcontentComponent;
  let fixture: ComponentFixture<UploadcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadcontentComponent]
    });
    fixture = TestBed.createComponent(UploadcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
