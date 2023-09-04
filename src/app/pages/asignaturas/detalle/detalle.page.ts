import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from '../asignatura.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  
  asignatura!: Asignatura ;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private asignaturaService: AsignaturasService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.asignatura = this.asignaturaService.getAsignatura(aux);
        console.log(this.asignatura)
      }
    })    
  }

  qr() {
    this.router.navigate(['qr']);
  }
}
