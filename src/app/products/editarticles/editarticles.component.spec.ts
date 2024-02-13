import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarticlesComponent } from './editarticles.component';

describe('EditarticlesComponent', () => {
  let component: EditarticlesComponent;
  let fixture: ComponentFixture<EditarticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarticlesComponent]
    });
    fixture = TestBed.createComponent(EditarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
