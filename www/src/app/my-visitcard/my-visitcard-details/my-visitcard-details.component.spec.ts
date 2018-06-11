import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVisitcardDetailsComponent } from './my-visitcard-details.component';

describe('MyVisitcardDetailsComponent', () => {
  let component: MyVisitcardDetailsComponent;
  let fixture: ComponentFixture<MyVisitcardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVisitcardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVisitcardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
