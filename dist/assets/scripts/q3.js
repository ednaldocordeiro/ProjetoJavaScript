function compara(e,n){return e-n}function signo(e){for(var n=0;n<numeros.length;n++)numeros[n]>=1&&numeros[n]<=12?e.innerHTML+=`${numeros[n]}, signo: ${signos[numeros[n]-1]}<img class="i" src="../assets/images/signos/${signos[numeros[n]-1]}.png" /><br>`:e.innerHTML+=`${numeros[n]}, signo: Dormir<img class="i" src="../assets/images/signos/Dormir.png" /><br>`}var numeros=[],signos=["Rato","Boi","Tigre","Coelho","Dragão","Serpente","Cavalo","Carneiro","Macaco","Cão","Galo","Porco"],counter=9;function output(){numeros.push(parseInt(document.getElementById("input").value)),document.getElementById("input").value="",counter-=1;let e=document.getElementById("counter");if(e.innerHTML=`Restam ${counter} números`,1==counter&&(e.innerHTML=`Resta ${counter} número`),counter<=0&&(e.innerHTML=""),9===numeros.length){document.getElementById("input").setAttribute("disabled",!0),document.getElementById("line").classList.remove("hide"),numeros.sort(compara),e.innerHTML="",document.getElementsByTagName("span")[0].innerHTML=`\nMenor número: ${numeros[0]}<br>\n\nNúmero do meio: ${numeros[4]}<br>\n\nMaior número: ${numeros[8]}\n`,document.getElementsByTagName("h5")[0].innerHTML="Signos para cada número";var n=document.getElementsByTagName("span")[1];n.innerHTML="",signo(n)}}