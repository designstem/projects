import Pyramid from "../components/Pyramid.js";
import { format } from "../utils.js";

export default {
    props: ["explode", "opacity", "wireframe", "colors", "animate"],
    components: { Pyramid },
    data: () => ({
        sides: 3,
        //height: 0.75576,
        height: 1.31,
        rotationangle: 120,
        dihedralangle: 138.19,
        //radius: 1,
        testrotX:0,
        testrotY:0,
        testrotZ:0
    }),
    methods: { 
        format
    },
    template: `
        <a-entity ref="scene" position="0 -1 0" rotation="0 0 0">
        
       
            <!-- first half -->

            <a-entity>

            <a-icosahedron color="#FF926B" radius="1.5" rotation="0 45 0"></a-icosahedron>

<!--
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
                



                <a-entity v-for="(obj,i1) in Array.from({length: 100}).slice(0, 3)"
                    :key="obj"
                    :rotation="format({ x: 180-dihedralangle, y: rotationangle/2 + i1*rotationangle, z: 0})"
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

-->

<!-- 
                <a-entity v-for="(obj,i1) in Array.from({length: 100}).slice(0, 3)"
                    :key="obj"
                    
                    :rotation="format({ x: testrotX, y: rotationangle/2 + testrotY*i1, z: testrotZ})"
                >
                    <a-entity :position="format({ x: 0, y: -explode*2, z: 0})">
                        <Pyramid
                            :sides="sides"
                            :height="height" 
                            :opacity="opacity"
                            :wireframe="wireframe"
                            color="red" 
                        ></Pyramid>
                    </a-entity>
                </a-entity>
 -->
            </a-entity>
            <!-- // first half end -->

<!--            
            <a-entity light="type: point; intensity:0.7; distance: 14; decay: 10; "
          position="0 0 0"></a-entity>

            <div style="position:absolute; top:100px; right:2rem; z-index:99999;width:25vw;">
            <label>{{this.testrotX}}</label>
            <input type="range" max="360" step="0.1" v-model="testrotX">
            <label>{{this.testrotY}}</label>
            <input type="range" max="360" step="0.1" v-model="testrotY">
            <label>{{this.testrotZ}}</label>
            <input type="range" max="360" step="0.1" v-model="testrotZ">
            </div>
-->

    </a-entity>
    
    `
};
