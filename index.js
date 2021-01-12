// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"]
let newDrivers = [...drivers, "Broom"]
let moreNewDrivers = ["Arnold", ...drivers]
let lastGone = drivers.slice(0, drivers.length - 1)
let firstGone = drivers.slice(1)

function destructivelyAppendDriver(name) {
    drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
    drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    return newDrivers;
}

function prependDriver(name) {
    return moreNewDrivers
}

function removeLastDriver() {
    drivers.slice(0, drivers.length - 1)
    return lastGone
}

function removeFirstDriver() {
    drivers.slice(1)
    return firstGone
}