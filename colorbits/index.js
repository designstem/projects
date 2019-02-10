import { Vue, components } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });
const { FButtons } = components

new Vue({
  components: { FButtons: FButtons },
  el: "#app",
  data: () => ({
    channels: {
      r: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      g: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      b: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
		c: 0,
		colMap: [8,8,6,4]
  }),
  computed: {
    count() {
      return this.c + 1;
    },
    colorz() {
      return this.color(
        this.slicedChannels["r"],
        this.slicedChannels["g"],
        this.slicedChannels["b"]
      );
    },
    maxBinary() {
      return Math.pow(2, this.count) - 1;
    },
    slicedChannels() {
      return {
        r: this.channels.r.slice(0, this.count),
        g: this.channels.g.slice(0, this.count),
        b: this.channels.b.slice(0, this.count)
      };
    },
    colors() {
      return Combinatorics.baseN(["0", "1"], this.count * 3).toArray();
    },
    squares() {
      return this.colors
        .map(row => {
          return row
            .map(bit => {
              return bit == "1" ? "■" : "□";
            })
            .join("");
        })
        .join("\n");
    }
  },
  methods: {
    rowColor(row) {
      if (this.count > 1) {
        return this.color(
          _.chunk(row, this.count)[0],
          _.chunk(row, this.count)[1],
          _.chunk(row, this.count)[2]
        );
      }
      return this.color(...row.map(r => [r]));
    },
    rowColorz(row) {
      if (this.count > 1) {
        return [
          _.chunk(row, this.count)[0],
          _.chunk(row, this.count)[1],
          _.chunk(row, this.count)[2]
        ];
      }
      return row.map(r => [r]);
    },
    color(r, g, b) {
      return chroma
        .gl(
          this.binary(r) / this.maxBinary,
          this.binary(g) / this.maxBinary,
          this.binary(b) / this.maxBinary
        )
        .css();
    },
    binary(bitmap) {
      return parseInt(bitmap.join(""), 2);
    },
    onClick(channelKey, idx) {
      console.log(channelKey, idx);
      this.$set(
        this.channels[channelKey],
        idx,
        !!this.channels[channelKey][idx] ? 0 : 1
      );
    }
  },
  template: `
	<div>
  <header>
		<div>
		<a href="https://designstem.github.io/homepage">Home</a>
    → Bits and colors
</div>
  </header>
  <div style="border-bottom: 3px solid var(--primary);">

    <div style="display: flex;">

      <div style="padding: 2rem; border-right: 3px solid var(--primary);">

			<h3>Select the bit count</h3>

			<f-buttons :buttons="['1 × 3','2 × 3','3 × 3','4 × 3']" v-model="c" />
			</div>		
			<div style="padding: 2rem;">
          <h3>Click to toggle the bits</h3>
          <div class="Color">
            <div class="Row" v-for="(channel, channelKey) in slicedChannels">
              <div v-for="(bit, idx) in channel" class="Bit" :style="{ background: !!bit ? 'black' : '#ddd'}" @click="onClick(channelKey, idx)">
              </div>
            </div>
          </div>
          <div class="ColorSample" :style="{background: colorz, width: (count * 130) + 'px'}">{{ colorz }}</div>
        </div>
		</div>
	</div>
	<div style="padding: 2rem;">
    <div>

          <h3>{{colors.length}} possible colors</h3>
          <br>

          <div :style="{
                display: 'grid',
                gridTemplateColumns: 'repeat(' + colMap[c] + ', 1fr)'
						}">
            <div class="Row2" v-for="row in colors" :style="{width: (count * 50) + 'px'}">
              <div class="BitWrapper">
                <div v-for="bit in row" class="Bit2" :style="{ background: bit == '0' ? '#eee' : '#222'}"></div>
              </div>
              <div class="Bit3" :style="{ background: rowColor(row) }"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    `
});