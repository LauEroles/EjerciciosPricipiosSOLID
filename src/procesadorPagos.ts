/* class ProcesadorPagos {
    procesar(monto: number, metodo: 'tarjeta' | 'paypal' | 'transferencia', cuenta:string): boolean {
       
        console.log(`Iniciando pago de $${monto} con método: ${metodo}`);
        
        if (metodo === 'tarjeta') {
            if (cuenta.length !== 16) {
            
                console.error("Error: Número de tarjeta inválido.");
                return false;
                
            }
 
        console.log(`Cobrando $${monto} a tarjeta ${cuenta.substring(0,4)}...`); 

        }  else if (metodo === 'paypal') {
            if (!cuenta.includes('@')) {
        
            console.error("Error: Email de PayPal inválido.");
            return false;
            }
        
        console.log(`Generando factura PayPal para email: ${cuenta}`);
         // Lógica real de API de PayPal...

        } else if (metodo === 'transferencia') {
        // Lógica compleja de validación de cuenta bancaria...
        console.log(`Solicitando transferencia a cuenta bancaria: ${cuenta}`);
        
        } else {
            console.error("Método de pago no soportado.");
            return false;
        }

        this.registrarTransaccion(monto, metodo);
        return true;
}

    private registrarTransaccion(monto: number, metodo: string): void {
    console.log(`[LOG] Transacción exitosa: $${monto}, Método: ${metodo},
    Fecha: ${new Date().toISOString()}`);
    }

}
// Uso

const procesador = new ProcesadorPagos();
procesador.procesar(150.75, 'tarjeta', '1234567890123456');
procesador.procesar(50.00, 'paypal', 'usuario@mail.com'); */

//Open-close
//Responsabilidad unica


class ProcesadorPagos {

    private medioPago: MedioPago;

    constructor(medioPago: MedioPago) {
        this.medioPago = medioPago;
    }

    procesar(monto: number, metodo: MedioPago, cuenta:string): boolean {
       
        console.log(`Iniciando pago de $${monto} con método: ${metodo}`);
        
        return this.medioPago.cobrar(monto, cuenta);
    }


    public getMedioPago():MedioPago{
        return this.medioPago;
    }


    private registrarTransaccion(monto: number, metodo: string): void {
    console.log(`[LOG] Transacción exitosa: $${monto}, Método: ${metodo},
    Fecha: ${new Date().toISOString()}`);
    }

}


interface MedioPago{
    cobrar(monto: number, cuenta:string): boolean;
}

class Tarjeta implements MedioPago{
    cobrar(monto: number, cuenta:string): boolean {
        return true;
    }
}

class Paypal implements MedioPago{
    cobrar(monto: number, cuenta:string): boolean {
        return true;
    }
}   

class Transferencia implements MedioPago{
    cobrar(monto: number, cuenta:string): boolean {
        return true;
    }
}

// Uso



const tarjeta:MedioPago=new Tarjeta();
const paypal:MedioPago=new Paypal();
const procesador:ProcesadorPagos = new ProcesadorPagos(tarjeta);
const procesador2:ProcesadorPagos = new ProcesadorPagos(paypal);


procesador.getMedioPago().cobrar(150.75, '1234567890123456');
procesador.getMedioPago().cobrar(50.00, 'usuario@mail.com');


    
