import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'bienvenido',
  standalone: true,
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css'],
})
export class BienvenidoComponent {
  public title = 'Inicio';
  public usuario!: Usuario;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.usuario = navigation?.extras.state?.['usuario'];
  }

  volverAlLogin() {
    this.router.navigate(['/']);
  }
}
