import { Component, OnInit } from '@angular/core';
import * as mm from '@magenta/music';
import { JUMP_SONG } from '../notes.const';

@Component({
  selector: 'app-ai-instrument',
  templateUrl: './ai-instrument.component.html',
  styleUrls: ['./ai-instrument.component.scss']
})
export class AiInstrumentComponent implements OnInit {

  player;

  ngOnInit() {
    this.player = new mm.Player();
  }

  play() {
    if (this.player.isPlaying()) {
      this.player.stop();
    } else {
      this.player.start(JUMP_SONG);
    }
  }

}
