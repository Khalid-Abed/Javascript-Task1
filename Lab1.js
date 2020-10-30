function checkNumber(num){
    if(num % 3 === 0 && num % 5 ===0)
    {
        console.log('number is divided by 3 and 5 numbers')
    }
    else if(num % 3 === 0 && num % 5 !== 0){
        console.log('number is divided by 3 only')
    }
    else if(num % 3 !== 0 && num % 5 === 0){
        console.log('number is divided by 5 only')
    }
    else{
        console.log('number is not  divided by 5 or 3')
    }
}

///////////////// problem 2 ///////////////////
function randomNames(arrayOfNames){
    var names=['khaled','ahmed','mahmoued','mohammed'],results=[];
     results .push(names[Math.floor(Math.random() * names.length)],names[Math.floor(Math.random() * names.length)]);
     return results;
}


/////////////////// problem 2 ///////////////////////////////


function selectTwoRandom(arrayOfNames){
    var names=['khaled','ahmed','mahmoued','mohammed'],index=0,results=[];
    while(names.length>0)
    {
        index=Math.floor(Math.random() * names.length);
        results .push(names[index]);
        if(results.length === 2)
        break
    }
     return results;
}



////////////////////problem 3 ///////////////////

function returnindex(sentence,search){
 

    var index=0;
    var leters_index=[]
    index=sentence.indexOf(search,index)
   while(index !== -1)
   {
    leters_index.push(index);
    index++;
    index=sentence.indexOf(search,index)
   }
    return leters_index;

}




function transform(dolar)
{
    var dolar,numofdollar,other,quarter,rest,dime,niced,cent;
     dolar;//15.92
     numofdollar=Math.floor(dolar);//15
     other=dolar%numofdollar;//0.92
     quarter=Math.floor(other*100/25);//3quarter
     rest=other-quarter*0.25;//17cent
     dime=Math.floor(rest*100/10);// 17/10cent
     niced=Math.floor((100*rest%10)/5);
     cent=Math.ceil((100*rest%10)%5);
      return "you have "+ numofdollar+ "dollars "+ quarter+ " quarter "+ dime+" dime "+niced+" niced "+cent + " cent ";
}



//////////////////////////// bouns 1 /////////////////////////////
var y = 6,x = 6,str = "";
for(var i = 1; i < y; i++ ){
    for(var j = 1; j < x; j++){
        if(i + j >= y){
            str = str.concat("*");
        }else{
            str = str.concat(" ")
        }
    }
    str = str.concat("\n")
}
console.log(str)
/////////////////////////// bouns 1 /////////////////////
    var numberofrows=6,
    str="";

    for(var row=1; row<=numberofrows; row++)
    {
        for(var spaces=0;spaces<numberofrows-row;spaces++)
            {str=str.concat(" ");}
        for(var stars=0;stars<row;stars++)
            {str=str.concat("*");}

    str = str.concat("\n");
    }
    console.log(str);


//////////////////////////// bouns 2 /////////////////////////////////////
var answer=confirm('Do you fly ?');
if(answer ===true){
    var wild=confirm('are you wild ?');
        if(wild===true)
        {
            console.log('eagle');
        }else{
            console.log('parrot');
        }
}
else{
    var live_under_sea=confirm('do you live under sea ?');
        if(live_under_sea===true)
        {
            var wild=confirm('are you wild ?');
                if(wild===true)
                {
                    console.log('shark');
                }
                else
                {
                    console.log('dolphin');
                }

        }
        else
        {
            var wild=confirm('are you wild ?');
                if(wild===true)
                {
                    console.log('lion');
                }
                else
                {
                    console.log('cat');
                }
            
        }

}