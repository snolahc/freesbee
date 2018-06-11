import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVisitcardSocialListComponent } from './my-visitcard-social-list.component';

describe('MyVisitcardSocialListComponent', () => {
  let component: MyVisitcardSocialListComponent;
  let fixture: ComponentFixture<MyVisitcardSocialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVisitcardSocialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVisitcardSocialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
