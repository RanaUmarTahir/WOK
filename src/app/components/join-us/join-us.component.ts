import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-join-us',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css',
})
export class JoinUsComponent {
  joinUsForm: any = {};
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.joinUsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      university: ['', [Validators.required]],
      other_university: [''],
      degree: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      experience: [''],
      city: ['', [Validators.required]],
    });
  }
  universities: string[] = [
    'Air University',
    'Arid University',
    'Bahria University',
    'Comsats',
    'Federal UrdU University',
    'Islamic International University Islamabad',
    'Iqra University H8',
    'Iqra University Chak Shahzad',
    'NUML',
    'National Law College',
    'Fatima Jinnah',
    'Quaid e Azam University',
    'Riphah International University',
    'UCP',
    'Punjab College',
    'Other',
  ];
  onSubmit() {
    if (this.joinUsForm.invalid) return;
    const formData = this.joinUsForm.value;
    const finalUniversity =
      formData.university === 'Other'
        ? formData.other_university
        : formData.university;

    const payload = {
      name: formData.name,
      contact: formData.contact,
      university: finalUniversity,
      degree: formData.degree,
      semester: formData.semester,
      city: formData.city,
      email: formData.email,
      experience: formData.experience,
    };
    console.log(payload);
    this.http
      .post(
        'https://wok-production.up.railway.app/api/volunteers/create',
        payload
      )
      .subscribe({
        next: (res) => {
          console.log('jkanasndn');
          alert(`${payload.name}Submitted Succesfully`);
          this.joinUsForm.reset();
        },
        error: (err) => {
          alert('Error: ' + (err.error?.message || 'Something went wrong'));
        },
      });
  }
}
