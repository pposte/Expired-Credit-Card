function validity(month, year){
    mon = document.forms["myForm"]["mname"].value;
    yr = document.forms["myForm"]["yname"].value;
    //alert(yr);

    if(mon>=3 && mon<=12 && yr>=2016)
        alert("valid");
    else if(mon>0 && mon<=12 && yr>=2017)
        alert("Your Credit Card id valid!!");
    else if(mon>12 || mon <=0 || isNaN(mon)|| isNaN(yr))
        alert("Please enter valid month between 00-12 or enter valid year.");
    else
        alert("Your Credit Card is expired!!");
}
