
import { format } from "../utils.js";

export default {
    //props: ["sides", "height", "opacity", "wireframe", "color"],
    props: {
        sides: {
            default: 4
        },
        height: {
            default: 1
        },
        opacity: {
            default: 1
        },
        wireframe: {
            default: "false"
        },
        color: {
            default: "#bada55"
        },
    },
    data: () => ({
        //angle: 0,
        rotationangle: 0,
        //height: 1,
        radius: 1
    }),
    created: function(){
        //const rad = Math.PI/180;
        //this.angle = (180*(this.sides-2)/this.sides)/2;
        this.rotationangle = 180 - 2*this.angle;
        
        //const h0 = this.radius * Math.sin(this.angle * rad);
        
        //this.height = h0 * Math.tan(this.angle * rad);

        //const side = this.radius * Math.sin( (180/this.sides) * rad ) * 2;
        
        //const height = (this.radius*2)/15 * Math.sqrt(75+(30*Math.sqrt(5)));
        //const height = (side/20) * Math.sqrt(250 + (110*Math.sqrt(5)));
        //this.height = height;
        
        // const halfside = this.radius * Math.sin( (180/this.sides) * rad );
        // console.log(halfside);
        // const h0 = halfside * Math.tan(this.angle * rad);
        //const h0 = this.radius * Math.sin(this.angle * rad);
        
        
        // this.height = h0 * Math.tan(54 * rad);
        
        //console.table([["h0", h0], ["angle", this.angle],  ["rotationangle", this.rotationangle], ["height", this.height]] );
    },
    computed: {
        angle() {
            let a = (180*(this.sides-2)/this.sides)/2;
            this.rotationangle = 180 - 2*a;
            return a;
        },
        vertexPointX() {
          return  Math.sin(this.rotationangle*Math.PI/180) * this.radius;
        },
        vertexPointY() {
            return  Math.cos(this.rotationangle*Math.PI/180) * this.radius;
          }
      },
    methods: { 
        format
    },
    template: `
        <a-entity :position="format({ x: 0, y: -height, z: 0})" :rotation="format({ x: -90, y: 0, z: 0})">
            
        
            <!-- base -->
            
            <a-entity v-for="(obj,i1) in Array.from({length: 100}).slice(0, sides)"
                :key="obj"
                :rotation="format({ x: 0, y: 0, z: i1*rotationangle})"
            >
                <a-entity
                    :geometry="{
                        primitive: 'triangle',
                        vertexA: format({ x:0, y:radius, z:0}),
                        vertexB: format({ x:0, y:0, z:0}),
                        vertexC: format({ x:vertexPointX, y:vertexPointY, z:0})
                    }"
                    :position="format({ x: 0, y: 0, z: 0})" 
                    rotation="0 0 0"
                    scale="1 1 1"
                
                    color="white" 
     
                    :material="{
                        color: color,
                        flatShading: true,
                        vertexColors: 'vertex',
                        width: 511,
                        side: 'double',
                        opacity: opacity,
                        wireframe: false
                    }"
                ></a-entity>
            </a-entity>
            <!-- base end -->
            
            <!-- sides -->
            <a-entity v-for="(obj,i2) in Array.from({length: 100}).slice(0, sides)"
                :key="obj"
                :rotation="format({ x: 0, y: 0, z: i2*rotationangle})"
            >
                <a-entity
                    :geometry="{
                        primitive: 'triangle',
                        vertexA: format({ x:0, y:radius, z:0}),
                        vertexB: format({ x:0, y:0, z:height}),
                        vertexC: format({ x:vertexPointX, y:vertexPointY, z:0})
                    }"
                    :position="format({ x: 0, y: 0, z: 0})" 
                    rotation="0 0 0"
                    scale="1 1 1"
                
                    color="white" 
     
                    :material="{
                        color: color,
                        flatShading: true,
                        vertexColors: 'vertex',
                        width: 511,
                        side: 'double',
                        opacity: opacity,
                        wireframe: wireframe
                    }"
                ></a-entity>
            </a-entity>
            <!-- sides end -->
            
    </a-entity>
    
    `
};
