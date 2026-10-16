const prompt = require('prompt-sync')();

let target = Number(prompt("Enter a target number: "));

for(let count = 1 ; count < target ; count++){
    
    for(let counter = 1 ; counter < target ; counter++){
    
        if((count + counter) == target){
            console.log(counter + "+" + count + "=" + target);
        }    
    
    }
    
}
    
    
                
