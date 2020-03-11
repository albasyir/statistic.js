// import Aggregation from './aggregation'

import Class from './Class'

/**
 * > Statistic Base Class
 * 
 * Base aggregation is State ( super extends )
 */
export class Statistic extends Class {
    constructor(newState = []) {
        super(newState)
    }
}

export default Statistic;