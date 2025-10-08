/* class Empleado {
    
    constructor(public nombre: string, public salarioBase: number) {

    }
   
        calcularSalarioMensual(): number {
        // Lógica de cálculo común para Empleados de tiempo completo
        return this.salarioBase;
        }
        // Método de gestión de proyectos que solo aplica a Managers
        gestionarProyecto(nombreProyecto: string): void {
        console.log(`${this.nombre} está gestionando el proyecto:
        ${nombreProyecto}.`);
        }
        // Método de registro de horas que solo aplica a Consultores por hora
        registrarHoras(horas: number): void {
        // Un empleado de tiempo completo no registra horas de esta manera
        console.log(`${this.nombre} registró ${horas} horas.`);
        }
    }

class EmpleadoTiempoParcial extends Empleado {

    constructor(nombre: string, salarioPorHora: number, public horasTrabajadas:number) {
    super(nombre, salarioPorHora);
    }

    calcularSalarioMensual(): number {
    
        return this.salarioBase * this.horasTrabajadas;
    }
    // Lanza un error para evitar un comportamiento inesperado.
    gestionarProyecto(nombreProyecto: string): void {
    
        throw new Error(`${this.nombre} no tiene permisos para gestionar proyectos.`);
    }
}


// Uso (Código cliente que espera cualquier Empleado)
function obtenerSalarioAnual(empleado: Empleado): number {

    return empleado.calcularSalarioMensual() * 12;
}
 */

//corrompe principio de Liskov: porque obliga a un clase hija implementar um metodo declarado en clase padre 
//pero en la realidad no deberia  en esa clase no se deberia implementar por eso arroja el error (en EmpleadoTiempoParcial)
//Tambien viola responsabilidad unica porque la clase Empleado esta con demasiadas responsabilidades
//Se resuelve con segregacion de interfaces




interface CalculadoraSalario{
    calcularSalarioMensual(): number;
}

interface GestorProyectos{
    gestionarProyecto(nombreProyecto: string): void;
}

interface RegistroHoras{
    registrarHoras(horas: number): void;
}


abstract class Empleado implements CalculadoraSalario {
    

    constructor(protected nombre: string, protected salarioBase: number, protected legajo: number) {
       this.nombre = nombre;
       this.salarioBase = salarioBase;
       this.legajo = legajo;
       
    }


    abstract calcularSalarioMensual(): number ;

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setSalarioBase(salarioBase: number): void {
        this.salarioBase = salarioBase;
    }

    public setLegajo(legajo: number): void {
        this.legajo = legajo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getSalarioBase(): number {
        return this.salarioBase;
    }

    public getLegajo(): number {
        return this.legajo;
    }

}



class EmpleadoTiempoParcial extends Empleado implements RegistroHoras {
   
   constructor(nombre: string, salarioBase: number, legajo: number, private horasTrabajadas: number) {
    super(nombre, salarioBase, legajo);
   }

    calcularSalarioMensual(): number {
        
        let salarioEmpleadoTemporal=this.salarioBase*this.horasTrabajadas;
        
        return salarioEmpleadoTemporal;
    }

    registrarHoras(horas: number): void {
        console.log(`${this.nombre} registró ${horas} horas.`);
    }
   
}

class Manager extends Empleado implements GestorProyectos {
    
    constructor(nombre: string, salarioBase: number, legajo: number) {
        super(nombre, salarioBase, legajo);
    }

    gestionarProyecto(nombreProyecto: string): void {
        console.log(`${this.nombre} está gestionando el proyecto: ${nombreProyecto}.`);
    }

    calcularSalarioMensual(): number {
        return this.salarioBase;
    }
}


// Uso (Código cliente que espera cualquier Empleado)
function main(): void {
    
    const manager1=new Manager("Meli", 1000, 123456);
    const salarioAnual=obtenerSalarioAnual(manager1);

    const contractor=new EmpleadoTiempoParcial("Valen", 1000, 123456, 10);
    const salarioAnualContractor=obtenerSalarioAnual(contractor);

    const manager=new Manager("Vero", 1000, 123456);
    const salarioAnualManager=obtenerSalarioAnual(manager);

    console.log(`Salario anual del manager: $${salarioAnual}`);
    console.log(`Salario anual del contractor: $${salarioAnualContractor}`);

}

function obtenerSalarioAnual(empleado: Empleado): number {
    return empleado.calcularSalarioMensual() * 12;
}

main();