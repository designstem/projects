
//var myGamePiece;
//var myObstacle;
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
		this.canvas.height = 270;
		
        this.context = this.canvas.getContext("2d");
        //document.body.insertBefore(this.canvas, document.body.childNodes[5]);
		div= document.getElementById("sea");
		this.canvas.style.zIndex= 8;
		this.canvas.style.position= "relative";
		div.appendChild(this.canvas);
		//this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


new Vue({
	el: '#example-3',
	data: {
	  picked: []
	}
  })
new Vue({
	el: '#example-4',
	data: {
	  liquid_picked: []
	}
  })

function startGame() {
	plastic_choice= document.getElementById("plastic").value;
	liquid_choice= document.getElementById("liquid").value;
	//alert(pet);
	/*pet= document.getElementById("pet").checked;
	ldpe= document.getElementById("ldpe").checked;
	pp= document.getElementById("pp").checked;*/
	a= 0;
	if(plastic_choice == "PET"){//(pet==true){
		//alert("PET");
		//a= 1;
		switch(liquid_choice){
			case "WATER":
			case "GLYCERIN":
			case "ALCOHOL":
			case "OIL":
				myGamePiece = new component(60, 60, "img/palla_pet.svg", 200, 20,"img");
				min= 200;
				break;							
		}	
		//myGamePiece = new component(60, 60, "img/palla_pet.svg", 200, 20,"img");
		//min= 200;
		document.getElementById("message").innerHTML= "Sinks in fresh water and salt water, alcohol, vegetable oil, glycerin";		
	}
	if(plastic_choice == "LDPE"){//(ldpe==true){
		//alert("LDPE");
		switch(liquid_choice){
			case "WATER":
			case "GLYCERIN":
			case "ALCOHOL":
				myGamePiece = new component(60, 60, "img/palla_ldpe.svg", 200, 20,"img");
				min= 110;
				break;
			case "OIL":
				myGamePiece = new component(60, 60, "img/palla_ldpe.svg", 200, 20,"img");
				min= 200;
				break;
		}		
		document.getElementById("message").innerHTML= "Floats in fresh water and salt water, glycerin, alcohol. Sinks in vegetable oil";		
	}
	if(plastic_choice == "PP"){//(pp==true){
		//alert("PP");
		switch(liquid_choice){
			case "WATER":
			case "GLYCERIN":
			case "ALCOHOL":
			case "OIL":
				myGamePiece = new component(60, 60, "img/palla_pp.svg", 200, 20,"img");
				min= 110;
				break;							
		}	
		//myGamePiece = new component(60, 60, "img/palla_pp.svg", 200, 20,"img");
		//min= 110;
		document.getElementById("message").innerHTML= "Floats in fresh water and salt water, alcohol, vegetable oil, glycerin";		
	}
	if(plastic_choice == "HDPE"){
		switch(liquid_choice){
			case "WATER":
			case "GLYCERIN":
				myGamePiece = new component(60, 60, "img/palla_hdpe.svg", 200, 20,"img");
				min= 110;
				break;
			case "OIL":
			case "ALCOHOL":
				myGamePiece = new component(60, 60, "img/palla_hdpe.svg", 200, 20,"img");
				min= 200;
				break;
		}	
		document.getElementById("message").innerHTML= "Floats in fresh water and salt water, glycerin. Sinks in alcohol and vegetable oil";		
	}
	if(plastic_choice == "PS"){
		switch(liquid_choice){
			case "GLYCERIN":
				myGamePiece = new component(60, 60, "img/palla_ps.svg", 200, 20,"img");
				min= 110;
				break;
			case "WATER":
			case "OIL":
			case "ALCOHOL":
				myGamePiece = new component(60, 60, "img/palla_ps.svg", 200, 20,"img");
				min= 200;
				break;
		}	
		//myGamePiece = new component(60, 60, "img/palla_ps.svg", 200, 20,"img");
		//min= 110;
		document.getElementById("message").innerHTML= "Floats in glycerin. Sinks in alcohol, water, vegetable oil";		
	}
	if(plastic_choice == "PVC"){
		switch(liquid_choice){
			case "GLYCERIN":
			case "WATER":
			case "OIL":
			case "ALCOHOL":
				myGamePiece = new component(60, 60, "img/palla_pvc.svg", 200, 20,"img");
				min= 200;
				break;
		}	
		//myGamePiece = new component(60, 60, "img/palla_pvc.svg", 200, 20,"img");
		//min= 200;
		document.getElementById("message").innerHTML= "Sinks in water, alcohol, vegetable oil, glycerin";		
	}
	myGamePiece.speedY= 0;
    //myGamePiece = new component(100, 100, "img/sottomarino.png", 200, 150,"img");
    //myObstacle  = new component(10, 200, "green", 300, 120);    
	mare= new component(480, 120, "lightblue", 0, 150);
	myGameArea.start();
	torna();
	

}

