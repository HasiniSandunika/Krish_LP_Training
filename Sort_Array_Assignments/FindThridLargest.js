class ThirdLargest{

    constructor(numberArray){
        this.numberArray=numberArray;
    }

    setNumberArray(numberArray){
        this.numberArray=numberArray;
    }

    getNumberArray(){
        return this.numberArray;
    }

    findThirdLargest(){
        let min;
        let max;
        let index;
        let array=this.resetArray();
        if(array.length!=0){
            min=Math.min.apply(Math, array);
            for (var i=0; i<2; i++){
                max=Math.max.apply(Math, array);
                index=array.indexOf(max);
                array[index]=min;
            }
            max=Math.max.apply(Math, array);
            return max;
        }
        else{
            return 'Cannot Fint the Third Max';
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
        return uniqueNumberArray;
    }

    print(){
        console.log("\nFinds Third Largest of the Array");
        console.log("Input Array: "+ this.numberArray);
        var output=this.findThirdLargest();
        if(typeof(output)=='string'){
            console.log(output+"\n");
        }
        if(typeof(output)=='number'){
            console.log("Third Largest Element: "+output+"\n");
        }       
    }

}

let newArray=['hgggg', '233aa', 44, 23.544, -233.4333, 20, -112.32, 44]; //Replace the array
let thirdLargest=new ThirdLargest(newArray);
thirdLargest.print();