declare namespace Randomizer {
  interface RandomizerFactory {
    createRandomizer(): Randomizer;
  }

  interface Randomizer {
    getRandomRangeNumber(min: number, max: number): number;
  }
}
