import Scene from "./components/Scene.js";
import Spinner from './components/Spinner.js'
import Box from "./components/Box.js";
import Spoke from "./components/Spoke.js";
import Spiral from "./components/Spiral.js";
import Shutter from "./components/Shutter.js";
import Flower from "./components/Flower.js";

new Vue({
  el: "#app",
  components: { Scene, Spinner, Box, Spoke, Spiral, Shutter, Flower },
  data: () => ({
    size: 500,
    speed: 1800,
    speed2: 120,
    count: 108,
    divide: 104
  }),
  template: `
        <div style="height: 100vh">
          <header>
            <div>
                <a href="https://designstem.github.io/homepage">Home</a>
                → Vinyl Frequency
            </div>
           </header>
            
           <div style="display: flex; height: 100%">
            <div style="width: 400px; padding: 2rem; border-right: 3px solid var(--primary)">
            <h2>1. Spin this vinyl</h2>
            <p>A comprehensive explanation what the heck is going on is going here.</p>
            
            <br />         
            
            <div class="button_secondary" @click="speed = 1800; count = 108">33⅓ RPM</div>
            <div class="button_secondary" @click="speed = 1333; count = 80">45 RPM</div>
            
            <br /><br />
            
            <label>Speed: <code>{{speed}}ms</code></label>
            <div style="display:flex; align-items: center;">
                <input style="margin-right: 1rem" type="range" v-model="speed" min="0.1" max="5000" step="0.01" />
                <input type="text" size="10" v-model="speed" min="0.1" max="5000" step="0.01" />
            </div>

            <label>Spoke count: <code>{{count}}</code> Degrees: <code>{{String(360 / count).slice(0,10)}}</code> </label>

            <div style="display:flex; align-items: center;">
                <input style="margin-right: 1rem" type="range" v-model="count" max="360" />
                <input type="text" size="10" v-model="count" max="360" />
            </div>
            
            <h2>2. Use the camera as shutter</h2>
            <p>A comprehensive <a href="https://designstem.github.io/vinylfrequency_camera/">link to the camera app</a> (or even QR code)</p>
            
            </div>
            
            <div style="padding: 2rem">
                <Scene :size="size">
                    <Spinner :speed="speed">
                        <Spoke :size="size / 2" :count="count" />
                    </Spinner>
                </Scene>
            </div>

        </div>
    `
});