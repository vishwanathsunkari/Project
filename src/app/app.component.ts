import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AppService } from "./app.service";
import { IUser } from "./user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "cognizant";
  user: IUser;
  submitted = false;
  userForm: FormGroup;
  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      serviceNumber: ["", Validators.required],
      plannedRadio: [""],
      unplannedRadio: [""],
      fromDate: [""],
      toDate: [""],
      partialCancel: [""],
      completeCancel: [""]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  getUserInfo(event, id) {
    if (event.keyCode == 13 || event.keyCode == 9) {
      this.getUser(id);
    }
  }

  getUser(id) {
    if (this.userForm.invalid) {
      return;
    }
    this.appService.getUser(id).subscribe(data => {
      this.submitted = true;
      this.user = data;
    });
  }
}
