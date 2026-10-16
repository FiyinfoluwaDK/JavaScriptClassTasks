const prompt = require('prompt-sync')();

let target = Number(prompt("Enter a target number: "));


for(let count = 1 ; count <= target ; count++){
    for(let counter = 1 ; counter <= target ; counter++){
       
            if(count % 2 == 0 && counter == 1){
                process.stdout.write(" #")}
            else if(counter % 2 != 0){
                process.stdout.write("#")}
            else{process.stdout.write(" ");}
        
    }
    console.log();
    }
