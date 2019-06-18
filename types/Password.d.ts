declare namespace Password {
  interface PasswordFactory {
    createPassword(): Password;
  }

  interface Password {
    setStringArray(stringArray: string[]): this;
    getPassword(length: number): string;
  }
}
