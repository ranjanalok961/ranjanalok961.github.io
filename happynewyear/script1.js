function Submit(){
    var name=document.getElementById("input").value;
    document.getElementById("input").value="";
    document.getElementById("name").innerHTML=name;
    var ele=document.getElementById("notd");
    ele.classList.remove("notd");
    ele.classList.add("d");
}