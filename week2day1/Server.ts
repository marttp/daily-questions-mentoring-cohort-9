import type { Info } from "./Info"

export class Server {
    #powers: number[] = []
    #sumPowers: number = 0
    #top3Powers: number[] = Array(3).fill(0)

    receivePower(power: number): Info {
        this.#powers.push(power)
        this.#sumPowers += power
        this.rearrangeTop3(power)
        return this.summarize();
    }

    rearrangeTop3(newPower: number) {
        // If the new power is greater than the current top 3 powers
        // rearrange the top 3 powers
        if (newPower > this.#top3Powers[0]) {
            // 2 -> 3
            this.#top3Powers[2] = this.#top3Powers[1]
            // 1 -> 2
            this.#top3Powers[1] = this.#top3Powers[0]
            // newPower -> 1
            this.#top3Powers[0] = newPower
        } else if (newPower > this.#top3Powers[1]) {
            // 2 -> 3
            this.#top3Powers[2] = this.#top3Powers[1]
            // newPower -> 2
            this.#top3Powers[1] = newPower
        } else if (newPower > this.#top3Powers[2]) {
            // newPower -> 3
            this.#top3Powers[2] = newPower
        }
    }

    summarize(): Info {
        return {
            top3Powers: this.#top3Powers,
            avg: this.#sumPowers / this.#powers.length
        }
    }
    
}