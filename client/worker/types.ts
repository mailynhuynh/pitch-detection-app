export type WorkerMethods = {
  createDetector: (
    name: 'mcleod',
    size: number,
    padding: number
  ) => void;
  getPitch: (
    signal: Float32Array,
    sampleRate: number,
    powerThreshold: number,
    clarityThreshold: number
  ) => Float32Array;
};
