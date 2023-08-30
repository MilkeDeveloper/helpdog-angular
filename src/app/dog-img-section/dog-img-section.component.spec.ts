import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogImgSectionComponent } from './dog-img-section.component';

describe('DogImgSectionComponent', () => {
  let component: DogImgSectionComponent;
  let fixture: ComponentFixture<DogImgSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogImgSectionComponent]
    });
    fixture = TestBed.createComponent(DogImgSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
