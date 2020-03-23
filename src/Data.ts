class Data {
    database: Array<number> = [];
    sorted: Array<number> | undefined;

    constructor(newState: Array<number>) {
        this.set(newState)
    }

    /**
     * Get all data
     * 
     * @return Array
     */
    get() {
        return this.database
    }

    /**
     * Set or override for new data
     * 
     * @return void
     */
    set(newState: any[]) {
        this.database = newState
    }

    push(newState: any[]) {
        this.database.push(...newState);
    }

    popBetween(minState: Function, maxState: number) {
        this.database = this.database.filter((x: any) => {
            return x >= minState && x <= maxState
        });
    }

    sort() {
        this.sorted = this.sorted || this.database.sort((a: any, b: any) => (a - b));
    }

    reverse() {
        this.database = this.database.reverse();
    }
}

export default Data;