declare namespace StringArray {
  interface StringArrayFactory {
    createStringArray(): StringArray;
  }

  interface StringArray {
    getFullString(): string;
    getFullStringArray(): string[];
    pushString(str: string): this;
  }
}
