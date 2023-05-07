// clase persona
export class Persona {
  nombre: string;
      apellido: string;
  documento: number;
  address: string;

  constructor(nombre: string, apellido: string, documento: number, domcilio: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.documento = documento;
    this.address = domcilio;

  }


 
}