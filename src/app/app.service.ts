import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { IUser } from "./user";

@Injectable({
  providedIn: "root"
})
export class AppService {
  appUrl = "https://api.github.com/users/hadley/orgs";
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(this.appUrl);
  }

  getUser(id) {
    console.log(id);
    return this.getAllUsers().pipe(
      map(data => {
        for (let user of data) {
          if (user.id == id) {
            return user;
          }
        }
      })
    );
  }
}
