import { Injectable } from '@angular/core';
import { Empleado } from '../models/empelado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listEmpleado : Empleado[] = [
    {
      nombreCompleto:'lucas martinez',
      correo:'ariel@hotmail.com',
      telefono:37064064,
      fechaIngreso: new Date('2020-01-31'),
      estadoCivil:'Soltero',
      sexo:'Masculino'
    },
    {
      nombreCompleto:'lucas morando',
      correo:'lucasMorando@hotmail.com',
      telefono:30131310,
      fechaIngreso: new Date('2021-03-03'),
      estadoCivil:'Casado',
      sexo:'Masculino'
    },
    {
      nombreCompleto:'Lorena acunza',
      correo:'lore@hotmail.com',
      telefono: 464064,
      fechaIngreso: new Date('2019-08-05'),
      estadoCivil:'Soltera',
      sexo:'Femenino'
    },
    {
      nombreCompleto:'Gabriela diaz',
      correo:'gabriela@hotmail.com',
      telefono:11332103214,
      fechaIngreso: new Date('2016-05-04'),
      estadoCivil:'Casada',
      sexo:'Femenina'
    },
    {
      nombreCompleto:'Ariel Bernardo',
      correo:'arielbernardo@hotmail.com',
      telefono:3704299434,
      fechaIngreso: new Date('2022-01-03'),
      estadoCivil:'Casado',
      sexo:'Masculino'
    },
    {
      nombreCompleto:'Noelia Gonzalez',
      correo:'nolly@gmail.com',
      telefono:3704660160,
      fechaIngreso: new Date('2021-03-01'),
      estadoCivil:'Casado',
      sexo:'Femenino'
    },
    {
      nombreCompleto:'Gabriel Medina',
      correo:'gabymedina@hotmail.com',
      telefono:37031103,
      fechaIngreso: new Date('2022-01-06'),
      estadoCivil:'Casado',
      sexo:'Masculino'
    },
    {
      nombreCompleto:'hernan martinez',
      correo:'hernan@hotmail.com',
      telefono:1114,
      fechaIngreso: new Date('2020-03-11'),
      estadoCivil:'Casado',
      sexo:'Masculino'
    },
    {
      nombreCompleto:'Juanjo ',
      correo:'juanjo@hotmail.com',
      telefono:65465,
      fechaIngreso: new Date('2018-01-12'),
      estadoCivil:'Soltero',
      sexo:'Masculino'
    },
    {
      nombreCompleto:'Ezequiel lisandro',
      correo:'eze@hotmail.com',
      telefono:37064064,
      fechaIngreso: new Date('2011-01-09'),
      estadoCivil:'Soltero',
      sexo:'Masculino'
    },
    {
      nombreCompleto:'Loida Gimenez',
      correo:'loida@hotmail.com',
      telefono:37064064,
      fechaIngreso: new Date('2020-01-10'),
      estadoCivil:'Casado',
      sexo:'Femenino'
    },
    {
      nombreCompleto:'Juan Gabriel',
      correo:'juanGabriel@hotmail.com',
      telefono:3704654,
      fechaIngreso: new Date('2020-01-12'),
      estadoCivil:'Soltero',
      sexo:'Masculino'
    },
  ]
  constructor() { }

  getEmpleados(){
    return this.listEmpleado.slice();
  }
  eliminarEmpleado(index:number){
    this.listEmpleado.splice(index,1)
  }
  agregarEmpleado(empleado: Empleado){
    this.listEmpleado.unshift(empleado)
  }
  getEmpleado(index:number){
    return this.listEmpleado[index]
  }
  editEmpleado(empleado: Empleado, idEmpleado:number){
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto
    this.listEmpleado[idEmpleado].correo = empleado.correo
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso
    this.listEmpleado[idEmpleado].telefono = empleado.telefono
    this.listEmpleado[idEmpleado].sexo = empleado.sexo
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil
  }
}
