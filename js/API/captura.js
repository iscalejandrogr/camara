//Captura
function tomarFoto(){
	navigator.device.capture.captureImage(function(img){
		for(i=0;i<img.length;i++){
			ruta = img[i].fullPath;
		}
		$('#regFoto').attr('foto',ruta);
		$('#regImg').html('<img src="'+ruta+'" width="100%" />');
	},function(err){
		alert("Error: "+err.code);
	},{limit:2});
}