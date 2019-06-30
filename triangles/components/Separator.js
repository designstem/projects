import { 
    utils
  } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default{
    props:{
        linecolor: { default: 'gray', type: String },
        margin: { default: '5vh', type: String },
        dashed: { default: false, type: Boolean }
    },
    methods: {
        ...utils
    },
    template: `
        <div>
            <div style="width:100%; borderTopWidth:1px;"
                :style="{
                    margin: margin + ' 0',
                    borderTopColor: color(linecolor),
                    borderTopStyle: dashed ? 'dotted' : 'solid'
                }"
            ></div>
        </div>
    `
};
