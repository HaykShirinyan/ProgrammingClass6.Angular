import { Component, Input } from '@angular/core';


@Component({
  selector: 'back-indicator',
  templateUrl: './back-indicator.component.html',
  standalone: false,
  styleUrls: ['./back-indicator.component.css']
})
export class BackIndicatorComponent {
  @Input()
  public label: string = 'Back';
}
