//conn
function estaConectado(){
	var conn = navigator.connection.type;
	if(conn != Connection.NONE)
		return true;
	else
		return false;
}