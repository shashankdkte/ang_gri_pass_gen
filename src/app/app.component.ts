import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lengthValue = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onInputValue(event: any) {
    const parsedValue = parseInt(event.target.value);
    console.log(parsedValue);
    this.lengthValue = parsedValue;
  }
  onButtonClick() {
    let validChars = '';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '1234567890';
    let symbols = '!@#$%^&*()';
    let generatedPassword = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    for (let i = 0; i < this.lengthValue; i++) {
      let indexValue = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[indexValue];
    }
    this.password = generatedPassword;
  }
  onChangeUseLetter() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumber() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbol() {
    this.includeSymbols = !this.includeSymbols;
  }
}
