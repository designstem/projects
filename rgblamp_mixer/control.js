import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });

for (const name in components) {
  Vue.component(name, components[name]);
}

var vueApp = new Vue({
	el: '#app',
	data: {
		form: {
			RValue: '0',
			GValue: '0',
			BValue: '0',
			Voltage: '100',
			Power: '100',
			Brightness: '0',
			Intensity: '0',
		},
	},
	computed: {
	 isDisabled() {
	// evaluate whatever you need to determine disabled here...
	   return true;
	 },
	},
	
	methods:{
		addEvent ({ type, target }) {
			drawColor(this, type);
		},
	},

})

  
drawColor(vueApp);
function drawColor(app, type){
//		console.log(type);

		//	var color = rgbToHex(parseInt(app.form.RValue*(255.0/100.0)*app.form.Intensity/100.0), parseInt(app.form.GValue*(255.0/100.0)*app.form.Intensity/100.0), parseInt(app.form.BValue*(255/100)*app.form.Intensity/100));;
		var r = parseInt(app.form.RValue*(255.0/100.0)*app.form.Voltage/100);
		var g = parseInt(app.form.GValue*(255.0/100.0)*app.form.Voltage/100);
		var b = parseInt(app.form.BValue*(255.0/100.0)*app.form.Voltage/100);
		
		var bn = Math.sqrt((r* r* 0.241) + (g * g* 0.691) + (b * b * 0.068)) / 255;
		app.form.Intensity = (r+g+b)/(3*255)*100;
		app.form.Brightness = parseInt(bn*100);
		//console.log(r);
		app.form.Power = (Number(app.form.Voltage)*bn);
		
			var color = rgbToHex(r, g, b);
			//console.log(app.form.Voltage);
			//console.log(color);
			//color = increase_brightness(color, Number(app.form.Intensity));

			//	alert(c);
           var ctx = document.getElementById('color').getContext('2d');
            // Clear the canvas
            ctx.clearRect(0, 0, 300, 300);

			
			ctx.beginPath();
			ctx.rect(0, 0, 300, 300);
//			ctx.globalAlpha = 1.0*(app.form.Voltage/100)/(app.form.Resistence);
	ctx.globalAlpha  = 1.0;
			ctx.fillStyle = color
			ctx.fill();
			if(type=="change")
			{
				console.log(color);
//axios.post('http://www.ipb.pt/~acsantos/designstem/control.php',
				axios.post('control.php',
					{
					color: color,
					}
				).then(/*r => console.log('r: ', JSON.stringify(r, null, 2))*/);
			}
		
		}

		
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function increase_brightness(hex, percent){
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

/**
 * ('#000000', 50) --> #808080
 * ('#EEEEEE', 25) --> #F2F2F2
 * ('EEE     , 25) --> #F2F2F2
 **/
