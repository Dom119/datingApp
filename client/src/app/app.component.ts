import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hellu, Khoai Mo';
  // users: any; turning off type safety in typescript
  users: any;

  constructor(private http: HttpClient) {

  }

  getUsers() {
    this.http.get("https://localhost:5001/api/users").subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error)
    })
  }

  //below method will be call when this class is initialized, that's its life cycle
  ngOnInit() {
    this.getUsers();
  }

}
