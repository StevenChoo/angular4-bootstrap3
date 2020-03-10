import { Component, EventEmitter } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      mask: [""]
    });
  }
}
