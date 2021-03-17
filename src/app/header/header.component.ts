import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../repository.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  repos: Object;
  name = '';

  constructor(private _http: RepositoryService) { }

  ngOnInit() {
    this._http.getRepos().subscribe(data => {
      this.repos = data;
      console.log(this.repos);
    })
  }

}
