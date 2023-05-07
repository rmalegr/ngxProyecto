import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { v4 as uuidv4 } from 'uuid';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-app-nuevo-post',
  templateUrl: './app-nuevo-post.component.html',
  styleUrls: ['./app-nuevo-post.component.css'],
})
export class AppNuevoPostComponent {
  nombre: string = '';
  description: string = '';

  constructor(private toastr: ToastrService) {}

  //Probando toast
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  //validar campos
  validarCampos() {
    return this.nombre === '' || this.description === '';
  }
  agregarPost() {
    if (this.validarCampos()) {
      this.toastr.error('Debe completar los campos!', 'Error');
      return;
    }
    const post: Post = {
      id: uuidv4(),
      nombre: this.nombre,
      description: this.description,
    };

    console.log(post);

    //setTimeout para que el toast se muestre despues de agregar el post
    setTimeout(() => {
      this.toastr.success('Post agregado con exito!', 'Post Registrado');
    }, 1000);

    //reseteamos el form
    this.nombre = '';
    this.description = '';
  }
}
