import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVisitcardSocialAddComponent } from './my-visitcard-social-add.component';

describe('MyVisitcardSocialAddComponent', () => {
  let component: MyVisitcardSocialAddComponent;
  let fixture: ComponentFixture<MyVisitcardSocialAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVisitcardSocialAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVisitcardSocialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
