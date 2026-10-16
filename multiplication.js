const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number"));

let calculation = true;

while(calculation){

    if (Number.isNaN(number)){
        console.log("Please enter a valid number");
        let number = Number(prompt("Enter a number"));
            if(!Number.isNaN(number)){
        for(let count = 1 ; count <= 12; count++){
        
            let result = number * count;    
            
                console.log(number + "X" + count + "=" + result);
                
                    if (count == 12){
                        calculation = false;
    }}}}
    
    else if(!Number.isNaN(number)){
        for(let count = 1 ; count <= 12; count++){
        
            let result = number * count;    
            
                console.log(number + "X" + count + "=" + result);
                
                    if (count == 12){
                        calculation = false;
                }
        }
    }
}
