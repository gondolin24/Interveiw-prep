class LruCache {
    constructor(capacity) {
        this.capacity = capacity
        this.lru = null
        this.cache = {}
        this.values = 0
        this.evict = null
    }

    get(key, timeStamp) {
        const object = this.cache[key]
        if ((object)) {
            if (object.timestamp < timeStamp) {
                this.evict = key
                return -1
            } else {
                this.lru = key
                return object.value
            }

        }
        return -1
    }

    put(key, value, timestamp) {
        this.values += 1

        if ((this.evict)) {
            delete this.cache[this.evict]
        } else {
            if ((this.values > this.capacity)) {
                const current = this.cache[this.lru]
                this.cache = {}
                this.cache[this.lru] = current
                this.values = this.capacity
            }
        }


        this.lru = key
        this.cache[key] = {
            value,
            timestamp
        }
    }

}


const cache = new LruCache(2)
cache.put(1, 3, 10)
cache.put(2, 4, 5)
console.log(cache.get(1, 1))
console.log(cache.get(1, 11))
console.log(cache.get(2, 5))
console.log(cache.get(2, 6))
cache.put(3, 100, 10)
console.log(cache.get(2, 1))
cache.put(4, 4, 10)
console.log(cache.get(1, 1))
console.log(cache.get(3, 1))
console.log(cache.get(4, 1))

