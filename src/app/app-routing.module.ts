import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesHomepageComponent } from './issues-homepage/issues-homepage.component';
import { IssueDetailPageComponent } from './issue-detail-page/issue-detail-page.component';

const routes: Routes = [
  { path: '', component: IssuesHomepageComponent },
  { path: 'detail-page', component: IssueDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
