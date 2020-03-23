import Data from './Data'
import Class from './Class'

class Statistic {
    data: Data;
    private class: Array<Class> = [];
    private intervalClass: Number | undefined;

    constructor(newState: Array<any>) {
        this.data = new Data(newState);
    }

    setIntervalClass(automaticOrSetting : Number | undefined) {
        if(!automaticOrSetting) {
            // automation set interval class
        }

        this.intervalClass = automaticOrSetting;
    }

    getIntervalClass() {
        if(!this.intervalClass) {
            this.setIntervalClass(undefined);
        }
        return this.intervalClass;
    }

    makeClass() {
        // make automation class interval
        let activeInterval = this.getIntervalClass();
    }
}

export default Statistic;