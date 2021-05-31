linearSearchFunc=function(inputdArray, searchValue){
    let array=[];
    let i=0;
    console.log("\n-----Linear Search-----");
    console.log("Input Array: "+ inputdArray);
        if(inputdArray.length!=0){
            for(var index=0; index<inputdArray.length; index++){
                if(inputdArray[index]==searchValue){
                    array[i]=index;
                    i++;
                }
            }
            if(array.length!=0){
                console.log("Indices of the Search Value "+searchValue+": "+ array+"\n");
            }
            else{
                console.log(searchValue+" is Cannot be Found within the Array\n");
            }
        }
        else{
            console.log(searchValue+" is Cannot be Found within the Array\n");
        }
}

array=['jhgfd', '@@@', 'hgff', -12.34, 5, 6, -12.34, 'www', 5, 90, 7888]; //Replace the array
linearSearchFunc(array, 90); //Replace the search value