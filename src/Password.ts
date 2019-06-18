import StringArray from './StringArray';
import Randomizer from './Randomizer';

export default class PasswordFactory implements Password.PasswordFactory {
  public createPassword(): Password {
    return new Password();
  }
}

class Password implements Password.Password {
  private stringArray: string[] = [];

  public setStringArray(stringArray: string[]): this {
    this.stringArray = stringArray;

    return this;
  }

  public getPassword(length: number): string {
    const stringArray = new StringArray().createStringArray();
    const randomizer = new Randomizer().createRandomizer();

    const fullStringArray = stringArray
    .pushString('abcdefghijklmnopqrstuvwxyz')
    .pushString('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    .pushString('0123456789')
    .pushString('~!@#$%^&*()_+₩-=|[]{};:,./<>?')
    .getFullStringArray();
    const fullStringArrayLength = fullStringArray.length;

    return new Array<null>(length)
    .fill(null)
    .map<string>(() => fullStringArray[randomizer.getRandomRangeNumber(0, fullStringArrayLength - 1)])
    .join('');
  }
}
