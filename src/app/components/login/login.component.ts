import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public title = 'Login';
  public nombreUser = 'JuanCarlos';
  public claveUser = '13249';
  public txtPrimero = 'Usuario';
  public txtSegundo = 'Contraseña';

  public userIngresado!: string;
  public claveIngresado!: string;

  public usuario!: Usuario;

  constructor(private router: Router) {}

  loguear() {
    this.usuario = new Usuario(this.userIngresado, this.claveIngresado);

    if (
      this.userIngresado === this.nombreUser &&
      this.claveIngresado === this.claveUser
    ) {
      this.router.navigate(['/bienvenido'], {
        state: { usuario: this.usuario },
      });
    } else {
      this.router.navigate(['/error']);
    }
  }
}
