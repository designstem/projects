import { FRender } from "https://designstem.github.io/fachwerk/components.js";

export default {
  components: { FRender },
  props: ["content"],
  methods: { marked },
  computed: {
    processedContent() {
      return this.content.replace(/(<[^>]+>)/g, w =>
        w.replace(/(\n|[\n])/g, " ").replace(/\s+/g, " ")
      );
    }
  },
  template: `
  <div>
    <f-render :t="'<div>' + marked(processedContent, { breaks: true }) + '</div>'" />
  </div>
  `
};
