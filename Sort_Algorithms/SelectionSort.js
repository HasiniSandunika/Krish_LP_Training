selectionSortFunc=function(array){
        console.log("\n-----Selection Sort-----");
        console.log("Before Preprocess: "+array);
        array=array.filter(function(value){
            if(typeof(value)=='number'){
                 return value;
            }
         });
         console.log("After Preprocess: "+array+"\n");
        for(var index1=0; index1<array.length-1;index1++){
            let tempIndex=index1;
            for(var index2=index1+1; index2<array.length; index2++){
                if(array[tempIndex]>array[index2]){
                    tempIndex=index2;
                }
            }
            let temp=array[index1];
            array[index1]=array[tempIndex];
            array[tempIndex]=temp;
            console.log(array.toString());
        }
        console.log("\nAfter Sort: "+ array+"\n");
}

array=['jhgfd', '@@@', 'hgff', -12.34, 5, 6, -12.34, 'www', 5, 90]; //Replace the array
selectionSortFunc(array);