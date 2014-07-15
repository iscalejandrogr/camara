//archivos
function subirFoto(foto){
		var options = new FileUploadOptions();
		options.fileKey="file";
		options.fileName="foto";
		options.mimeType="image/jpeg";

		var params = {};
		params.value1 = "test";
		params.value2 = "param";

		options.params = params;

		var ft = new FileTransfer();
		ft.upload(foto, "http://itslmoviles.260mb.net/pgtest.php", function(r){
			navigator.notification.confirm("Registro Satifactorio\nRespuesta: "+r.responseCode+'\nNombre del Dispositivo: '+disp()['modelo'],function(btn){
				switch(btn){
					case 1:
						navigator.notification.beep(2);
						break;
					case 2:
						navigator.notification.vibrate(500);
						break;
				}
				window.location.href="#page";
				crearUsuario(disp()['modelo'],disp()['id']);
			},'Gracias','Beep,Vibrar,Cancelar');
		}, function(err){
			alert('Error: '+err.code);
		}, options);
}

