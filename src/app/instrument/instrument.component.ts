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

  playSound() {
    const synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("C4", "8n");
  }

}
