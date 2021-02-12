import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cars Project';
  hideSpinner: boolean = true
  hideContent: boolean = false
  
  ngOnInit() {
    setTimeout(() => {
      this.hideSpinner = false;
      this.hideContent = true;
    }, 5000)
  }
}

