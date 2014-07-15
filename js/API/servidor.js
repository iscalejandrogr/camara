//servidor
function enviarDatos(nom,mail,tel,foto){
	$.ajax({
		type: "POST",
		url: "http://itslmoviles.260mb.net/procesar.php",
		data: "Nom="+nom+"&Mail="+mail+"&Telef="+tel,
	success: onSuccess
	}).done(function(msg){
		if(msg==1){
			$('.title div').text('Subiendo Foto');
			subirFoto(foto);	
		}else{
			navigator.notification.alert("Hubo un error en el registro",null,"Error","Aceptar");
		}
	});
	function onSuccess(data)
            {            
	    alert(data);
            }
}

function enviarReservas(th,pr,ha,di){
	alert(0);
	$.ajax({
		type: "POST",
		url: "http://itslmoviles.260mb.net/pgtest.php",
		data: "t="+th+"&p="+pr+"&h="+ha+"&d="+di
	}).done(function(msg) {
		if(msg==1){
			navigator.notification.alert("Datos Enviados Correctamente",function(){
				crearHistorial(th,pr,ha,di);
			},"Reserva Realizada","Aceptar");	
		}else{
			navigator.notification.alert("Hubo un error en el registro",null,"Error","Aceptar");
		}
	});
}