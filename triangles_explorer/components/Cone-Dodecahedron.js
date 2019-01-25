
import { format } from "../utils.js";

export default {
    props: ["explode", "opacity", "wireframe", "colors", "animate"],
    data: () => ({
        sides: 5,
        angle: 0,
        rotationangle: 0,
        height: 1,
        radius: 1
    }),
    created: function(){
        const rad = Math.PI/180;
        this.angle = (180*(this.sides-2)/this.sides)/2;
        this.rotationangle = 180 - 2*this.angle;
        
        //const side = this.radius * Math.sin( (180/this.sides) * rad ) * 2;
        
        const height = (this.radius*2)/15 * Math.sqrt(75+(30*Math.sqrt(5)));
        //const height = (side/20) * Math.sqrt(250 + (110*Math.sqrt(5)));
        this.height = height;
        
        // const halfside = this.radius * Math.sin( (180/this.sides) * rad );
        // console.log(halfside);
        // const h0 = halfside * Math.tan(this.angle * rad);
        //const h0 = this.radius * Math.sin(this.angle * rad);
        
        
        // this.height = h0 * Math.tan(54 * rad);
        
        //console.table([["h0", h0], ["angle", this.angle],  ["rotationangle", this.rotationangle], ["height", this.height]] );
    },
    methods: { 
        format
    },
    template: `
        <a-entity ref="scene" position="0 0 0" rotation="30 0 0">
            
        
            <!-- top half -->
            
            <a-entity 
                :rotation="format({ x: 0, y: 0, z: 0})"
            >
                <a-entity
                    :geometry="{
                        primitive: 'cone', 
                        segmentsRadial: sides,
                        height: height,
                        radiusBottom: 0,
                        radiusTop: radius,
                        segmentsHeight: 1,
                        buffer: false,
                        thetaStart: 0
                    }" 
                    :position="format({ x: 0, y: height/2 + explode*2, z: 0})" 
                    rotation="0 0 0"
                    scale="1 1 1"
                
                    color="white" 
     
                    :material="{
                        color: colors[0],
                        flatShading: true,
                        vertexColors: 'face',
                        width: 511,
                        side: 'double',
                        opacity: opacity,
                        wireframe: wireframe
                    }"
                ></a-entity>
            </a-entity>
            

            
           <a-entity v-for="(obj,i1) in Array.from({length: 100}).slice(0, 2)"
                :key="obj"
                :rotation="format({ x: angle, y: rotationangle/2 + i1*(rotationangle), z: 0})"
            >
                <a-entity
                    :geometry="{
                        primitive: 'cone', 
                        segmentsRadial: sides,
                        height: height,
                        radiusBottom: 0,
                        radiusTop: radius,
                        segmentsHeight: 1,
                        buffer: false,
                        thetaStart: 0
                    }" 
                    :position="format({ x: 0, y: height/2 + explode*2, z: 0})" 
                    rotation="0 0 0"
                    scale="1 1 1"
                
                    color="white" 
     
                    :material="{
                        color: colors[i1+1],
                        flatShading: true,
                        vertexColors: 'face',
                        width: 511,
                        side: 'double',
                        opacity: opacity,
                        wireframe: wireframe
                    }"
                ></a-entity>
            </a-entity>
            <!-- // loop 1: 4 sides end -->
            
            
            <!-- loop 2: 2 sides start -->
            <!--<a-entity 
                v-for="(obj,i2) in Array.from({length: 100}).slice(0, 2)"
                :key="obj"
                :rotation="format({ x: 90+i2*180, y: 0, z: 0})"
            >
                <a-entity

                :geometry="{
                    primitive: 'cone', 
                    segmentsRadial: sides,
                    height: height,
                    radiusBottom: 0,
                    radiusTop: radius,
                    segmentsHeight: 1,
                    buffer: false,
                    thetaStart: angle
                }" 

                :position="format({ x: 0, y: height/2 + explode*2, z: 0})" 
                rotation="0 0 0"
                scale="1 1 1"

                color="white" 

                :material="{
                    color: colors[sides+i2],
                    flatShading: true,
                    vertexColors: 'face',
                    width: 511,
                    side: 'double',
                    opacity: opacity,
                    wireframe: wireframe
                }"

            ></a-entity>-->

        </a-entity>
        <!-- // loop 2: 2 sides end -->
        <!--<input type="range" v-model="height" min="1" max="2" step="0.01" />-->
    </a-entity>
    
    `
};
