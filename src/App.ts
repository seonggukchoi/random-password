import Password from './Password';

export default class App implements App.App {
  public getPassword(length: number): string {
    const password = new Password().createPassword();

    return password.getPassword(length);
  }
}
