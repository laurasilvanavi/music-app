export const JUMP_SONG = {
  notes: [
    { pitch: 62, startTime: 0.5, endTime: 0.75 },
    { pitch: 64, startTime: 1.25, endTime: 1.5 },
    { pitch: 60, startTime: 2.0, endTime: 2.25 },
    { pitch: 60, startTime: 2.75, endTime: 3.0 },
    { pitch: 62, startTime: 3.25, endTime: 3.5 },
    { pitch: 62, startTime: 3.75, endTime: 4.5 },
    { pitch: 64, startTime: 4.5, endTime: 4.75 },
    { pitch: 60, startTime: 5.25, endTime: 5.5 },
    { pitch: 57, startTime: 5.75, endTime: 6.25 },
    { pitch: 55, startTime: 6.25, endTime: 6.75 },
    { pitch: 55, startTime: 6.75, endTime: 8.0 },
  ],
  totalTime: 8
};

export const TWINKLE_TWINKLE = {
  notes: [
    { pitch: 60, startTime: 0.0, endTime: 0.5 },
    { pitch: 60, startTime: 0.5, endTime: 1.0 },
    { pitch: 67, startTime: 1.0, endTime: 1.5 },
    { pitch: 67, startTime: 1.5, endTime: 2.0 },
    { pitch: 69, startTime: 2.0, endTime: 2.5 },
    { pitch: 69, startTime: 2.5, endTime: 3.0 },
    { pitch: 67, startTime: 3.0, endTime: 4.0 },
    { pitch: 65, startTime: 4.0, endTime: 4.5 },
    { pitch: 65, startTime: 4.5, endTime: 5.0 },
    { pitch: 64, startTime: 5.0, endTime: 5.5 },
    { pitch: 64, startTime: 5.5, endTime: 6.0 },
    { pitch: 62, startTime: 6.0, endTime: 6.5 },
    { pitch: 62, startTime: 6.5, endTime: 7.0 },
    { pitch: 60, startTime: 7.0, endTime: 8.0 },
  ],
  totalTime: 8
};

export const ONE_NOTE_SONG = {
  notes: [
    { pitch: 80, startTime: 0, endTime: 0.1 },
    { pitch: 80, startTime: 0.2, endTime: 0.3 },
    { pitch: 80, startTime: 0.4, endTime: 0.5 },
    { pitch: 80, startTime: 0.6, endTime: 0.7 },
    { pitch: 80, startTime: 0.8, endTime: 0.9 },
    { pitch: 80, startTime: 1, endTime: 1.1 },
    { pitch: 80, startTime: 1.2, endTime: 1.3 }],
  totalTime: 1.3
};

export const QUANTIZED_DRUMS = {
  notes: [
    { pitch: 36, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 38, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 42, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 46, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 42, quantizedStartStep: 2, quantizedEndStep: 3, isDrum: true },
    { pitch: 42, quantizedStartStep: 3, quantizedEndStep: 4, isDrum: true },
    { pitch: 42, quantizedStartStep: 4, quantizedEndStep: 5, isDrum: true },
    { pitch: 50, quantizedStartStep: 4, quantizedEndStep: 5, isDrum: true },
    { pitch: 36, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 38, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 42, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 45, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 36, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
    { pitch: 42, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
    { pitch: 46, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
    { pitch: 42, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
    { pitch: 48, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
    { pitch: 50, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
  ],
  quantizationInfo: { stepsPerQuarter: 4 },
  tempos: [{ time: 0, qpm: 120 }],
  totalQuantizedSteps: 11
};
