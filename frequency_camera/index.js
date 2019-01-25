const Buttons = {
  props: ["buttons", "value"],
  template: `
    <div :style="{display: 'flex', marginLeft: '3px'}">
      <div
        v-for="(button,i) in buttons"
        :key="i"
        @click="$emit('input',i)"
        :style="{
          padding: '0.25rem 0.5rem',
          border: '3px solid var(--primary)',
          borderTopLeftRadius: i == 0 && 'var(--border-radius)',
          borderBottomLeftRadius: i == 0 && 'var(--border-radius)',
          borderTopRightRadius: i == buttons.length - 1 && 'var(--border-radius)',
          borderBottomRightRadius: i == buttons.length - 1 && 'var(--border-radius)',
          color: 'var(--primary)',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          marginLeft: '-3px',
          cursor: 'pointer',
          background: i === value ? 'var(--gray)' : ''
        }"
      >
        {{ button }}
      </div>
    </div>
  `
};

const Webcam = {
  props: ["fps", "device"],
  data: function () {
    return {
      framerate: this.fps,
      video: null,
      constraints: null
    }
  },
  methods: {
    initCam: function () {
      //*
      this.constraints = { audio: false, video: { deviceId: this.device, width: 1920, height: 1080, frameRate: this.fps } };
      this.video = document.querySelector('video');
      const vm = this;

      navigator.mediaDevices.getUserMedia(vm.constraints)
        .then(function (mediaStream) {
          vm.video.srcObject = mediaStream;
          vm.video.onloadedmetadata = function (e) {
            vm.video.play();
          };
        })
        .catch(function (err) { console.log(err.name + ": " + err.message); });
      //*/ 
    }
  },
  mounted() {
    this.initCam();

  },
  watch: {
    fps: function () {
      // this.constraints.video.frameRate = this.fps;
      // this.video.srcObject.getVideoTracks()[0].applyConstraints( this.constraints.video );
      this.initCam();
    },
    device: function () {
      this.initCam();
    }
  },
  template: `
    <div>
      <video></video>
    </div>
  `
};

new Vue({
  el: "#app",
  components: { Webcam, Buttons },
  data: () => ({
    fpsIndex: 5,
    fpsStops: [1, 7.5, 15, 30, 45, 60, 120],
    /*fps: 6, */ cams: null,
    device: undefined
  }),
  computed: {
    fps() {
      return this.fpsStops[this.fpsIndex];
    }
  },
  methods: {
    getWebcams: function() {
      return new Promise((resolve, reject) => {
        // Filter found devices to only keep "videoinput" devices
        navigator.mediaDevices.enumerateDevices().then(devices => {
          let filtered = devices.filter(device => {
            return device.kind === "videoinput";
          });

          resolve(filtered);
          this.cams = filtered;
        });
      });
    },
    swapCams: function(i) {
      this.device = this.cams[i].deviceId;
    }
  },
  mounted: function() {
    this.getWebcams();
  },
  template: `
    <div style="display: relative">
      <div class="header_inverse" style="position: absolute; top:0; right: 0; left: 0">
        <div>
        <a href="https://designstem.github.io/homepage">Home</a>
        →<a href="https://designstem.github.io/vinylfrequency">Frequency & Motion</a>
        → Camera
        </div>
      </div>
      
      <h1 v-if="!device" style="line-height: 1.1em; text-align: center; padding: 25vh 5rem 0 5rem; color: rgba(255,255,255,0.8)">Select a camera in lower right corner</h1>

      <Webcam v-if="device" :fps="fps" :device="device"></Webcam>
      <div class="toolbar" style="background: rgba(0,0,0,0.2)">
        <div style="color: rgba(255,255,255,0.5); margin-right: 1rem;">
          <h4>Select camera</h4>
          <div class="button_tertiary" style="--primary: var(--white); --white: rgba(0,0,0,0.8); margin-right: 0.5rem" v-for="(cam, index) in cams" @click="swapCams(index)">Camera {{ index + 1 }}</div>
        </div>
        <!--input type="number" size="3" v-if="device" v-model="fps" class="fps-input"  /-->
        <div v-if="device" style="color: rgba(255,255,255,0.5); margin-right: 1rem;">
          <h4>Frames per second / FPS</h4>
          <Buttons style="--primary: var(--white)" :buttons="fpsStops" v-model="fpsIndex" />
        </div>
      </div>
    </div>
  `
});