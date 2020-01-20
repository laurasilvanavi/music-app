interface Chord {
  time: string | number;
  note: string;
  duration: string | number;
}

export const melodyChords: Chord[] = [
  {
    time: '192i',
    note: 'G4',
    duration: '104i'
  },
  {
    time: '192i',
    note: 'B4',
    duration: '104i'
  },
  {
    time: '192i',
    note: 'D5',
    duration: '104i'
  },
  {
    time: '480i',
    note: 'G4',
    duration: '104i'
  },
  {
    time: '480i',
    note: 'C5',
    duration: '104i'
  },
  {
    time: '480i',
    note: 'E5',
    duration: '104i'
  },
  {
    time: '768i',
    note: 'F4',
    duration: '104i'
  },
  {
    time: '768i',
    note: 'A4',
    duration: '104i'
  },
  {
    time: '768i',
    note: 'C5',
    duration: '104i'
  },
  {
    time: '1056i',
    note: 'F4',
    duration: '104i'
  },
  {
    time: '1056i',
    note: 'A4',
    duration: '104i'
  },
  {
    time: '1056i',
    note: 'C5',
    duration: '104i'
  },
  {
    time: '1248i',
    note: 'G4',
    duration: '104i'
  },
  {
    time: '1248i',
    note: 'B4',
    duration: '104i'
  },
  {
    time: '1248i',
    note: 'D5',
    duration: '104i'
  },
  {
    time: '1440i',
    note: 'G4',
    duration: '248i'
  },
  {
    time: '1440i',
    note: 'B4',
    duration: '248i'
  },
  {
    time: '1440i',
    note: 'D5',
    duration: '248i'
  },
  {
    time: '1728i',
    note: 'G4',
    duration: '104i'
  },
  {
    time: '1728i',
    note: 'C5',
    duration: '104i'
  },
  {
    time: '1728i',
    note: 'E5',
    duration: '104i'
  },
  {
    time: '2016i',
    note: 'F4',
    duration: '104i'
  },
  {
    time: '2016i',
    note: 'A4',
    duration: '104i'
  },
  {
    time: '2016i',
    note: 'C5',
    duration: '104i'
  },
  {
    time: '2208i',
    note: 'C4',
    duration: '296i'
  },
  {
    time: '2208i',
    note: 'F4',
    duration: '200i'
  },
  {
    time: '2208i',
    note: 'A4',
    duration: '208i'
  },
  {
    time: '2400i',
    note: 'E4',
    duration: '104i'
  },
  {
    time: '2400i',
    note: 'G4',
    duration: '104i'
  },
  {
    time: '2592i',
    note: 'C4',
    duration: '488i'
  },
  {
    time: '2592i',
    note: 'D4',
    duration: '488i'
  },
  {
    time: '2592i',
    note: 'G4',
    duration: '488i'
  }
];

export const bassChords: Chord[] = [
  {
    time: 0,
    note: 'C2',
    duration: '768i'
  },
  {
    time: '768i',
    note: 'C2',
    duration: '768i'
  },
  {
    time: '1536i',
    note: 'C2',
    duration: '768i'
  },
  {
    time: '2304i',
    note: 'C2',
    duration: '192i'
  },
  {
    time: '2496i',
    note: 'F1',
    duration: '192i'
  },
  {
    time: '2688i',
    note: 'G1',
    duration: '384i'
  }
];

export const dogianoNotes: string[] = [
  'C3',
  'D3',
  'E3',
  'F3',
  'G3',
  'A3',
  'B3',
  'C4',
  'D4',
  'E4',
  'F4',
  'G4',
  'A4',
  'B4',
  'C5'
];

export const marioSamples: string[] = [
  'bump',
  'coin',
  'fireball',
  'flagpole',
  'jump',
  'powerup'
];
