function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    let y = (new Date()).getYear();
    let year = t+y;
    let SInt = (p*r*t)/100;
    return <div>
        <span id="result-pr">If you deposit {p},</span><br>
        <span id="result-rate">at an interest rate of {r}.</span><br>
        <span id="result-amt">You will receive an amount of {SInt},</span><br>
        <span id="result-year">for the year {year},</span>
    </div>

}
        
