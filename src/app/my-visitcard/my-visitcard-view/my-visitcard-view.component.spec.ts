import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVisitcardViewComponent } from './my-visitcard-view.component';

describe('MyVisitcardViewComponent', () => {
  let component: MyVisitcardViewComponent;
  let fixture: ComponentFixture<MyVisitcardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVisitcardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVisitcardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
