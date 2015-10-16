	var app = {				
			time: function(){	
				alert('loop');
				document.getElementById("status").innerHTML = 'Load...';
				var link = localStorage.getItem("carro");
				var status = localStorage.getItem("dispositivo");
				
				if(status == 'desconectado'){
					alert('Dispositivo desconectado, tenta conexao!');
					bluetoothSerial.connect(link, app.conectado, app.desconectado);
				}else{
					alert('Dispositivo conectado, verifica conexao!');
					bluetoothSerial.isConnected(app.conectado, app.desconectado);	
					}
			},					
			conectado: function(){
				alert('conectado');
				document.getElementById("status").innerHTML = 'Dispositivo Conectado';
				localStorage.setItem("dispositivo", "conectado");
				setTimeout(app.time, 3000);
			},
			desconectado: function(){
				alert('desconectado');
				document.getElementById("status").innerHTML = "Dispositivo desconectado!";
				localStorage.setItem("dispositivo", "desconectado");
				setTimeout(app.time, 3000);
			},
	};			
	function list(){
					var lista = "";
					bluetoothSerial.list(function(devices) {
					devices.forEach(function(device) {
						var link = '';
							alert('dentro do device');
							link = '"'+device.id+'"';
							lista += "<a href='#' onclick='connect("+link+")'>"+device.name+"</a><br>";
							document.getElementById("dispositivos").innerHTML = lista;
					})
				});		
	};
	function connect(link){ 
		document.getElementById("dispositivos").innerHTML = "";
		document.getElementById("dispositivos").innerHTML = 'Dispositivo selecionado:'+link;
		localStorage.setItem("carro", link);	
		localStorage.setItem("dispositivo", "desconectado");
		setTimeout(app.time, 3000);			
	};	
	
	//https://github.com/bcsphere/framework/blob/master/org.bluetooth.service/serial_port.js
	//https://github.com/bcsphere/framework/blob/master/org.bluetooth.profile/serial_port.js
			