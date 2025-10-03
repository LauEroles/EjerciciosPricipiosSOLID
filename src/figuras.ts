
/* class Figura {
    dibujar() {
    // Método base
    }

}

class Cuadrado extends Figura {
    dibujar() {
    console.log("Dibujando un cuadrado");
    }
}


class Circulo extends Figura {
    dibujar() {
    console.log("Dibujando un círculo");
    }
}


class FiguraCollection {

    cuadrados: Cuadrado[] = [];
    circulos: Circulo[] = [];
    public addCirculo(c: Circulo) {
    this.circulos.push(c);
    }

    public addCuadrado(c: Cuadrado) {
    this.cuadrados.push(c);
    }
    public dibujarFiguras() {
    for (const cuadrado of this.cuadrados) {
        cuadrado.dibujar();
    }
    for (const circulo of this.circulos) {
    circulo.dibujar();
    }
    }
} */

// esta peleada la cosa pero creemos que puede ser:
// --> que viola el principio abierto - cerrado: si modificamos la clase figura 
// no necesitamos modificar la clase figura collection
//


abstract class Figura {
    abstract dibujar(): void;

}

class Cuadrado extends Figura {
    dibujar() {
    console.log("Dibujando un cuadrado");
    }
}


class Circulo extends Figura {
    dibujar() {
    console.log("Dibujando un círculo");
    }
}

//Solucion seria generar una lista de figuras y poder recorrerlas para agregarlas y dibujarlas
// sin importar de que tipo de figura son

class FiguraCollection {
    
    figuras: Figura[] = [];


    public addFigura(f: Figura) {
        this.figuras.push(f);
    }

   
    public dibujarFiguras() {
        for (const figuras of this.figuras) {
            figuras.dibujar();
        }
    }
}