import { Component } from '@angular/core';
import { CONTENT, DEVICES_OPTIONS } from '../../constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  content = CONTENT;
  deviceOptions = DEVICES_OPTIONS;
  contactForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      name: [
        null,
        [Validators.required, Validators.pattern('[A-Za-zА-Яа-яЁё]*')],
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      TIN: [
        null,
        [
          Validators.required,
          Validators.pattern(/([0-9]){12}$/),
          Validators.maxLength(12),
        ],
      ],
      phone: [
        null,
        [
          Validators.required,
          Validators.pattern(/([0-9]){10}$/),
          Validators.maxLength(10),
        ],
      ],
      devices: [null, [Validators.required]],
      confirm: [null, [Validators.requiredTrue]],
    });
  }

  sendData() {
    const formData = this.contactForm.getRawValue();
    console.log(formData);
  }
}
