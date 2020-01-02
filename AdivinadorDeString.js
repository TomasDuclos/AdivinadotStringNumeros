function EncontrarNumeros()
{
  var CajaTexto=document.getElementById("TxtBox");
  var BotonAdivinar=document.getElementById("Btnadivinar");
  var Resultado=document.getElementById("respuesta");
  var Numero1="";
  var Numero2="";

  BotonAdivinar.onclick=function(e)
  {
    if(CajaTexto.value!="")
    {
      var StringDesordenado=CajaTexto.value;   
      var ObjectsNumeros=CrearObjetosNumeros();//ya tengo los objetos numeros creados
      var encontrados1=false;
      var encontrados2=false;
      var indice1=0;
      var indice2=0;
      do
      {          
        var retorno=VerificarExistencia(StringDesordenado,ObjectsNumeros[indice1].Numero);
        if (retorno[0]) 
        {
            encontrados1=retorno[0];           
            Numero1=ObjectsNumeros[indice1].Numero;
            ObjectsNumeros.splice(indice1,1)
            var stringSinNo1=retorno[1];
            while(encontrados2==false)
            {
                retorno=VerificarExistencia(stringSinNo1,ObjectsNumeros[indice2].Numero);
                if (retorno[0])
                {
                    Numero2=ObjectsNumeros[indice2].Numero;
                    encontrados2=true;
                }
                indice2++;
            }                    
        }
        indice1++;
      }while(encontrados1==false && encontrados2==false);      
    }
    var resultadostring=Numero1+"---"+Numero2;
    Resultado.innerText ="";
    Resultado.innerText =resultadostring;
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
