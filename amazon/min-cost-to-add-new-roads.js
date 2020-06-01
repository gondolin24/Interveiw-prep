const connections = [[1, 2, 5], [1, 3, 6], [2, 3, 1]]

function find(key, graph) {
    const found = Object.keys(graph).find((k) => k === key)
    if (found) {
        return graph[key]
    }
    return null
}

function generateGraph(connectedArray) {
    const graph = {}
    const citySet = new Set()
    const keys = connectedArray.map((arr) => {
        const [a,b] = arr
        return [a.toString(), b.toString()]
    })

    keys.flat().forEach((key) => citySet.add(key))
    citySet.forEach((key) => {
        graph[key] = {}
    })

    connectedArray.forEach((array) => {
        const key = array[0].toString()
        const nextCity = array[1].toString()
        const cost = array[2]
        let temp = graph[key]
        const nextCityNode = graph[nextCity]

        if (!(temp.left)) {
            temp.left = nextCity
            nextCityNode.right = key
            temp.cost = cost
            nextCityNode.cost = cost
        } else {
            nextCityNode.left = key
            temp.right = nextCity
        }
        graph[key] = temp
        graph[nextCity] = nextCityNode
    })

    return graph
}

function validCheck(city, graph, end) {
    const currentNode = find(city, graph)
    if (!(currentNode) || city === end) {
        return 0
    }
    const right = 1 + validCheck(currentNode.left, graph, end)

    return right
}

function getMinRoadCost(current, graph, citiesTraveled, maxCities) {
    const node = find(current, graph)
    if (citiesTraveled === maxCities) return 0
    const leftTurn = node.cost + getMinRoadCost(node.left, graph, citiesTraveled + 1, maxCities)
    return leftTurn
}


function getMinRoadCostRight(current, graph, citiesTraveled, maxCities) {
    const node = find(current, graph)
    if (citiesTraveled === maxCities) return 0
    const right = node.cost + getMinRoadCostRight(node.right, graph, citiesTraveled + 1, maxCities)
    return right
}

function solve(connectedArray) {
    const graph = generateGraph(connectedArray)
    const cityNames = Object.keys(graph)
    const root = find(cityNames[0], graph)
    const count = validCheck(root.left, graph, cityNames[0])
    if (count+1 !== cityNames.length) return -1

    return  Math.min(
        getMinRoadCost(cityNames[0], graph, 1, cityNames.length),
        getMinRoadCostRight(cityNames[0], graph, 0, cityNames.length)
    )
}

const connectionsTest = [[1, 2, 3], [3, 4, 4]]
console.log(solve(connectionsTest) === -1)
console.log(solve(connections) === 6)
