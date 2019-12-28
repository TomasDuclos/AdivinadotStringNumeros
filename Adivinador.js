function EncontrarNumeros()
{
  debugger;
  var CajaTexto=document.getElementById("TxtBox");
  var BotonAdivinar=document.getElementById("Btnadivinar");
  var Resultado=document.getElementById("respuesta");

  BotonAdivinar.onclick=function(e)
  {
    if(CajaTexto!=null)
    {
      var Letras=[];
      var LargoTexto=CajaTexto.textContent.length;
      var ObjectsNumeros=CrearObjetosNumeros();//ya tengo los objetos numeros creados

    }

  }
  
}
function CrearObjetosNumeros()//retorna array de objetos
{
  
  let arrayObjetos=new Array(10);
  var ArrayNumeros=["zero","one","two","three","four","five","six","seven","eight","nine"];
  for (let index = 0; index < 10; index++) 
  {
     let Objnumero=new Object();
     Objnumero.Numero=ArrayNumeros[index];
     Objnumero.LetrasMatch=new Array(Objnumero.Numero.length);
     Objnumero.Match=false;
    
     arrayObjetos[index]=Objnumero;
  }
  return arrayObjetos;
}

