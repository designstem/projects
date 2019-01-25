import Pyramid from "../components/Pyramid.js";
import { format } from "../utils.js";

export default {
    props: ["explode", "opacity", "wireframe", "colors", "animate"],
    components: { Pyramid },
    data: () => ({
        sides: 3,
        angle: 30,
        rotationangle: 120,
        dihedralangle: 70.5288,
        height: 0.35,
        radius: 1,
        testheight: 1,
        testrotX:60,
        testrotY:60
    }),
    methods: { 
        format
    },
    template: `
        <a-entity ref="scene" position="0 0 2" rotation="0 0 0" size="1.5 1.5 1.5">
            
            <a-entity rotation="0 60 0">
                <a-entity :position="format({ x: 0, y: -explode*2, z: 0})" rotation="0 0 0">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[0]" 
                    ></Pyramid>
                </a-entity>
            </a-entity>



            <!-- loop: 3 sides start -->
            <a-entity v-for="(obj,i1) in Array.from({length: 100}).slice(0, 3)"
                :key="obj"
                :rotation="format({ x:180-dihedralangle , y: i1*rotationangle, z: 0})"
                
            >
                <a-entity :position="format({ x: 0, y: -explode*2, z: 0})" rotation="0 0 0">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[i1+1]" 
                    ></Pyramid>
                </a-entity>
            </a-entity>
            <!-- // loop: 3 sides end -->

            <a-entity light="type: point; intensity:0.7; distance: 14; decay: 10; "
          position="0 0 0"></a-entity>

            <!--<div style="position:fixed; width:50vw; z-index:1005; right:0; bottom:0;">
            <input v-model="testheight" type="range" min="0.1" max="2" step="any"/>
            {{testheight}}
            <input v-model="testrotX" type="range" min="0" max="360" step="any"/>
            {{testrotX}}
            <input v-model="testrotY" type="range" min="0" max="360" step="any"/>
            {{testrotY}}
            </div>-->
        </a-entity>
    `
};
