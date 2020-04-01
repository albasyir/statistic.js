class Data {
    data: Array<number> = []
    sorted: Array<number> | undefined

    constructor(newState: Array<number>) {
        this.data = newState
    }

    push(newState: any[]) {
        this.data.push(...newState)
    }

    popBetween(minState: number, maxState: number) {
        this.data = this.data.filter((x: any) => {
            return x >= minState && x <= maxState
        })
    }

    sort() {
        return this.sorted = this.sorted || this.data.sort((a: any, b: any) => (a - b))
    }

    reverse() {
        this.data = this.data.reverse()
    }
}

export default Data;