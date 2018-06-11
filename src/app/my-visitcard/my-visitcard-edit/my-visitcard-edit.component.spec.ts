import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVisitcardEditComponent } from './my-visitcard-edit.component';

describe('MyVisitcardEditComponent', () => {
  let component: MyVisitcardEditComponent;
  let fixture: ComponentFixture<MyVisitcardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVisitcardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVisitcardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
