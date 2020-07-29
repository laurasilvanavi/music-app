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
  musicRNN;
  musicVAE;
  steps = 60; // duration
  temperature = 1.5; // randomization
  stepsPerQuarter = 4; // tempo

  ngOnInit() {
    this.player = new mm.Player();
    // Hosted Checkpoints: https://github.com/magenta/magenta-js/blob/master/music/checkpoints/README.md
    this.musicRNN = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn');
    this.musicRNN.initialize();

    // this.musicVAE = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/multitrack');
    this.musicVAE = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_4bar_small_q2');
    this.musicVAE.initialize();
  }

  playOriginalMelody() {
    if (this.player.isPlaying()) {
      this.player.stop();
    } else {
      this.player.start(JUMP_SONG);
    }
  }

  continueMelodyWithAI() {
    if (this.player.isPlaying()) {
      this.player.stop();
    } else {
      const quantizedNotes = mm.sequences.quantizeNoteSequence(JUMP_SONG, this.stepsPerQuarter);

      this.musicRNN
        .continueSequence(quantizedNotes, this.steps, this.temperature)
        .then((sample) => this.player.start(sample))
        .catch(err => console.log(err));
    }
  }

  playNewMelodyWithAI() {
    if (this.player.isPlaying()) {
      this.player.stop();
      return;
    }
    this.musicVAE
      .sample(1, this.temperature)
      .then((sample) => this.player.start(sample[0]));
  }
}