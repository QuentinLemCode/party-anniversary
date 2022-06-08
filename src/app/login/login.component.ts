import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    name: new FormControl<string>(''),
  });

  get name() {
    return this.form.get('name')!;
  }

  constructor(private user: UserService, private router: Router) {}

  login() {
    if (!this.name.value) return;
    this.user.login(this.name.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
    });
  }
}
