/* class Product {
    constructor(public name: string, public price: number) {}
}


class Order {

    private items: Product[] = [];
    private customerEmail: string;
    private total: number = 0;
    
    constructor(customerEmail: string) {
    this.customerEmail = customerEmail;
    }
    
    public addItem(p: Product) {
    this.items.push(p);
    }

    public calculateTotal() {
        let sum = 0;
    
            for (const product of this.items) {
            sum += product.price;
            }
        this.total = sum;
   
        console.log(`Total calculado: ${this.total}`);
        }
    
    public sendConfirmationEmail() {
        console.log(`Enviando email de confirmación a ${this.customerEmail}`);
    }

    public saveOrder() {
        console.log("Guardando la orden en la base de datos...");
    }
} */


    //viola principio de responsabilidad unica
    //porque la clase order tiene 4 responsabilidades:
    // - gestionar productos
    // - calcular total
    // - enviar email
    // - guardar orden

    //tambien podria ser que viole el principio abierto Cerrado porque si queremos cambiar la 
    //forma de enviar email hay que modificar la clase order y no hay una interfaz que lo permita


    //viendo la solucion de Ale, tendriamos que refactorizar el codigo y 
    //agregar una clase adicional que calculo el total (metodo calcular que esta en Order)
    //Porque hizo un OrderSolution y otra clase que se llama ProcesadorOrden???

class Product {
    constructor(public name: string, public price: number) {}
}

interface sendConfirmationEmail{
    enviarEmail(e:string):void;
}

interface saveOrder{
    guardarOrden(o:Order):void;
}

class EnvioEmail implements sendConfirmationEmail {
    enviarEmail(e:string):void{
        
    }
}

class GuardarOrden implements saveOrder{
    guardarOrden(o:Order):void{
    console.log("Guardando la orden en la base de datos...");
    }
}


class Order {

    private items: Product[] = [];
    private customerEmail: string;
    private total: number = 0;

    
    constructor(customerEmail: string,private envioEmail: EnvioEmail, private guardarOrden:GuardarOrden) {
    this.customerEmail = customerEmail;
    this.envioEmail=envioEmail;
    this.guardarOrden=guardarOrden;
    }
    
    public addItem(p: Product) {
    this.items.push(p);
    }

    public calculateTotal():number {
        let sum = 0;
    
            for (const product of this.items) {
            sum += product.price;
            }
        this.total = sum;
   
        return this.total;
    }

    public confirmacionOrden(){
        this.envioEmail.enviarEmail(this.customerEmail);
        this.guardarOrden.guardarOrden(this);
    }

}