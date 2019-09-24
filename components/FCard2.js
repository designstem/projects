export default {
  description: `
  `,
  props: {
    title: { default: "", type: String },
    image: { default: "", type: String },
    subtitle: { default: "", type: String },
    background: { default: "var(--emphasis)", type: String },
    color: { default: "var(--primary)", type: String },
    border: { default: "transparent", type: String },
  },
  template: `
    <div
      class="FCard2"
      style="
        border-radius: calc(var(--border-radius) * 1.5);
        height: 100%;
        cursor: pointer;
        bbox-shadow: 0 0 5px var(--lightgray);
      "
      :style="{
        color,
        background,
        border: '2px solid ' + border
      }"
    >
      <div
        class="FCard2__image"
        :style="{
        borderTopLeftRadius: 'var(--border-radius)',
        borderTopRightRadius: 'var(--border-radius)',
        backgroundImage: image ? 'url(' + image + ')' : '',
        backgroundColor: !image ? '#eee' : '',
        backgroundSize: 'cover',
        height: image ? '180px' : 0,
      }">
      </div>
      <div style="padding: var(--base) var(--base2)">
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <h5
          style="margin: 0;"
          :style="{ color }"
          v-html="title"
        />
        <small
          v-if="subtitle"
          :style="{ color }"
        >{{ subtitle }}</small>
      </div>
      <slot />
      </div>
    </div>
    `
    
}