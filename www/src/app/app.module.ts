import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyVisitcardViewComponent } from './my-visitcard/my-visitcard-view/my-visitcard-view.component';
import { MyVisitcardSocialListComponent } from './my-visitcard/my-visitcard-social-list/my-visitcard-social-list.component';
import { MyVisitcardSocialAddComponent } from './my-visitcard/my-visitcard-social-add/my-visitcard-social-add.component';
import { MyVisitcardEditComponent } from './my-visitcard/my-visitcard-edit/my-visitcard-edit.component';
import { MyVisitcardComponent } from './my-visitcard/my-visitcard.component';
import { MyVisitcardDetailsComponent } from './my-visitcard/my-visitcard-details/my-visitcard-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyVisitcardViewComponent,
    MyVisitcardSocialListComponent,
    MyVisitcardSocialAddComponent,
    MyVisitcardEditComponent,
    MyVisitcardComponent,
    MyVisitcardDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
