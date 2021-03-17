import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../repository.service';

@Component({
  selector: 'app-issues-homepage',
  templateUrl: './issues-homepage.component.html',
  styleUrls: ['./issues-homepage.component.scss']
})
export class IssuesHomepageComponent implements OnInit {
  // repos: Object;

  constructor(private _http: RepositoryService) { }

  ngOnInit() {
    // this._http.getRepos().subscribe(data => {
    //   this.repos = data;
    //   console.log(this.repos);
    // })
  }

}
