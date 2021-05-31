class CheckAnagram{

    handler(firstWord, secondWord){
        if(firstWord.length==secondWord.length){
            let firstWordArray= firstWord.split("");
            let secondWordArray=secondWord.split("");
            firstWordArray.sort();
            secondWordArray.sort();
            this.checkWordsCharWise(firstWordArray, secondWordArray);
        }
        else{
            console.log("\n"+firstWord+" and "+secondWord+" are not Anagrams\n");
        }
    }

    checkWordsCharWise(firstWordArray, secondWordArray){
        let isEqual=false;
        for(var index=0;index<firstWordArray.length;index++){
            if(firstWordArray[index].toUpperCase()==secondWordArray[index].toUpperCase()){
                isEqual=true;
            }
            else{
                isEqual=false;
                break;
            }
        }
        if(isEqual==true){
            console.log("\n"+firstWordArray.toString()+" and "+
            secondWordArray.toString()+" are Anagrams\n");
        }
        else{
            console.log("\n"+firstWordArray.toString()+" and "+secondWordArray.toString()+
            " are not Anagrams\n");
        }
    }

}

let checkAnagram = new CheckAnagram();
checkAnagram.handler("ddtsc21", "c2dtsd1"); //Replace the 2 words
