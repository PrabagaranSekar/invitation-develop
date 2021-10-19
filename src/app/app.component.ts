import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invitation-front';

  ngOnInit() {

  }

  @HostListener('document:keypress', ['$event'])
  preventStealCodenew(event: KeyboardEvent){
    alert("presed");
  }
  private preventStealCode(){
    document.addEventListener('keydown', function (event) {
      if (event.keyCode == 123) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
      } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
      } else if (event.ctrlKey && event.keyCode == 85) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
      }
    }, false);

    if (document.addEventListener) {
      document.addEventListener('contextmenu', function (e) {
        alert("This function has been disabled to prevent you from stealing my code!");
        e.preventDefault();
      }, false);
    }
  }
}