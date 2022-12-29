    // clear
    function clearScreen() {
    document.getElementById("input").value = "";
    }
    
    // display
    function display(value) {
    document.getElementById("input").value += value;
    }
    
    // calculation
    function calculate() {
    var p = document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
    }
    
    // squre root of number
    function sroot(){
        var q = eval(document.getElementById("input").value);
        document.getElementById("input").value = Math.sqrt(q);
        ;
    }