import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playNote(note: string) {
    const synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease(note, "8n");
  }
}
