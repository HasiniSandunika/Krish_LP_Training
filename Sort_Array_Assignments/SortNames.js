class Name{

    constructor(name, value){
        this.name=name;
        this.value=value;
    }

    getName(){
        return this.name;
    }

    setValue(value){
        this.value=value;
    }

    getValue(){
        return this.value;
    }

}

class Handler{

    map=new Map();
    nameList=[];

    readTextFile() {
        let tempArray=[];
        var fs = require('fs');
        var text = fs.readFileSync('./names.txt','utf-8');      
        tempArray = text.split('\n');
        for(var index in tempArray){
            if(tempArray[index].charAt(tempArray[index].length-1)=='\r'){
                this.nameList[index]=new Name(tempArray[index].toString().slice(0, -1), 0);
            }
            else{
                this.nameList[index]=new Name(tempArray[index].toString(), 0);
            }
        }
    }

    setMap(){
        this.map.set(" ", 0);this.map.set("A", 1);this.map.set("B", 2);this.map.set("C", 3);
        this.map.set("D", 4);this.map.set("E", 5);this.map.set("F", 6);this.map.set("G", 7);
        this.map.set("H", 8);this.map.set("I", 9);this.map.set("J", 10);this.map.set("K", 11);
        this.map.set("L", 12);this.map.set("M", 13);this.map.set("N", 14);this.map.set("O", 15);
        this.map.set("P", 16);this.map.set("Q", 17);this.map.set("R", 18);this.map.set("S", 19);
        this.map.set("T", 20);this.map.set("U", 21);this.map.set("V", 22);this.map.set("W", 23);
        this.map.set("X", 24);this.map.set("Y", 25);this.map.set("Z", 26);
        this.map.set("0", 0);this.map.set("1", 0);this.map.set("2", 0);this.map.set("3", 0);
        this.map.set("4", 0);this.map.set("5", 0);this.map.set("6", 0);this.map.set("7", 0);
        this.map.set("8", 0);this.map.set("9", 0);       
    }

    setValues(){
        let value=0;
        for(var index in this.nameList){
            value=this.getCalculatedValue(this.nameList[index].getName().toUpperCase());
            this.nameList[index].setValue(value);
        }
        this.nameList =  this.nameList.filter(function(value) {
            return value.getValue()!=-1;
        });
        this.nameList.sort(function(value1, value2) { 
            return value1.getValue()-value2.getValue()  ||  value1.name.localeCompare(value2.name);
        });
        console.log(this.nameList);
    }
   
    getCalculatedValue(name){
        let charArray=Array.from(name);
        let temp=0;
        // use regex, if integers are not allowed: /^[a-zA-Z\s]*$/
        if(/^[A-Z0-9 ]*[A-Z0-9][A-Z0-9 ]*$/.test(name)){ 
            for(var index in charArray){
                temp=temp+this.map.get(charArray[index]);     
            }  
        }  
        else{
            temp=-1;
        } 
        return temp;  
    }

    manageHandler(){
        this.readTextFile();
        this.setMap();
        this.setValues();
        this.writeTextFile();
    }

    writeTextFile(){
        var fs = require('fs')
        var file=fs.createWriteStream('./names_orderd.txt');
        for(var index in this.nameList){
            file.write("Name: "+this.nameList[index].getName()+
            ", Value: "+this.nameList[index].getValue()+"\n");
        } 
    }

}

let handler=new Handler();
handler.manageHandler();