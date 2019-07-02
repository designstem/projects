import Pyramid from "../components/Pyramid.js";
import { format } from "../utils.js";

export default {
    props: ["explode", "opacity", "wireframe", "colors", "animate"],
    components: { Pyramid },
    data: () => ({
        sides: 4,
        angle: 90,
        height: 0.705,
        radius: 1
    }),
    methods: { 
        format
    },
    template: `
        <a-entity ref="scene" position="0 0 2" rotation="-30 -30 0" size="1.5 1.5 1.5">
            <!-- loop 1: 4 sides start -->
            <a-entity v-for="(obj,i1) in Array.from({length: 100}).slice(0, 4)"
                :key="obj"
                :rotation="format({ x: i1*angle, y: 0, z: 0})"
                
            >
                <a-entity :position="format({ x: 0, y: -explode*2, z: 0})" rotation="0 45 0">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[i1]" 
                    ></Pyramid>
                </a-entity>
            </a-entity>
            <!-- // loop 1: 4 sides end -->
            
            <!-- loop 2: 2 sides start -->
            <a-entity 
                v-for="(obj,i2) in Array.from({length: 100}).slice(0, 2)"
                :key="obj"
                :rotation="format({ x: angle, y: angle+i2*180, z: 0})"
            >
                <a-entity :position="format({ x: 0, y: -explode*2, z: 0})" rotation="0 45 0">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[4+i2]" 
                    ></Pyramid>
                </a-entity>

            </a-entity>
        

            <!-- // loop 2: 2 sides end -->

            <a-entity light="type: point; intensity:0.7; distance: 6; decay: 4; "
          position="0 0 0"></a-entity>
        </a-entity>
    `
};
