import { Component, OnInit } from '@angular/core';
import {
  melodyChords,
  bassChords,
  dogianoNotes,
  marioSamples
} from './notes.const';
import * as Tone from 'tone';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit {
  notes: string[];
  isTransportStarted: boolean;
  mediumVolume: any;
  sampler: any;
  polySynthSquare: any;
  polySynthSaw: any;
  melodyPart: any;
  bassPart: any;
  noise: any;

  constructor() {}

  ngOnInit() {
    this.notes = dogianoNotes;
    this.mediumVolume = new Tone.Volume(-15);
    this.initializeDogianoInstrument();
  }

  private initializeDogianoInstrument() {
    this.sampler = new Tone.Sampler({
      E4: '../../assets/dog-sample.wav'
    }).chain(this.mediumVolume, Tone.Master);

    this.polySynthSquare = new Tone.PolySynth(6, Tone.Synth, {
      oscillator: {
        type: 'square'
      }
    }).chain(new Tone.Volume(-25), Tone.Master);
  }

  playNote(note: string) {
    this.sampler.triggerAttack(note);
    this.polySynthSquare.triggerAttackRelease(note, '4n');
  }

  toggleMelody() {
    if (this.melodyPart) {
      this.melodyPart.mute = !this.melodyPart.mute;
    } else {
      this.polySynthSaw = new Tone.PolySynth(3, Tone.Synth, {
        oscillator: {
          type: 'fatsawtooth'
        },
        envelope: {
          attack: 0.01,
          release: 0.4
        }
      }).chain(this.mediumVolume, Tone.Master);

      this.melodyPart = new Tone.Part((time, chord) => {
        this.sampler.triggerAttackRelease(chord.note, chord.duration, time);
        this.polySynthSaw.triggerAttackRelease(
          chord.note,
          chord.duration,
          time
        );
      }, melodyChords);

      this.playPart(this.melodyPart);
    }
  }

  private playPart(part) {
    if (!this.isTransportStarted) {
      Tone.Transport.toggle();
      this.isTransportStarted = true;
      Tone.Transport.bpm.value = 132;
    }

    part.start(0);
    part.loop = true;
    part.loopEnd = '4m';
  }

  toggleBass() {
    if (this.bassPart) {
      this.bassPart.mute = !this.bassPart.mute;
    } else {
      this.bassPart = new Tone.Part((time, chord) => {
        this.polySynthSquare.triggerAttackRelease(
          chord.note,
          chord.duration,
          time
        );
      }, bassChords);

      this.playPart(this.bassPart);
    }
  }

  toggleNoise() {
    if (this.noise) {
      this.noise.mute = !this.noise.mute;
    } else {
      this.noise = new Tone.Noise('pink').start();
      const filter = new Tone.AutoFilter({
        frequency: '8m'
      }).chain(new Tone.Volume(-20), Tone.Master);

      this.noise.connect(filter);
      filter.start();
    }
  }

  playRandomMarioSample() {
    this.playSample(
      marioSamples[Math.floor(Math.random() * marioSamples.length)]
    );
  }

  private playSample(sampleName) {
    new Tone.Player({
      url: `../../assets/${sampleName}.wav`,
      autostart: true
    }).chain(this.mediumVolume, Tone.Master);
  }

  speedUpBpm() {
    Tone.Transport.bpm.value += 20;
  }

  stopInstruments() {
    this.playSample('powerup');

    this.stopInstrument(this.melodyPart);
    this.stopInstrument(this.bassPart);
    this.stopInstrument(this.noise);
  }

  private stopInstrument(instrument) {
    if (instrument) {
      instrument.mute = true;
      instrument.stop();
    }
  }
}
