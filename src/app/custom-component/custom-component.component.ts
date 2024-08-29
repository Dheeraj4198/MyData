import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  template: '<h1>{{ title }}</h1>'
})
export class CustomComponentComponent {
  title = "This is Creating a title using Templates with CustomComponent(Interpolation).";
}
