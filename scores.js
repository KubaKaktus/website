function setScores(){
    
    var people = fetch('./standings.json').then((response) => response.json()).then((json) => hell(json));

    function hell(jsonStr){
        console.log(jsonStr);
        console.log(people);
        for(let key in jsonStr) {
            const elementID = key;
            const element = document.getElementById(elementID);
            
            let val = jsonStr[key];
            element.innerHTML=val;  
            
        }
    }
   
}


