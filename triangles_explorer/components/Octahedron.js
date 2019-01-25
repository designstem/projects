import Pyramid from "../components/Pyramid.js";
import { format } from "../utils.js";

export default {
    props: ["explode", "opacity", "wireframe", "colors", "animate"],
    components: { Pyramid },
    data: () => ({
        sides: 4,
        height: 1
    }),
    methods: { 
        format
    },
    template: `
        <a-entity ref="scene" position="-0.5 0 2" rotation="0 0 0" size="3 3 3">
            
            <a-entity rotation="0 60 0">
                <a-entity :position="format({ x: 0, y: height+explode*1, z: 0})" rotation="0 0 0">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[3]" 
                    ></Pyramid>
                </a-entity>
            </a-entity>
            <a-entity rotation="0 60 0">
                <a-entity :position="format({ x: 0, y: -height-explode*1, z: 0})" rotation="0 0 180">
                    <Pyramid
                        :sides="sides"
                        :height="height" 
                        :opacity="opacity"
                        :wireframe="wireframe"
                        :color="colors[6]" 
                    ></Pyramid>
                </a-entity>
            </a-entity>
            
            

            <a-entity light="type: point; intensity:0.7; distance: 14; decay: 10; "
          position="0 0 0"></a-entity>

            
        </a-entity>
    `
};
