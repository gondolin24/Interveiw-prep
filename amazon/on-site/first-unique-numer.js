class DataStream {
    constructor() {
        this.data = {}
    }

    add(val) {
        const obj = this.data[val]
        if ((obj)) {
            obj.value = obj.value + 1
        } else {
            this.data[val] = {key: val, value: 0}
        }
    }

    getFirstUniqueNumber() {
        const array = Object.keys(this.data).map((a)=>this.data[a]).sort((a, b) => a.value - b.value)
        if ((array.length > 0)) {
            const current = array.shift()
            console.log(current.key)
        } else {
            console.log(-1)
        }

    }
}

const stream = new DataStream()
stream.getFirstUniqueNumber()
stream.add(10)
stream.getFirstUniqueNumber()
stream.add(11)
stream.getFirstUniqueNumber()
stream.add(10)
stream.getFirstUniqueNumber()
