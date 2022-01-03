function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    let y = (new Date()).getYear();
    let year = t+y;
    let SInt = (p*r*t)/100;
    document.getElementById("result").innerHTML = "If you deposit "+ {p} + "," + `<br/>` + "at an interest rate of " + {r} + "." + `<br/>` + "You will receive an amount of " + {SInt} + "," + `<br>` + "for the year " + {year};
}
        
