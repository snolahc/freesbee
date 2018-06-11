import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVisitcardComponent } from './my-visitcard.component';

describe('MyVisitcardComponent', () => {
  let component: MyVisitcardComponent;
  let fixture: ComponentFixture<MyVisitcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVisitcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVisitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
