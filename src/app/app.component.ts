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
  today =Date.now();
  title = "cognizant";
  serviceNo="";
  fromDt;
  toDt;
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
      fromDate: ["", Validators.required],
      toDate: ["", Validators.required],
      partialCancel: [""],
      completeCancel: [""]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  getUserInfo(event, id) {
    if (event.keyCode == 9 || event.keyCode == 13) {
      this.submitted = true;
      this.serviceNo = id;
      this.fromDt = this.userForm.controls.fromDate.value;
      this.toDt = this.userForm.controls.toDate.value;
      // this.getUser(id);
    }
  }

  // getUser(id) {
  //   if (this.userForm.invalid) {
  //     return;
  //   }
  //   this.appService.getUser(id).subscribe(data => {
      
  //     this.user = data;
  //   });
  // }
}
