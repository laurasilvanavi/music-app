import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit {
  notes: string[];
  synth: any;

  constructor() {}

  ngOnInit() {
    this.synth = new Tone.Synth().toMaster();
    this.notes = ['C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'];
  }

  playNote(note: string) {
    this.synth.triggerAttackRelease(note, '8n');
  }
}
