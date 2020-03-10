import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { InputMaskDirective } from "./input-mask.directive";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, InputMaskDirective],
  exports: [InputMaskDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
