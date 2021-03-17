import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private reposUrl = "https://api.github.com/repos/angular/angular";

  constructor(private http: HttpClient) { }

  getRepos() {
    return this.http.get(this.reposUrl);
  }
}
