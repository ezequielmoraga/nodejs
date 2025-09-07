

//var se ve de todos lados en global

var v1='no usar';// preferible no usar, asi es global

if (true)
{
    var  v1='saelmi'; //se redeclara pisando la original aun en otro ambito/scope/bloque de codigo
}



console.log(v1)
