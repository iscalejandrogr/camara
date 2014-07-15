//eventos
$(function(){
	document.addEventListener("deviceready", function(){
		if(!estaRegistrado())
			//window.location.href="#registro";
		$('#regEnv').tap(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEma').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('foto');
			
			if(nom != '' && mail != '' && tel != '' ){
				$('.loader').show();
				$('.title div').text('enviando datos');
				$(this).hide();
				enviarDatos(nom,mail,tel,foto);
			}else{
				navigator.notification.alert('Todos los campos son requeridos',null,'Error','Aceptar');
			}
		});
		
		//Tomar Foto
		$('#regFoto').tap(function(){
			tomarFoto();
		});
		
		//Acciones de nueva reserva
		$('#nr1 ul:eq(0) li').tap(function(){
			if($(this).index()>0){
				$('#nr1 ul:eq(0) li').css('background','');
				$(this).css('background','yellow');
				$('#nr1').attr('th',$(this).index());
			}
		});
		$('#nrSig').tap(function(){
			if($('#nr1').attr('th') != undefined && $('#nr1').attr('th') != '')
				window.location.href = '#nr2';
		});
		$('#resEnv').tap(function(){
			var pr = $('#resPer').val();
			var ha = $('#resHab').val();
			var di = $('#resDia').val();
			var th = $('#nr1').attr('th');
			
			//Preguntamos si está conectado o no
			if(estaConectado())
				enviarReservas(th,pr,ha,di);//Sincronizamos datos con el servidor
			else
				crearReservas(th,pr,ha,di);//Guardamos datos localmente
		});
		document.addEventListener("online",leerReservas,false);
		$('#page ul[data-role=listview] li:eq(1)').tap(function(){
			//leerHistorial();
		});
	}, false);
});

/*(function jQuery(selector){
	...
	return obj;
})$;*/