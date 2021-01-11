import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api.service';
import { Validators, FormControl } from '@angular/forms';
import User from 'src/app/models/user.model';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  expandPanel = false;
  expandAbout = false;
  showProfile = false;
  loading = false;
  user: any;
  userLogin = '';
  followers =[];
  searchCtrl = new FormControl('', Validators.required);

  constructor(private githubApiService: GithubApiService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  public searchUser(){
    this.expandAbout = true;
    this.showProfile = true;
    this.loading = true;
    this.githubApiService.getUser(this.searchCtrl.value).subscribe((res: User) => {
      this.userLogin = res.login;
      this.user = res;
      this.loading = false;
    });
  }

  public followList(value: string): void {
    this.expandPanel = true;
    this.http.get(`https://api.github.com/users/${this.userLogin}/${value}`).subscribe((res: any) => {
      this.followers = res;
    });
  }
}
