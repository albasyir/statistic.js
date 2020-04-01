import { default as Class, ClassConstructiorInterface } from './Class'

class Statistic {
    private baseClass: Class
    private class: Array<Class> = []
    
    constructor(newbaseClass ?: ClassConstructiorInterface) {
        this.baseClass = new Class(newbaseClass as ClassConstructiorInterface)
    }

    makeClass(objectClass : Array<object>) {
        for (let row = 0; row < objectClass.length; row++) {
            this.class[row] = new Class(objectClass[row] as ClassConstructiorInterface)
        }
    }
}

export default Statistic