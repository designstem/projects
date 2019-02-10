import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
	el: '#app',
	data: {
		color: '#673AB7',
		timer: ''
	},
	/*
	mounted () {
	axios
		//.get('http://www.ipb.pt/~acsantos/designstem/color.php')
		.get('color.php')
		.then(response => (this.color = response.data["color"]))
	},
	*/
	created: function() {

		this.fetchEventsList();
		this.timer = setInterval(this.fetchEventsList, 10000)

	},
	methods: {

		fetchEventsList: function() {
			//alert("ola");
			axios
				//.get('https://www.ipb.pt/~acsantos/designstem/color.php')
				.get('color.php')
				.then(response => (this.color = response.data["color"]))
		},
		//cancelAutoUpdate: function() { clearInterval(this.timer) }

	},
	beforeDestroy() {
	  clearInterval(this.timer)
	}

})
