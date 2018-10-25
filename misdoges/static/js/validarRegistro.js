function validarFormulario()
 {
    var enviar = true;
 // Expresiones regulares
    var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
    var expRegEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var expRegRut = /^([0-9]\s*)*$/;	
    var expRegTelefono = /^([0-9]\s*)*$/;	
    var expRegUsuario = /^[a-zA-Záéíóúñ\s]+$/i; 
    var expRegContraseña =/^[a-zA-Z0-9]+$/;

// Id ->form
    var nombres = document.getElementById("nombres");
    var email = document.getElementById("correo");
    var rut = document.getElementById("rut");
    var telefono = document.getElementById("telefono");
    var usuarioNuevo = document.getElementById("usuarioNuevo");
    var contraNuevo = document.getElementById("contraseñaNuevo");
	//var confirmar = document.getElementById("contraseñaNuevo2");

    var formRegistro = document.getElementById("formRegistro");
    


    if(!nombres.value){
        alert("Escriba sus nombres por favor.");
        nombres.focus();
        verificar=false;
        return false;
        }
        else if(nombres.value.split(" ").length < 2){
        alert("Esciba sus nombres completos por favor.");
        nombres.focus();
        verificar=false;
        return false;
        }
        else if(!expRegNombres.exec(nombres.value)){
        alert("Este campo admite letras de la a-zA-Z, ÁáÉéÍíÓóÚúÜüÑñ y no admite espacios en blanco al final.");
        nombres.focus();
        verificar=false;
        return false;
        }
	//---------------------
        else if(!email.value){
        alert("Escriba su email por favor.");
        email.focus();
        verificar=false;
        return false;
        }
        else if(!expRegEmail.exec(email.value)){
        alert("Escriba un email valido por favor.");
        email.focus();
        verificar=false;
        return false;
        }
      //---------------------
      else if(!rut.value){
        alert("Escriba un RUT por favor.");
        rut.focus();
        verificar=false;
        return false;
        }
        else if(!expRegRut.exec(rut.value)){
        alert("el campo admite solo numero sin guion ni punto.");
        rut.focus();
        verificar=false;
        return false;
        }
      //-------------------
        else if(!telefono.value){
        alert("Escriba un n\u00famero de tel\u00E9fono por favor.");
        telefono.focus();
        verificar=false;
        return false;
        }
        else if(!expRegTelefono.exec(telefono.value)){
        alert("el campo tel\u00E9fono admite n\u00FAmeros y espacios en blanco.");
        telefono.focus();
        verificar=false;
        return false;
        }
	  //-------------------
    	else if(!usuarioNuevo.value){
			alert("Ingrese su nombre de usuario");
			usuarioNuevo.focus();
			verificar=false;
			return false;
		} else if(!expRegUsuario.exec(usuarioNuevo.value)){
        alert(" Este campo solo admite letras");
        usuarioNuevo.focus();
        verificar=false;
        return false;
		}
	//-------------------
   		else if(!contraNuevo.value){
			alert("Ingrese su contraseña de usuario");
			contraNuevo.focus();
			verificar=false;
			return false;
		} else if(!expRegContraseña.exec(contraNuevo.value)){
        alert(" Este campo solo admite letras y numeros");
        contraNuevo.focus();
        verificar=false;
        return false;
		}
	//-----------------
	//else if(!confirmar.value){
	//	alert("Confirme contraseña"):
	//	confirmar.focus();
	//	verificar=false;
	//	return false;
	//}
	//else if($("contraNuevo").val()!==$("confirmar").val()){
	//	alert("Las contraseñas no son iguales");
	//	confirmar.focus();
	//	verificar=false;
	//	return false;
	//	
	//}
    
    
    
}//fin


window.onload=function()
{
    var btnEnviar = document.getElementById("enviar");
    btnEnviar.onclick=validarFormulario;

}


  