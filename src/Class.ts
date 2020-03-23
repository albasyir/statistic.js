class Class {
    data: Array<number> = [];
    frequency: number = 0;

    constructor(data: Array<number>) {
        this.set(data);
    }

    set(newData: Array<number>) {
        this.data = newData;
        this.frequency = newData.length;
    }
}

export default Class;