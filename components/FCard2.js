export default {
  description: `
Shows a content card.

<f-card>Some content here</f-card>

<f-card
  title="Title"
  subtitle="Subtitle"
  height="calc(var(--base) * 20)"
  color="var(--white)"
  background="var(--red)"
>
  Some content here
</f-card>

<p />
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
      style="
        border-radius: var(--border-radius);
        height: 100%;
        cursor: pointer;
      "
      :style="{
        color,
        background,
      }"
    >
      <div :style="{
        borderTopLeftRadius: 'var(--border-radius)',
        borderTopRightRadius: 'var(--border-radius)',
        backgroundImage: 'url(' + (image ? image : 'https://www.ethanallen.com/dw/image/v2/AAKH_PRD/on/demandware.static/-/Sites-main/default/dwbc5ddfe6/images/large/56739_parade.jpg?sw=469&sh=469&sm=fit') + ')',
        backgroundSize: 'cover',
        height: '100px'
      }">
      </div>
      <div style="padding: var(--base2)">
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