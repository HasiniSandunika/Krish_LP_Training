class MergeSortClass{

    constructor(numberArray){
        this.numberArray=numberArray;
    }

    mergeSort(){
        console.log("\n-----Merge Sort-----");
        console.log("Before Preprocess: "+this.numberArray);
        this.numberArray=this.numberArray.filter(function(value){
            if(typeof(value)=='number'){
                return value;
            }
        });
        console.log("After Preprocess: "+this.numberArray+"\n");
        let array =new Array(this.numberArray.length);
        this.recursiveMergeSort(array, 0, this.numberArray.length-1);
        console.log("\nAfter Sorting: "+ this.numberArray+"\n");
    }

    recursiveMergeSort(array, start, end){
        if(start==end){
            return;
        }
        else{
            let mid=Math.floor((start+end)/2);       
            this.recursiveMergeSort(array, start, mid);
            this.recursiveMergeSort(array, mid+1, end);
            this.merge(array, start, mid+1, end);
        }
    }

    merge(array, start, middle, end){ 
        let index=0;
        let lbound=start;
        let mid=middle-1;
        let len=end-lbound+1;
        while(start<=mid && middle<=end){
            if(this.numberArray[start]<this.numberArray[middle]){
                array[index++]=this.numberArray[start++]; 
            }
            else{
                array[index++]=this.numberArray[middle++];
            }
        }
        while(start<=mid){
            array[index++]=this.numberArray[start++];
        }
        while(middle<=end){
            array[index++]=this.numberArray[middle++];
        }
        for(var i=0; i<len; i++){
            this.numberArray[lbound+i]=array[i];
        }
        console.log(this.numberArray.toString());
    }
    
}

let array=['jhgfd', '@@@', 'hgff', -12.34, 5, 6, -12.34, 'www', 5, 90, -2]; //Replace the array
let mergeSortClass=new MergeSortClass(array);
mergeSortClass.mergeSort();