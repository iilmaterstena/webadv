

function search(){
    var input, filter, ul, li, a, i, txtvalu;
    input=document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myList");
    li=ul.getElementById("li");

    for(i=0; i<li.lemgth; i++){
       a = li[i];
       txtvalu = a.textContent || a.innerText;
       if(txtvalu.toUpperCase().indexOf(filter)>-1){
        li[i].style.display = "block";
       }else{
         li[i].style.display = "none";
       }
    }
}