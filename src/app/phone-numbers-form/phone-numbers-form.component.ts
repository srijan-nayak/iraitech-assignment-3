import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-phone-numbers-form',
  templateUrl: './phone-numbers-form.component.html',
  styleUrls: ['./phone-numbers-form.component.css'],
})
export class PhoneNumbersFormComponent {
  phoneNumberInputs = new FormArray([new FormControl('')]);

  addInput() {
    this.phoneNumberInputs.push(new FormControl(''));
  }

  removeInput(index: number) {
    this.phoneNumberInputs.removeAt(index);
  }

  logPhoneNumbers() {
    console.log('[');
    this.phoneNumberInputs.controls.forEach((control, index) => {
      console.log(`  {phoneNumber${index + 1}: ${control.value}},`);
    });
    console.log(']');
  }
}
