export default {
  props: ["item"],
  template: `
        <div 
        :style="{
            width: '100%',
            }">
            <label>H <code>{{item.h}}</code></label>
            <input type="range" v-model="item.h" :max="360"/>
            <label>S <code>{{item.s}}</code></label>
            <input type="range" v-model="item.s" :max="100"/>
            <label>L <code>{{item.l}}</code></label>
            <input type="range" v-model="item.l" :max="100"/>
            <label>A <code>{{item.alpha}}</code></label>
            <input type="range" v-model="item.alpha" step="0.01" :max="1"/>
        </div>
        `
};