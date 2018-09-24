export class Usuario {
    name: string;
    address: address;
    constructor(name: string) {
        this.name = name;
        this.address={ street:'Av. Cabildo', number: 2050} 
    }

    greet() {
        return name + " says hello!";
    }
}

export interface address {
    street: string;
    number: number;
}