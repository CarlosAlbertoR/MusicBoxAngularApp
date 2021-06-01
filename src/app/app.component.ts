import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MusicBoxAppAngular';

  applySound(number: number): void {
    const audio = new Audio();
    audio.src = "../assets/sounds/note" + number + ".wav";
    audio.load();
    audio.play();
  }
}
