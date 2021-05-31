class QuickSortClass{

    constructor(numberArray){
        this.numberArray=numberArray;
    }

    quickSort(){
        console.log("\n-----Quick Sort-----");
        console.log("Before Preprocess: "+this.numberArray);
        this.numberArray=this.numberArray.filter(function(value){
            if(typeof(value)=='number'){
                return value;
            }
        });
        console.log("After Preprocess: "+this.numberArray+"\n");
        this.recursiveQuickSort(0, this.numberArray.length-1);
        console.log("\nAfter Sorting: "+ this.numberArray+"\n");
    }

    recursiveQuickSort(left, right){
        if(right<=left){
            return;
        }
        else{
            let pivot=this.numberArray[right];
            let partition=this.createPartition(left, right, pivot);
            this.recursiveQuickSort(left, partition-1);
            this.recursiveQuickSort(partition+1, right);
        }
    }

    createPartition(left, right, pivot){
        let lPointer=left-1;
        let rPointer=right;
        while(true){
            while(this.numberArray[++lPointer]<pivot);
            while(rPointer>0 && this.numberArray[--rPointer]>pivot);
            if(lPointer>=rPointer){
                break;
            }
            else{
                let temp1= this.numberArray[lPointer];
                this.numberArray[lPointer]=this.numberArray[rPointer];
                this.numberArray[rPointer]=temp1;
            }
        }
        let temp2= this.numberArray[lPointer];
        this.numberArray[lPointer]=this.numberArray[right];
        this.numberArray[right]=temp2;
        console.log(this.numberArray.toString());
        return lPointer;
    }
}

let array=['jhgfd', '@@@', 'hgff', -12.34, 5, 6, -12.34, 'www', 5, 90, -2]; //Replace the array
let quickSortClass=new QuickSortClass(array);
quickSortClass.quickSort();