function component(width, height, color, x, y,type) {
	/******/
	if(type=="img"){
		this.image = new Image();
		this.image.src = color;
	}
	/*******/
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;   
	if(type=="img"){
	this.update = function() {
		ctx = myGameArea.context;
		ctx.drawImage(this.image, 
            this.x, 
            this.y,
            this.width, this.height);
		
	}
	}else{
		this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
		var grd=ctx.createLinearGradient(0,250,0,0);
		grd.addColorStop(0,"#25DBFF");
		grd.addColorStop(1,"white");

		ctx.fillStyle=grd;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
		
	}
   
    this.newPos = function() {
        this.x += this.speedX;
		this.y += this.speedY; 
		//alert(this.y);
		//if(a==1)
		//	alert(this.speedX + " "+ this.speedY);      
    }    
}

function updateGameArea() {
    myGameArea.clear();
    //myObstacle.update();
	mare.update();
    myGamePiece.newPos();    
    myGamePiece.update();
}

/*
function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}
*/
/***********************************GAUGE************************/
/*
	google.charts.load('current', {'packages':['gauge']});
	google.charts.setOnLoadCallback(drawChart);
	n_co2=0;
	n_press=1;
	n_o2=24;
      function drawChart() {
		data1 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Pressure', n_press]
        ]);
		data2 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['CO2', n_co2]
        ]);
		data3 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Oxygen', n_o2]
        ]);
        
        options1 = {
          width: 400, height: 120,
		  min:0.4,
		  max:1.6,
          minorTicks: 5
        };
		options2 = {
          width: 400, height: 120,
		  min:0,
		  max:3,
          redFrom:2, redTo:3,
          yellowFrom:1.5, yellowTo: 2.5,
		  greenFrom:0, greenTo: 1.5,
          minorTicks: 5
        };
		
		options3 = {
          width: 400, height: 120,
          redFrom: 0, redTo: 8,
          yellowFrom:8, yellowTo: 16,
		  greenFrom:16, greenTo: 24,
          minorTicks: 5,
		  min:0,
		  max:24
        };
		
		
        chart1 = new google.visualization.Gauge(document.getElementById('chart_div1'));
		chart2 = new google.visualization.Gauge(document.getElementById('chart_div2'));
        chart3 = new google.visualization.Gauge(document.getElementById('chart_div3'));
		chart1.draw(data1, options1);
		chart2.draw(data2, options2);
		chart3.draw(data3, options3);

	
	  }
*/
/*	  
function aumentaco2(){
	 if(n_co2<3){
		n_co2+=0.5;
		n_o2-=4;
		data2.setValue(0, 1, n_co2);
		chart2.draw(data2, options2);
		data3.setValue(0, 1, n_o2);
		chart3.draw(data3, options3);
	 }
	 if(n_co2>=2){
		 vai();
	 }
	 
}
*/
/*
function vai(){
	
		
		var min=50;
		
		var pos = myGamePiece.y;
		
		var id = setInterval(frame, 100);
		function frame() {
			
			if (myGamePiece.y <= min) {
				myGamePiece.speedY = 0; 
			  clearInterval(id);
			} else {	 
			  myGamePiece.speedY = -1; 
			   updateGameArea();
			}
		}
	
	
}*/

function torna(){			
	//var min=100;//200;				
	var pos = myGamePiece.y;	
	var id = setInterval(frame, 20);
	
	function frame() {			
		if (myGamePiece.y >= min) {
			myGamePiece.speedY= 0; 
			clearInterval(id);
		}
		else {	 
			myGamePiece.speedY = 1; 
			updateGameArea();
		}
	}		
}

/*
function decrementaco2(){
	 if(n_co2>0){
		n_co2-=0.5;
		n_o2+=4;
		data2.setValue(0, 1, n_co2);
		chart2.draw(data2, options2);
		data3.setValue(0, 1, n_o2);
		chart3.draw(data3, options3);
	 }
	 if(n_co2<=1.5){
		 torna();
	 }
	 
}*/


/*****************************************************************/