bubbleSortFunc=function(array){
    console.log("\n-----Bubble Sort-----");
    console.log("Before Preprocess: "+array);
    array=array.filter(function(value){
        if(typeof(value)=='number'){
             return value;
        }
     });
     console.log("After Preprocess: "+array+"\n");
        for(var index1=0; index1<array.length-1; index1++){
           for(var index2=0; index2<array.length-index1-1; index2++){
               if(array[index2]>array[index2+1]){
                   let temp=array[index2];
                   array[index2]=array[index2+1];
                   array[index2+1]=temp;
               }
           }
           console.log(array.toString());
        }
        console.log("\nAfter Sorting: "+ array+"\n");
}

array=['jhgfd', '@@@', 'hgff', -12.34, 5, 6, -12.34, 'www', 5, 90]; //Replace the array
bubbleSortFunc(array);