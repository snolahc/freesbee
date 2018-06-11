import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyVisitcardViewComponent } from './my-visitcard/my-visitcard-view/my-visitcard-view.component';
import { MyVisitcardSocialListComponent } from './my-visitcard/my-visitcard-social-list/my-visitcard-social-list.component';
import { MyVisitcardSocialAddComponent } from './my-visitcard/my-visitcard-social-add/my-visitcard-social-add.component';
import { MyVisitcardEditComponent } from './my-visitcard/my-visitcard-edit/my-visitcard-edit.component';
import { MyVisitcardComponent } from './my-visitcard/my-visitcard.component';
import { MyVisitcardDetailsComponent } from './my-visitcard/my-visitcard-details/my-visitcard-details.component';

const routes: Routes = [
  { path: "myVisitcard/view", component: MyVisitcardViewComponent},
  { path: "myVisitcard/socialList", component: MyVisitcardSocialListComponent},
  { path: "myVisitcard/socialAdd", component: MyVisitcardSocialAddComponent},
  { path: "myVisitcard/edit", component: MyVisitcardEditComponent},
  { path: "myVisitcard/", component: MyVisitcardComponent},
  { path: "myVisitcard/details", component: MyVisitcardDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
