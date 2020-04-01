import Data from './Data'

export interface ClassConstructiorInterface {
    name: String, 
    data: any[]
}
class Class extends Data{
    name: String
    intervalClass: number | undefined

    constructor(classAttribute: ClassConstructiorInterface) {
        super(classAttribute.data)

        this.name = classAttribute.name
    }

    setIntervalClass(automaticOrSetting ?: Number) {
        if(!automaticOrSetting) {

        }
    }

    getIntervalClass() {
        if(!this.intervalClass) {
            this.setIntervalClass()
        }
        return this.intervalClass
    }
}

export default Class;