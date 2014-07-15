//Dispositivo
function disp(){
	var arr = [];
	arr['modelo'] = device.model;
	arr['phonegap'] = device.cordova;
	arr['plataforma'] = device.platform;
	arr['id'] = device.uuid;
	arr['version'] = device.version;
	arr['nombre'] = device.name;
	
	return arr;
}