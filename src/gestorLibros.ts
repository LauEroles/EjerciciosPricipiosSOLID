/*
class GestorLibros {

    private libros: { titulo: string; autor: string; isbn: string; contenido:string }[] = [];



    agregarLibro(titulo: string, autor: string, isbn: string, contenido: string): void {
    
        this.libros.push({ titulo, autor, isbn, contenido });
        console.log(`Libro "${titulo}" agregado.`);
    }

    guardarEnDisco(isbn: string): void {
    
    const libro = this.libros.find(l => l.isbn === isbn);
        if (libro) {
            console.log(`Guardando el contenido del libro "${libro.titulo}" con
        
            ISBN ${isbn} en el disco...`);
        
            // …escritura de archivos o base de datos
         console.log("¡Guardado completado!");
            } else {

            console.error(`Error: Libro con ISBN ${isbn} no encontrado.`);
            }
    
    }


    imprimirContenido(isbn: string): void {
   
        const libro = this.libros.find(l => l.isbn === isbn);
        
        if (libro) {
        
        console.log(`\n--- Contenido del Libro: ${libro.titulo} ---\n`); 
        console.log(libro.contenido.substring(0, 50) + '...');
        console.log('\n----------------------------------------\n');
        
        } else {
        
            console.error(`Error: Libro con ISBN ${isbn} no encontrado.`);
        
            }
        }
}


// Responsabilidad unica porque la clase GestorLibros esta realizando diversas operaciones como imprimir, guardar y agregar libros
// Open - Close porque el codigo cliente si el dia de mañana queremos realizar alguna  otra operacion
//con los metodos imprimirContenido y GuardarEnDisco no haria falta modificar el codigo cliente
//Simplemente implementariamos interfaces en otras clases


*/


class GestorLibros implements Persistencia, ImprimirContenido {

    private libros: { titulo: string; autor: string; isbn: string; contenido:string }[] = [];
    private persistencia: Persistencia;

    constructor(persistencia: Persistencia) {
        this.persistencia = persistencia;
    }

    agregarLibro(titulo: string, autor: string, isbn: string, contenido: string): void {
    
        this.libros.push({ titulo, autor, isbn, contenido });
        console.log(`Libro "${titulo}" agregado.`);
    }

    guardar(isbn: string): void {
    
    const libro = this.libros.find(l => l.isbn === isbn);
        if (libro) {
            console.log(`Guardando el contenido del libro "${libro.titulo}" con ISBN ${isbn} en el disco...`);
        
            // …escritura de archivos o base de datos
         console.log("¡Guardado completado!");
            } else {

            console.error(`Error: Libro con ISBN ${isbn} no encontrado.`);
            }
    
    }


    imprimirContenido(isbn: string): void {
   
        const libro = this.libros.find(l => l.isbn === isbn);
        
        if (libro) {
        
        console.log(`\n--- Contenido del Libro: ${libro.titulo} ---\n`); 
        console.log(libro.contenido.substring(0, 50) + '...');
        console.log('\n----------------------------------------\n');
        
        } else {
        
            console.error(`Error: Libro con ISBN ${isbn} no encontrado.`);
        
            }
        }


}


/* function main():void{

    const persistenciaDisco:Persistencia = new PersistenciaDisco();
    const persistenciaBaseDatos:Persistencia = new PersistenciaBaseDatos();

    const gestorLibros = new GestorLibros(persistenciaDisco);
    gestorLibros.agregarLibro("El Principito", "Antoine de Saint-Exupéry", "978-2-07-036113-2", "Un cuento de un niño que viaja por el espacio y conoce a diferentes personas.");
    gestorLibros.guardar("978-2-07-036113-2");
    gestorLibros.imprimirContenido("978-2-07-036113-2");

    const gestorLibrosBaseDatos = new GestorLibros(persistenciaBaseDatos);
    gestorLibrosBaseDatos.agregarLibro("El Principito", "Antoine de Saint-Exupéry", "978-2-07-036113-2", "Un cuento de un niño que viaja por el espacio y conoce a diferentes personas.");
    gestorLibrosBaseDatos.guardar("978-2-07-036113-2");
    gestorLibrosBaseDatos.imprimirContenido("978-2-07-036113-2");


}

main(); */



class PersistenciaBaseDatos implements Persistencia {
    guardar(isbn: string): void {
        console.log(`Guardando el libro "${isbn}" en la base de datos...`);
    }
}

class PersistenciaDisco implements Persistencia {
    guardar(isbn: string): void {
        console.log(`Guardando el libro "${isbn}" en el disco...`);
    }
}

interface Persistencia {
    guardar(isbn: string): void;

}

interface ImprimirContenido {
    imprimirContenido(isbn: string): void;
}