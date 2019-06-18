export default class StringArrayFactory implements StringArray.StringArrayFactory {
  public createStringArray(): StringArray {
    return new StringArray();
  }
}

class StringArray implements StringArray.StringArray {
  private stringArray: string[] = [];

  public getFullString(): string {
    return this.stringArray.join('');
  }

  public getFullStringArray(): string[] {
    return this.getFullString().split('');
  }

  public pushString(str: string): this {
    this.stringArray.push(str);
    return this;
  }
}
