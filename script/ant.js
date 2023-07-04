import Vec2 from "./vec2.js"

export default class Ant{

    constructor(nest, config){
        this.nest = nest;
        this.pos = nest.pos;
        this.rot = Math.random() * 2 * Math.PI;
        this.config = config;
    }

    tick(){
        this.move()
    }

    move(){
        // Wiggle
        this.rot += (Math.random() -0.5) * this.config.wiggle;
        
        // Move
        this.pos = this.pos.add(Vec2.fromRadians(this.rot).multiply(this.config.speed));

    }

    get_rot(){
        return this.rot;
    }

    get_pos(){
        return this.pos;
    }

    set_pos(pos){
        this.pos = pos;
    }

    die(){
        // Do things like drop whatever is being carried
    }

}