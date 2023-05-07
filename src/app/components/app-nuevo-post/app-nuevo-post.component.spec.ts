import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNuevoPostComponent } from './app-nuevo-post.component';

describe('AppNuevoPostComponent', () => {
  let component: AppNuevoPostComponent;
  let fixture: ComponentFixture<AppNuevoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNuevoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNuevoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
