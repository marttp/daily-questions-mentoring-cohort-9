const MAX_WEIGHT = 100;

class Cargo {
    products: number[] = [];
    weight = 0;
}

class FulfillmentCenter {

    #cargo: Cargo[];

    constructor() {
        this.#cargo = [];
    }

    load(productWeight: number) {
        if (productWeight > MAX_WEIGHT) {
            console.log("Product is too heavy");
            return;
        }
        // If there is no cargo, create a new one
        if (this.#cargo.length == 0) {
            const newCargo = new Cargo();
            newCargo.products.push(productWeight);
            newCargo.weight += productWeight;
            this.#cargo.push(newCargo);
            return;
        }
        const lastCargo = this.#cargo[this.#cargo.length - 1];
        const nextTotalWeight = lastCargo.weight + productWeight;
        // If the next total weight exceeds the weight limit, create a new cargo
        if (nextTotalWeight > MAX_WEIGHT) {
            const newCargo = new Cargo();
            newCargo.products.push(productWeight);
            newCargo.weight += productWeight;
            this.#cargo.push(newCargo);
            return;
        }
        // Otherwise, add the product to the last cargo
        lastCargo.products.push(productWeight);
        lastCargo.weight += productWeight;
    }

    deliver(amount = 1): Cargo[] {
        if (this.#cargo.length == 0) {
            console.log("There is no cargo to deliver");
            return [];
        }
        // Either deliver the specified amount or the whole cargo
        const minAmount = Math.min(amount, this.#cargo.length);
        const deliveredCargo = this.#cargo.splice(0, minAmount);
        return deliveredCargo;
    }
}