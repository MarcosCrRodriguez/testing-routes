import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'error',
  standalone: true,
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  public title = 'Error';
  constructor(private router: Router) {}

  volverAlLogin() {
    this.router.navigate(['/']);
  }
}
