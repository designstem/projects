export default {
  props: {
    spiral: {
      default: () => ("")
    }
    
  },
  data: () => ({
    size: 400,
    currentIndex: 0
  }),
  computed: {
    viewBox() {
      return `${-this.size/2} ${-this.size/2} ${this.size} ${this.size}`;
    }
  },
  
  template: `
    <div>
        <svg :width=size :height=size :view-box.camel="viewBox" 
            ref="scene"
            style=" border:1px solid black; user-select: none;"
        >
    
            <g>
                <path :d="spiral" fill="none" stroke="black" />
            </g> 
        </svg>
      
    </div>
  `
};