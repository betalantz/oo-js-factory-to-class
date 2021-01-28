// object literals
// const character = {}
// const character = new Object

// factory function
function createCharacter(speed = 20) {
    const character = {}

    character.element = document.createElement('img')
    character.speed = speed
    character.assets = 'assets/character'
    character.element.src = `${character.assets}/static.gif`
    character.element.style.position = 'relative'
    character.element.style.left = '0px'
    character.element.style.top = '0px'
    character.element.style.width = '25px'

    document.body.querySelector('#main').appendChild(character.element)

    character.walkEast = function() {
        stop()
        character.movement = setInterval(function() {
          let currentPosition = parseInt(character.element.style.left)
          character.element.style.left = currentPosition + 1 + 'px'
        }, speed)
        character.element.src = `${character.assets}/walkright.gif`
      }
      return character
}

// Object.create

// constructor function MUST BE CALLED WITH NEW KEYWORD

function Character(speed = 20) {
    this.element = document.createElement('img')
    this.speed = speed
    this.assets = 'assets/character'
    this.element.src = `${this.assets}/static.gif`
    this.element.style.position = 'relative'
    this.element.style.left = '0px'
    this.element.style.top = '0px'
    this.element.style.width = '25px'

    document.body.querySelector('#main').appendChild(this.element)
}

Character.prototype.walkEast = function() {
    this.stop()
    // the function declaration below causes 'this' to lose its context inside of the setInterval callback function vvvvvvvvvvvvv
    //
    // this.movement = setInterval(function() {   
    //     let currentPosition = parseInt(this.element.style.left)
    //     this.element.style.left = currentPosition + 1 + 'px'
    //   }, this.speed)

    // using an anonymous arrow function binds the context of 'this' in the callback to the context in which setInterval() is called
    this.movement = setInterval(() => { 
        let currentPosition = parseInt(this.element.style.left)
        this.element.style.left = currentPosition + 1 + 'px'
      }, this.speed)
      this.element.src = `${this.assets}/walkright.gif`
    }

Character.prototype.walkWest = function() {
    this.stop()
    this.movement = setInterval(() => {
        let currentPosition = parseInt(this.element.style.left)
        this.element.style.left = currentPosition - 1 + 'px'
    }, this.speed)
    this.element.src = `${this.assets}/walkleft.gif`
    }

Character.prototype.walkNorth = function() {
    this.stop()
    this.movement = setInterval(() => {
        let currentPosition = parseInt(this.element.style.top)
        this.element.style.top = currentPosition - 1 + 'px'
    }, this.speed)
    this.element.src = `${this.assets}/walkup.gif`
    }

Character.prototype.walkSouth = function() {
    this.stop()
    this.movement = setInterval(() => {
        let currentPosition = parseInt(this.element.style.top)
        this.element.style.top = currentPosition + 1 + 'px'
    }, this.speed)
    this.element.src = `${this.assets}/walkdown.gif`
    }

Character.prototype.stop = function() {
    clearInterval(this.movement)
    this.element.src = `${this.assets}/static.gif`
}




// const zoe = new Character

// class syntax => characterClass.js
