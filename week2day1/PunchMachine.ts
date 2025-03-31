import { Server } from './Server';

export class PunchMachine {

    #host: Server

    constructor(host: Server) {
        this.#host = host
    }

    punch() {
        const power = Math.random() * 100;
        return this.#host.receivePower(power);
    }
}