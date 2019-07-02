import Pyramid from "../components/Pyramid.js";
import { format } from "../utils.js";

export default {
    props: ["explode", "opacity", "wireframe", "colors", "animate"],
    components: { Pyramid },
    data: () => ({
        sides: 5,
        height: 1.309,
        rotationangle: 72,
        dihedralangle: 180-116.5650512,
        radius: 1
    }),
    methods: { 
        format
    },
    template: `
        <a-entity ref="scene" position="0 0 0" rotation="-30 -30 0">
            
        
            <!-- first half -->
            <a-entity>
            <a-entity rotation="0 0 0" >
                <a-entity :position="format({ x: 0, y: -explode*2, z: 0})">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[0]" 
                    ></Pyramid>
                </a-entity>
            </a-entity>
            
           <a-entity v-for="(obj,i1) in Array.from({length: 100}).slice(0, 5)"
                :key="obj"
                :rotation="format({ x: dihedralangle, y: 180 + i1*rotationangle, z: 0})"
            >
                <a-entity :position="format({ x: 0, y: -explode*2, z: 0})">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[i1+1]" 
                    ></Pyramid>
                </a-entity>
            </a-entity>
            </a-entity>
            <!-- // first half end -->

            <!-- second half -->
            <a-entity :rotation="format({ x: 0, y: 7*36, z: 180})">
            <a-entity 
                :rotation="format({ x: 0, y: 0, z: 0})"
            >
                <a-entity :position="format({ x: 0, y: -explode*2, z: 0})">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[0]" 
                    ></Pyramid>
                </a-entity>
            </a-entity>
            
           <a-entity v-for="(obj,i1) in Array.from({length: 100}).slice(0, 5)"
                :key="obj"
                :rotation="format({ x: dihedralangle, y: 180 + i1*rotationangle, z: 0})"
            >
                <a-entity :position="format({ x: 0, y: -explode*2, z: 0})">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[i1+4]" 
                    ></Pyramid>
                </a-entity>
            </a-entity>
            </a-entity>
            <!-- // second half end -->
            <a-entity light="type: point; intensity:0.7; distance: 14; decay: 10; "
          position="0 0 0"></a-entity>
    </a-entity>
    
    `
};
