class GameObject {

    constructor() {
        this.element = document.createElement('img')
        this.assets = 'assets/character'
        this.element.style.position = 'relative'
        this.element.style.left = '0px'
        this.element.style.top = '0px'
        this.element.style.width = '25px'
    }
    
}


class Character extends GameObject {

    // the 'static' keyword makes this a 'class' method
    static all(){
        return Character.allArray
    }
    
    // cognate to initialize in Ruby
    constructor(speed = 25){
        super()
        this.speed = speed
        this.element.src = `${this.assets}/static.gif`
        document.body.querySelector('#main').appendChild(this.element)
        Character.allArray.push(this)
    }
    

    // cognate to instance methods in Ruby
    walkEast() {
        this.stop()
        this.movement = setInterval(() => {
            let currentPosition = parseInt(this.element.style.left)
            this.element.style.left = currentPosition + 1 + 'px'
        }, this.speed)
        this.element.src = `${this.assets}/walkright.gif`
    }
    
    walkWest() {
        this.stop()
        this.movement = setInterval(() => {
            let currentPosition = parseInt(this.element.style.left)
            this.element.style.left = currentPosition - 1 + 'px'
        }, this.speed)
        this.element.src = `${this.assets}/walkleft.gif`
    }
        
    walkNorth() {
        this.stop()
        this.movement = setInterval(() => {
            let currentPosition = parseInt(this.element.style.top)
            this.element.style.top = currentPosition - 1 + 'px'
        }, this.speed)
        this.element.src = `${this.assets}/walkup.gif`
    }
        
    walkSouth() {
        this.stop()
        this.movement = setInterval(() => {
            let currentPosition = parseInt(this.element.style.top)
            this.element.style.top = currentPosition + 1 + 'px'
        }, this.speed)
        this.element.src = `${this.assets}/walkdown.gif`
    }

    stop() {
        clearInterval(this.movement)
        this.element.src = `${this.assets}/static.gif`
    }
}

Character.allArray = []