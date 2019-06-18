import App from './App';

const app = new App();

const passwordLength = Number(process.argv[2]);

if (!passwordLength || passwordLength < 1) {
  console.log('$ node dist/index.js [PASSWORD_LENGTH]');
  process.exit();
}

console.log(app.getPassword(passwordLength));
