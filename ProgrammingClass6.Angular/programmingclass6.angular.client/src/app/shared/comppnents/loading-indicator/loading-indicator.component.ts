import { Component, Input } from "@angular/core";

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  standalone: false,
  styleUrls: [
    './loading-indicator.component.css'
  ]
})
export class LoadingIdicatorComponent {
  @Input()
  public message: string = 'Loading...';
}
