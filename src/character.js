const main = document.body.querySelector('#main')
const characterElement = document.createElement('img')

let speed = 25
let movement
const characterAssets = 'assets/character'
characterElement.src = `${characterAssets}/static.gif`
characterElement.style.position = 'relative'
characterElement.style.left = '0px'
characterElement.style.top = '0px'
characterElement.style.width = '25px'

main.appendChild(characterElement)

function walkEast() {
  stop()
  movement = setInterval(function() {
    let currentPosition = parseInt(characterElement.style.left)
    characterElement.style.left = currentPosition + 1 + 'px'
  }, speed)
  characterElement.src = `${characterAssets}/walkright.gif`
}

function walkWest() {
  stop()
  movement = setInterval(function() {
    let currentPosition = parseInt(characterElement.style.left)
    characterElement.style.left = currentPosition - 1 + 'px'
  }, speed)
  characterElement.src = `${characterAssets}/walkleft.gif`
}

function walkNorth() {
  stop()
  movement = setInterval(function() {
    let currentPosition = parseInt(characterElement.style.top)
    characterElement.style.top = currentPosition - 1 + 'px'
  }, speed)
  characterElement.src = `${characterAssets}/walkup.gif`
}

function walkSouth() {
  stop()
  movement = setInterval(function() {
    let currentPosition = parseInt(characterElement.style.top)
    characterElement.style.top = currentPosition + 1 + 'px'
  }, speed)
  characterElement.src = `${characterAssets}/walkdown.gif`
}

function stop() {
  clearInterval(movement)
  characterElement.src = `${characterAssets}/static.gif`
}

// 2nd character
const characterElement2 = document.createElement('img')

// let speed = 25
let movement2
const characterAssets = 'assets/character'
characterElement2.src = `${characterAssets}/static.gif`
characterElement2.style.position = 'relative'
characterElement2.style.left = '0px'
characterElement2.style.top = '0px'
characterElement2.style.width = '25px'

main.appendChild(characterElement2)

function walkEast2() {
  stop()
  movement2 = setInterval(function() {
    let currentPosition = parseInt(characterElement2.style.left)
    characterElement2.style.left = currentPosition + 1 + 'px'
  }, speed)
  characterElement2.src = `${characterAssets}/walkright.gif`
}

function walkWest2() {
  stop()
  movement2 = setInterval(function() {
    let currentPosition = parseInt(characterElement2.style.left)
    characterElement2.style.left = currentPosition - 1 + 'px'
  }, speed)
  characterElement2.src = `${characterAssets}/walkleft.gif`
}

function walkNorth2() {
  stop()
  movement2 = setInterval(function() {
    let currentPosition = parseInt(characterElement2.style.top)
    characterElement2.style.top = currentPosition - 1 + 'px'
  }, speed)
  characterElement2.src = `${characterAssets}/walkup.gif`
}

function walkSouth2() {
  stop()
  movement2 = setInterval(function() {
    let currentPosition = parseInt(characterElement2.style.top)
    characterElement2.style.top = currentPosition + 1 + 'px'
  }, speed)
  characterElement2.src = `${characterAssets}/walkdown.gif`
}

function stop2() {
  clearInterval(movement2)
  characterElement2.src = `${characterAssets}/static.gif`
}
