import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecategoriesComponent } from './createcategories.component';

describe('CreatecategoriesComponent', () => {
  let component: CreatecategoriesComponent;
  let fixture: ComponentFixture<CreatecategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatecategoriesComponent]
    });
    fixture = TestBed.createComponent(CreatecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
