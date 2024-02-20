import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
})
export class ContactformComponent {
  constructor(private http: HttpClient) { }

  emailForm = new FormControl('', [Validators.required, this.emailValidator]);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  }
  post = {
    endPoint: 'https://meran-osman.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  showSuccessText = false;


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.showSuccessText = true;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }


  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  }


  emailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !pattern.test(email)) {
      return { invalidEmail: true };
    }
    return null;
  }
}