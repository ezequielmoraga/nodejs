



let v1='si usar';// preferible no usar, asi es global


if(true) //if1
{
   let  v1='soy una variable distinta a las otras';// esta es una nueva variable con el mismo nombre pero en otro scope
   console.log("scope en la estructura if 1"+v1)
   if (true)  //if2
   {
      let  v1='soy una variable';// esta es una nueva variable con el mismo nombre pero en otro scope
      console.log("scope en la estructura if 2 "+v1)
   }
   

}




console.log(v1)



