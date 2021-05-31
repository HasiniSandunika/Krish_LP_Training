class CountRepetition{

    charArray=[];

    handler(sentence){
        this.createCharArray(sentence);
        this.countLetters();
    }

    countLetters(){
        for(var index1 in this.charArray){
            let count=0;
            let character=this.charArray[index1][0];  
            if(this.charArray[index1][1]=='0'){
                for(var index2=index1; index2<this.charArray.length;index2++){
                    if(this.charArray[index2][0].toUpperCase()==character.toUpperCase()){
                        count=count+1;
                        this.charArray[index2][1]='1'; 
                    }                    
                } 
                this.print(count, character);
            }                          
        }
    }

    print(count, character){
        console.log("For "+ character+"---->"+" No. of Characters: "+count);
    }

    createCharArray(sentence){
        sentence=sentence.toString();
        this.charArray = new Array(sentence.length);          
        for (var index = 0; index < sentence.length; index++) {
            this.charArray[index]=new Array(2);
            this.charArray[index][0]=sentence.charAt(index);   
            this.charArray[index][1]='0';   
        }
    }

}
let sentence='@@@WWEEeeeeeaaAAA  ppoo   Ss22@@@@@@112  00'; //Replace the sentence
let countRepetition=new CountRepetition();
countRepetition.handler(sentence);