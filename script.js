let filtroInput = document.getElementById("filterInput");


filtroInput.addEventListener("keyup", filtrarNombres);


function filtrarNombres(){

   let valorFiltro = document.getElementById("filterInput").value.toUpperCase();

   //obtiene nombre del UL
   let ul = document.getElementById("names");
   // obtener LI del UL

   let li = ul.querySelectorAll("li.collection-item");

   // loop atraves de collection items LI´s
   for(let i = 0; i < li.length; i++){
       let a = li[i].getElementsByTagName("a")[0];
       
       // if matched
       if(a.innerHTML.toUpperCase().indexOf(valorFiltro) > -1){
        li[i].style.display = "";

       }else{
        li[i].style.display = "none";
       }
   }

}