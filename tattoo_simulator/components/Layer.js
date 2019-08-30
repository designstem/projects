import HslaSlider from "./HslaSlider.js";

export default {
  props: ["index", "item", "imgs", "file"],
  components: { HslaSlider },
  data: () => ({}),
  computed: {},

  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();

      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.item.pic = e.target.result;
      };
      reader.readAsDataURL(file);
      image.onload = e => {
        vm.item.imgwidth = this.width;
        vm.item.imgheight = this.height;
      };
    }
  },
  template: `
        <div class="item ui-layer">
        <div class="flex v-center" style="margin-bottom: 10px">
                <strong>{{item.type}}</strong>
                <template v-if="item.type === 'text'">
                  <input type="text" style="min-width: 10rem" v-model="item.text">
                  <f-slider v-model="item.textSize" integer :value="24" :from=12 :to=72 title="text size: " />
                </template>
                <template v-if="item.type !== 'img'">
                <input type="color" value="gray" v-model="item.color">
                </template>
                <template v-if="item.type === 'img'" >
                <input style="width: 200px" type="file" @change="onFileChange">
                </template>
        </div>
        <div class="flex v-center">
                <div class="button_secondary fade" @click="item.fade = !item.fade">
                  <template v-if="item.fade">fade in</template>
                  <template v-else="item.fade">fade out</template>
                </div>
                <span>in</span>      
                <input type="number" v-model="item.time" style="max-width: 50px">  
                <span>seconds</span>
        </div>
        <div class="close" @click="imgs.splice(index, 1)">×</div>

        </div>
        `
};
