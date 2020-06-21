class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.internalCache = {}
        this.lastUsed = null
        this.values = 0
    }

    get(key) {
        const object = this.internalCache[`${key}`]
        if ((object)) {
            this.lastUsed = `${key}`
            return object.value
        }
        return -1
    }

    put(key, value) {

        this.values = this.values + 1
        if (this.values > 2) {
            const value = this.internalCache[`${this.lastUsed}`]
            this.internalCache = {}
            this.internalCache[`${this.lastUsed}`] = value
            this.values = 2
        }
        this.lastUsed = `${key}`
        this.internalCache[`${key}`] = {
            value
        }

    }
}

const cache = new LRUCache(2 /* capacity */);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));// returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));    // returns -1 (not found)
cache.put(4, 4);
console.log(cache.get(1));//-1
console.log(cache.get(3));//3
console.log(cache.get(4));  //4

