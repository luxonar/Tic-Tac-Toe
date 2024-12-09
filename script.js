var symbols = [];
var player = "x";
var include;
var symbol;
var end = false;

const rows = [['x1','x2','x3'],
              ['x4','x5','x6'],
              ['x7','x8','x9'],
              ['x1','x4','x7'],
              ['x2','x5','x8'],
              ['x3','x6','x9'],
              ['x1','x5','x9'],
              ['x3','x5','x7'],
              ['o1','o2','o3'],
              ['o4','o5','o6'],
              ['o7','o8','o9'],
              ['o1','o4','o7'],
              ['o2','o5','o8'],
              ['o3','o6','o9'],
              ['o1','o5','o9'],
              ['o3','o5','o7']];

switch_players = function(){
    if (player === "o"){
        window.player = "x";
    }
    else {
        window.player = "o";
    }
}

check = function(){
    for (let i=0; i<16; i++){
        include = true;
        for (let y=0; y<3; y++){
            include = include && symbols.includes(rows[i][y]);
        }
        if (include){
            end = true;
            for (symbol of symbols){
                if (!rows[i].includes(symbol)){
                    document.getElementById(symbol).style.filter = "grayscale(100%)";
                }
            }
            if (player === "x"){
                document.body.innerHTML += "<div id='result'><div style='color:red'>Cross won!</div><button onclick='reset()'>New game</button></div>";
                break;
            }
            else {
                document.body.innerHTML += "<div id='result'><div style='color:blue'>Ring won!</div><button onclick='reset()'>New game</button></div>";
                break;
            }
        }
    }
    if (symbols.length == 9 && !end){
        for (symbol in symbols){
            document.getElementById(symbols[symbol]).style.filter = "grayscale(100%)";
        }
        document.body.innerHTML += "<div id='result'><div style='color:green'>Draw!</div><button onclick='reset()'>New game</button></div>";
    }
}

one = function(){
    if (document.getElementById("x1").style.display !== "block" && document.getElementById("o1").style.display !== "block" && !end){
        switch_players();
        document.getElementById(player+"1").style.display = "block";
        symbols.push(player+"1");
        check();
    }
}

two = function(){
    if (document.getElementById("x2").style.display !== "block" && document.getElementById("o2").style.display !== "block" && !end){
        switch_players();
        document.getElementById(player+"2").style.display = "block";
        symbols.push(player+"2");
        check();
    }
}

three = function(){
    if (document.getElementById("x3").style.display !== "block" && document.getElementById("o3").style.display !== "block" && !end){
        switch_players();
        document.getElementById(player+"3").style.display = "block";
        symbols.push(player+"3");
        check();
    }
}

four = function(){
    if (document.getElementById("x4").style.display !== "block" && document.getElementById("o4").style.display !== "block" && !end){
        switch_players();
        document.getElementById(player+"4").style.display = "block";
        symbols.push(player+"4");
        check();
    }
}

five = function(){
    if (document.getElementById("x5").style.display !== "block" && document.getElementById("o5").style.display !== "block" && !end){
        switch_players();
        document.getElementById(player+"5").style.display = "block";
        symbols.push(player+"5");
        check();
    }
}

six = function(){
    if (document.getElementById("x6").style.display !== "block" && document.getElementById("o6").style.display !== "block" && !end){
        switch_players();
        document.getElementById(player+"6").style.display = "block";
        symbols.push(player+"6");
        check();
    }
}

seven = function(){
    if (document.getElementById("x7").style.display !== "block" && document.getElementById("o7").style.display !== "block" && !end){
        switch_players();
        document.getElementById(player+"7").style.display = "block";
        symbols.push(player+"7");
        check();
    }
}

eight = function(){
    if (document.getElementById("x8").style.display !== "block" && document.getElementById("o8").style.display !== "block" && !end){
        switch_players();
        document.getElementById(player+"8").style.display = "block";
        symbols.push(player+"8");
        check();
    }
}

nine = function(){
    if (document.getElementById("x9").style.display !== "block" && document.getElementById("o9").style.display !== "block" && !end){
        switch_players();
        document.getElementById(player+"9").style.display = "block";
        symbols.push(player+"9");
        check();
    }
}

reset = function(){
    for (symbol of symbols){
        document.getElementById(symbol).style.display = "none";
        document.getElementById(symbol).style.filter = "grayscale(0%)";
    }
    document.getElementById("result").remove();
    window.symbols = [];
    player = "o";
    window.end = false;
}