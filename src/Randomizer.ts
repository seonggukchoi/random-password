export default class RandomizerFactory implements Randomizer.RandomizerFactory {
  public createRandomizer(): Randomizer {
    return new Randomizer();
  }
}

class Randomizer implements Randomizer.Randomizer {
  public getRandomRangeNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
