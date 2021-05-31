class ClassFind{

    constructor(numberArray){
        this.numberArray=numberArray;
    }

    handler(){
        this.numberArray=this.resetArray();
        for(var index=0; index<this.numberArray.length;index++){
            if(index!=this.numberArray.length-1){
                this.findMissingNumbers(index);
            }
        }        
    }

    findMissingNumbers(index){
        let difference=this.numberArray[index+1]-this.numberArray[index];
        if(difference!=1){
            let temp=this.numberArray[index];
            console.log("\nBetween "+this.numberArray[index]+" and "+this.numberArray[index+1]+":");
            for(var i=0; i<difference-1;i++){
                temp=temp+1;
                console.log(temp+" is Missing");
            }  
        }       
    }

    resetArray(){      
        this.numberArray=this.numberArray.filter(function(value){
           if(typeof(value)=='number'){
                return value;
           }
        });
        let uniqueNumberArray = [];
        this.numberArray.forEach(function(value) {
            if (!uniqueNumberArray.includes(value)) {
                uniqueNumberArray.push(value);
            }
        });
        uniqueNumberArray.sort(function(value1, value2){
            return value1 - value2;
        });
        return uniqueNumberArray;
    }

}

let numberArray=[2, 3, -5, -3, 1, '@EEEEEEEE', ' ', 44, '5frr']; //Replace the array
let classFind=new ClassFind(numberArray);
classFind.handler();