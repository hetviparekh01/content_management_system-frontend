import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularContentComponent } from './particular-content.component';

describe('ParticularContentComponent', () => {
  let component: ParticularContentComponent;
  let fixture: ComponentFixture<ParticularContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticularContentComponent]
    });
    fixture = TestBed.createComponent(ParticularContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
