
import { Component, Input } from '@angular/core';

@Component({
  selector: 'back-indicator',
  templateUrl: './back-indicator.component.html',
  styleUrls: ['./back-indicator.component.css'],
  standalone: false
  })

export class BackIndicatorComponent{
  @Input()
  public message: string = 'Back';
}
