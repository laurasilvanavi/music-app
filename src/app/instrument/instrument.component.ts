import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit {

  sampler: any;
  notes: string[];
  synth: any;
  volume: any;

  constructor() { }

  ngOnInit() {
    this.volume = new Tone.Volume(-5);
    this.sampler = new Tone.Sampler({
      G2 : '../../assets/cat-sample.mov'
    }).chain(this.volume, Tone.Master);

    this.synth = new Tone.Synth().toMaster();

    this.notes = ['C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'];
  }

  playNote(note: string) {
    this.sampler.triggerAttack(note);
    this.synth.triggerAttackRelease(note, '4n');
  }
}
