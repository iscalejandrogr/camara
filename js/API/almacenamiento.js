//Almacenamiento
function crearUsuario(nombre,id){
	window.localStorage.setItem("nombre",nombre);
	window.localStorage.setItem("id",id);
}
function estaRegistrado(){
	var id = window.localStorage.getItem("id");
	if(id == undefined)
		return false;
	else
		return true;
}
//WEB SQL (SQLite)
function accesoBD(){
	var bd = window.openDatabase("hotel","1.0","Hotel Cenet", 200000);
	return bd;
}

function crearReservas(th,pr,ha,di){
	accesoBD().transaction(function(tx){
    	tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique,th,pr,ha,di)');
        tx.executeSql('INSERT INTO reservas (th,pr,ha,di) VALUES ("'+th+'","'+pr+'","'+ha+'","'+di+'")');
	},function(err){
    	alert("Error processing SQL: "+err.code);
	},function(){
    	navigator.notification.alert("Esperando a conexión para sincronizar",null,"Reserva Guardada","De acuerdo");
	});
}

function crearHistorial(th,pr,ha,di){
	accesoBD().transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id unique,th,pr,ha,di)');
        tx.executeSql('INSERT INTO historial (th,pr,ha,di) VALUES ("'+th+'","'+pr+'","'+ha+'","'+di+'")');
	},function(err){
		alert("Error processing SQL: "+err.code);
	},function(){
		navigator.notification.alert("Reserva Realizada y guardada en historial",null,"Reserva Creada","De acuerdo");
	});
}

function leerReservas(){
	accesoBD().transaction(function(tx){
		tx.executeSql('SELECT * FROM reservas',[],function(tx2,res){
				var largo = res.rows.length;
				for(i=0;i<largo;i++){
						var th = res.rows.item(i).th;
						var pr = res.rows.item(i).pr;
						var ha = res.rows.item(i).ha;
						var di = res.rows.item(i).di;
						
						enviarReservas(th,pr,ha,di);
				}
		},function(err){
			alert('No se leyó correctamente');
		});
	},function(err){
		alert("Error processing SQL: "+err.code);
	},function(){
		accesoBD().transaction(function(tx){
			tx.executeSql('DELETE FROM reservas');
		},function(err){
			alert('No se eliminaron los registros');
		},function(){
			x = null;
		});
	});
}

function leerHistorial(){
	accesoBD().transaction(function(tx){
		tx.executeSql('SELECT * FROM historial',[],function(tx2,res){
				var largo = res.rows.length;
				var tabla = '<table>';
				tabla += '<tr><th>Tipo hab</th><th>Personas</th><th>Habitaciones</th><th>Días</th></tr>';
				for(i=0;i<largo;i++){
						var th = res.rows.item(i).th;
						var pr = res.rows.item(i).pr;
						var ha = res.rows.item(i).ha;
						var di = res.rows.item(i).di;
						
						tabla += '<tr><td>'+th+'</td><td>'+per+'</td><td>'+ha+'</td><td>'+di+'</td></tr>';
				}
				
				tabla += '</table>';
		},function(err){
			alert('No se leyó correctamente');
		});
	},function(err){
		alert("Error processing SQL: "+err.code);
	},function(){
		x = null;
	});
}