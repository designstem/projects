export default{
  props: {
    bgColor: {
        type: String,
        required: false,
        default: 'rgb(200,200,200)'
    },
    headingColor: {
        type: String,
        required: false,
        default: 'rgb(60,60,60)'
    },
    textColor: {
        type: String,
        required: false,
        default: 'rgb(30,30,30)'
    },
    type: {
        type: String,
        required: false,
        default: '*'
    },
  },
  template: `
  <div>
    <div style="position: relative; padding: 6vmax 3vmax ; overflow:hidden; width:100%; height:100%; border:1px solid var(--gray)" :style="{
        background: bgColor
    }">

    <p style="position: absolute; top: 15px; left: 15px; font-size:1.5vh; text-transform: uppercase;  line-height:1;" :style="{color:textColor}">{{type}}</p>

    <h1 style="text-align:center; font-size:5vmax; transform:rotate(-5deg); line-height:73%; text-transform: uppercase;" :style="{
        color: headingColor
    }">Re&shy;mem&shy;ber!</h1>

    <p style="text-align:center; font-size: 1.75vmax; line-height:1.2" :style="{
        color: textColor
    }">Not all color combi&shy;nations work equally well for everyone!</p>
    </div>
  </div>
  `
};
