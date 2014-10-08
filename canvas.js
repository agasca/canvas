var dibujo, lienzo, t, b;
function inicio()
{
    t = document.getElementById("usuario");
    b = document.getElementById("dibujalo");

    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");

    dG(lienzo);

    //prueba trazo tipo marco
    lienzo.strokeStyle = "black"
    lienzo.moveTo(0,0);
    lienzo.lineTo(300,0);
    lienzo.lineTo(300,300);
    lienzo.lineTo(0,300);
    lienzo.lineTo(0,0);
    lienzo.stroke();
    //prueba trazo tipo linea
    lienzo.moveTo(100,100);
    lienzo.lineTo(200,100);
    lienzo.strokeStyle = "blue"
    lienzo.stroke();

    lienzo.beginPath(); //trazo nuevo con otro color
    lienzo.strokeStyle = "#F00"
    //lienzo.arc(150,150,100, 3.1415,false);
    //lienzo.arc(150,150,100, (3.1416 * 2),false);
    lienzo.arc(150,150,100, (Math.PI*2),false);
    lienzo.closePath();
    lienzo.stroke();

    b.addEventListener("click", dibujarGrilla);
/*
    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";
    lienzo.arc(150,150,100, (Math.PI * 2), false);
    lienzo.closePath();
    lienzo.stroke();
*/
}


function dibujarGrilla() 
{
    var pony = lienzo;
    var rayas = Number(t.value);
    
    var ancho = 300, alto = 300;
    var linea, punto;
    
    var anchoLinea = ancho / rayas;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;

    pony.strokeStyle = "#AAA";

    for(linea = 0; linea <= limiteX; linea++)
    {
        punto = (linea * anchoLinea) - 0.5;

        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(punto, 0.5);
        pony.lineTo(punto, ancho-0.5);
        pony.stroke();
        pony.closePath();
    }

    for(linea = 0; linea <= limiteY; linea++)
    {
        punto = (linea * anchoLinea) - 0.5;
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(0.5, punto);
        pony.lineTo(alto  - 0.5, punto);
        pony.stroke();
        pony.closePath();
    }
}



function dG(pony){
    var ancho = 300, alto = 300;
    var linea, punto;
    var renglon, columna, salto = 0, otroSalto = 0;
    var incremento = 0;                 //diagonal normal
    var anchoLinea = 30;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;

    //pony.rotate(45*Math.PI/180);
    //dibuja cuadros
    for(renglon = 0; renglon <=10; renglon++){
        for(columna = 0; columna <= 5; columna++){
            punto = columna * anchoLinea;
            pony.fillStyle = "#FFFF00";
            pony.fillRect(salto, otroSalto, 30, 30);
            //pony.fillRect(salto+30, 30, 30, 30);
            //pony.fillRect(salto, 60, 30, 30);
            salto += 60;
        }
        if(renglon % 2 == 0){
            salto = 30;    
        }else{
            salto = 0;
        }
        otroSalto += 30;
    }
    //dibuja lineas parte 1 de eje X
    for(linea = 0; linea <= limiteX; linea++){
        punto = linea * anchoLinea;      
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(punto, 0);
        //pony.lineTo(punto , 300);       //horizontales
        pony.lineTo(0 , incremento);    //diagonales
        incremento += 30;               //diagonales
        pony.stroke();
        pony.closePath();
    }
    //dibuja lineas parte 2 de eje X
    incremento = 300;                   //diagonal inversa
    for(linea = 0; linea <= limiteX; linea++){
        punto = linea * anchoLinea;      
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(punto, 0);
        //pony.lineTo(punto , 300);       //horizontales
        pony.lineTo(300, incremento);    //diagonales
        incremento -= 30;               //diagonales
        pony.stroke();
        pony.closePath();
    }
    //dibuja lineas parte 1 eje y
    incremento = 0;                           //diagonales    
    for(linea = 0; linea <= limiteY; linea++){
        punto = linea * anchoLinea;
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        //pony.moveTo(0, punto + (linea * 100));
        pony.moveTo(300, incremento);     //diagonales
        //pony.moveTo(0, punto);              //verticales
        //pony.lineTo(300, punto);            //verticales
        pony.lineTo(incremento,300);      //diagonales
        incremento += 30;                 //diagonales
        pony.stroke();
        pony.closePath();
    }
    //dibuja lineas parte 2 eje y
    incremento = 0;                           //diagonales
    for(linea = 0; linea <= limiteX; linea++){
        punto = linea * anchoLinea;      
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        //pony.moveTo(punto, 0);                  //verticales
        //pony.lineTo(punto , 300);               //verticales
        pony.moveTo(300 - incremento, 300);   //diagonales
        pony.lineTo(0, incremento);           //diagonales
        incremento += 30;                     //diagonales
        pony.stroke();
        pony.closePath();
    }
}