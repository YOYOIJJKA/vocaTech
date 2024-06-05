import { Component } from '@angular/core';
import { CONTENT, DEVICES_OPTIONS } from '../../constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { MailService } from '../../Services/mail.service';
import { Client } from '../../Interfaces/client';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  content = CONTENT;
  deviceOptions = DEVICES_OPTIONS;
  contactForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private viewportScroller: ViewportScroller,
    private mailer: MailService
  ) {
    this.contactForm = formBuilder.group({
      name: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      TIN: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      devices: [null, [Validators.required]],
      confirm: [null, [Validators.requiredTrue]],
    });
  }

  sendData() {
    const formData = this.contactForm.getRawValue();
    this.mailer.sendMail(formData as Client).subscribe();
    this.contactForm.reset();
  }

  navigate(element: string) {
    if (this.router.url != '/') {
      this.router.navigateByUrl('/');
      setTimeout(() => {}, 500);
    }
    this.viewportScroller.scrollToAnchor(element);
  }

  navigateByUrl() {
    this.router.navigateByUrl('privacy-policy')
  }
}
