binarySearchFunc= function(array, searchValue){
    console.log("\n-----Binary Search-----");
    console.log("Before Preprocess: "+array);
    array=array.filter(function(value){
        if(typeof(value)=='number'){
             return value;
        }
     });
     array=array.sort(function(value1, value2) { 
        return value1-value2;
    });
    console.log("After Preprocess: "+array);
    binarySearch(array, searchValue, 0, array.length-1);
}

binarySearch= function(array, searchValue, start, end){
    if (start>end){
        console.log(searchValue+" is Cannot be Found within the Array\n");
        return false;
    }
    let mid=Math.floor((start+end)/2);
    if(array[mid]==searchValue){
        console.log("Indiex of the Search Value "+searchValue+": "+ mid+"\n");
        return true;
    }
    if(array[mid]>searchValue){
        return this.binarySearch(array, searchValue, start, mid-1);
    }
    if(array[mid]<searchValue){
        return this.binarySearch(array, searchValue, mid+1, end);
    }
}

array=['jhgfd', '@@@', 'hgff', -12.34, 5, 6, -12.34, 'www', 5, 90]; //Replace the array
binarySearchFunc(array, 90); // Replace the search value