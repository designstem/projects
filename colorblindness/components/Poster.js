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
    <div style="padding: 3vw; min-height:60vh; overflow:hidden; width:100%;" :style="{
        background: bgColor
    }">

    <p style="font-size:1vw; text-transform: uppercase; margin:-2vw 0 4vh -2vw; line-height:1;" :style="{color:textColor}">{{type}}</p>

    <h1 style="text-align:center;font-size:6vw;transform:rotate(-5deg);line-height:73%; text-transform: uppercase;" :style="{
        color: headingColor
    }">Re&shy;mem&shy;ber!</h1>

    <p style="text-align:center" :style="{
        color: textColor
    }">Not all color combinations work equally well for all people!</p>

    </div>
  </div>
  `
};
