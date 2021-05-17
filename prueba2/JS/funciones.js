$(function()
{
    $("#formulario").validate({
        rules:{
            user:"required",
            pass2:"required",
        },
        messages:{
            user:{
                required:'Ingresa tu usuario',
            },
            pass2:{
                required:'Ingresa tu contraseña',
            }
        }
    });
}
    );



$(function() 
{
  $("#mi-formulario").validate({
       rules: {
              email: {
                  required: true,
                  email: true
              },
              password: "required",
              fono: "required",
              fecha: "required",
              password2: {
                  required: true,
                  equalTo: "#password",
              },
              terminos:"required",
              
          }, //rules
      messages: {
          nombre:{
              required:'Ingresa tu nombre',
          },
          user2:{
              required:'Ingresa tu nombre de usuario',
          },
          email: {
              required: 'Ingresa tu correo electrónico',
              email: 'Formato de correo no válido'
          },
          password: {
              required: 'Ingresa una contraseña',
              minlength: 'Caracteres insuficientes'
          },
          fono:{
              required: 'Ingrese un número de celular',
              minlength: 'Cantidad de digitos insuficiente'
          },
          fecha:{
              required: 'Seleccione una fecha válida',
              min: 'Fecha no corresponde'
          },
          password2: {
              required: 'Reingresa la contraseña',
              equalTo: 'Las contraseñas ingresadas no coinciden',
              minlength: 'Caracteres insuficientes'

          },
          terminos:{
              required:'debe aceptar los terminos y condiciones'
          }
      }//messages
  }); //$('#mi-formulario').validate
}); //function


function CambiarMayusculas()
{
    var a = document.getElementById("nombre");
    a.value = a.value.toUpperCase();
}
function CambiarMayusculas()
{
    var a = document.getElementById("email");
    a.value = a.value.toUpperCase();
}


function CambiaColor(a)
{
    a.style.background = "white";
}

function CambiaColorB(a)
{
    a.style.background = "red";
}


