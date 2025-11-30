import { Component } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  standalone: false,
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {
  goBack() {
    window.history.back();
  }
}
