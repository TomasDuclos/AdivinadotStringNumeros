function EncontrarNumeros()
{
  var CajaTexto=document.getElementById("TxtBox");
  var BotonAdivinar=document.getElementById("Btnadivinar");
  var Resultado=document.getElementById("respuesta");
  
  
  //se van a retornar los numeros que se hayan encontrado
  BotonAdivinar.onclick=function(e)
  {
    var NumerosEncontrados=new Array;
    if(CajaTexto.value!="")
    {
      var StringDesordenado=CajaTexto.value;   
      var ObjectsNumeros=CrearObjetosNumeros();//ya tengo los objetos numeros creados
      for (let index = 0; index < ObjectsNumeros.length; index++) 
      {
        var retorno=VerificarExistencia(StringDesordenado,ObjectsNumeros[index].Numero);
        if (retorno[0]) 
        {   
            var numero=ObjectsNumeros[index].Numero;
            NumerosEncontrados.push(numero);                 
            StringDesordenado=retorno[1];       
        }      
      }    
    }
    Resultado.innerText ="";
    Resultado.innerText =NumerosEncontrados;
  }
  
}
function VerificarExistencia(StringDesordenado,Numero)//retorna array de objetos
{
    var Existe=true;
    let index = 0;
    var stringAux=StringDesordenado; 
    while (Existe) 
    {
        var indice=StringDesordenado.indexOf(Numero[index]);
        if (indice!=-1)
        {           
            var cadena1=StringDesordenado.substring(0,indice);
            var cadena2=StringDesordenado.substring(indice+1,StringDesordenado.length);
            StringDesordenado=cadena1+cadena2;
        }
        else if(stringAux.length-StringDesordenado.length!=Numero.length)
        {
            Existe=false;
            StringDesordenado=stringAux; 
        }
        else if(stringAux.length-StringDesordenado.length==Numero.length)
        {
            break;
        }
        index++;
    }
    var retorno=[Existe,StringDesordenado];
    return retorno;
}

function CrearObjetosNumeros()//retorna array de objetos
{
  
  let arrayObjetos=new Array(10);
  var ArrayNumeros=["zero","two","four","five","six","seven","eight","nine","three","one"];
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
