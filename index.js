// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
const a = "cat name"
function destructivelyAppendCat(a) {
    cats.push(a)
}
console.log(cats)

function destructivelyPrependCat (b) {
    cats.unshift(b)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(c) {
    return [...cats, c]
}
function prependCat(d) {
    return [d, ...cats]
}
function removeLastCat() {
    return cats.slice(0, -1)
}
function removeFirstCat() {
    return cats.slice(1)
}
