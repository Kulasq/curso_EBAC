class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Veículo: ${this.marca} - ${this.modelo}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    mostrarInfo() {
        console.log(`Carro: ${this.marca} - ${this.modelo}, Portas: ${this.portas}`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    mostrarInfo() {
        console.log(`Moto: ${this.marca} - ${this.modelo}, Cilindrada: ${this.cilindrada}cc`);
    }
}

const carro1 = new Carro('Toyota', 'Corolla', 4);
const carro2 = new Carro('Honda', 'Civic', 4);
const moto1 = new Moto('Yamaha', 'MT-07', 689);

carro1.mostrarInfo();
carro2.mostrarInfo();
moto1.mostrarInfo();
