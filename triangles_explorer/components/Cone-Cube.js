
import { format } from "../utils.js";

export default {
    props: ["explode", "opacity", "wireframe", "colors", "animate"],
    data: () => ({
        sides: 4,
        angle: 0,
        height: 1,
        radius: 5
    }),
    created: function(){
        const rad = Math.PI/180;
        this.angle = (180*(this.sides-2)/this.sides)/2;
        let h0 = this.radius * Math.sin(this.angle * rad);
        
        this.height = h0 * Math.tan(this.angle * rad);
        
        //console.log("h0: " + h0 + "angle: " + this.angle +  " height: " + this.height + " shift: " + this.height/2);
    },
    methods: { 
        format
    },
    template: `
        <a-entity ref="scene" position="0 0 0" rotation="-30 30 0">
            <!-- loop 1: 4 sides start -->
            <a-entity v-for="(obj,i1) in Array.from({length: 100}).slice(0, 4)"
                :key="obj"
                :rotation="format({ x: 0, y: 0, z: i1*(angle*2)})"
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
                        color: colors[i1],
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
            <a-entity 
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

            ></a-entity>

        </a-entity>
        <!-- // loop 2: 2 sides end -->
        <!--<input type="range" v-model="height" min="1" max="2" step="0.01" />-->
    </a-entity>
    
    `
};
