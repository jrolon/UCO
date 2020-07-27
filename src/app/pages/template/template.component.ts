import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TemplateService } from './template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  usuario = {
    tipo: 'CC',
    numero: '12345',
    nombre: 'ryan',
    apellido: 'Rolon',
    correo: 'jforlon@gmail.com',
    telefono: '31131',
    establecimientoId :"87632487326",
    registradorId:"87292887493"
  }
  constructor(private templateService: TemplateService) { }
  ngOnInit(): void {
  }

  save( forma: NgForm ){
    console.log( forma );

    if (forma.invalid){
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
      this.templateService.save(forma.value).subscribe(
        response => console.log(response)
      )
      return;
    }
  }
}
