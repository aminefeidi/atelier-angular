import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-example',
  templateUrl: './template-driven-example.component.html',
  styleUrls: ['./template-driven-example.component.scss']
})
export class TemplateDrivenExampleComponent {
  name: string = '';
  email: string = '';
  cardType: string = '';
  cardNumber: string = '';
  expirationDate: string = '';
  code: string = '';

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
