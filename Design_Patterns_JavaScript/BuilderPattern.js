class AccountClass{
    constructor(accNo, holder, city, type, deposit){
        this.accNo = accNo;
        this.holder = holder;
        this.city = city;
        this.type = type;
        this.deposit=deposit;
    }
}

let accountClass1 = new AccountClass("001-234-332", "Hasini", "Colombo", undefined, undefined);
console.log(accountClass1);
let accountClass2 = new AccountClass("001-500-200", "Hasini", "Colombo", "Fixed-Deposit");
console.log(accountClass2);

//////////////////////////////////////////

class Account{
    constructor(accNo, holder, city){
        this.accNo = accNo;
        this.holder = holder;
        this.city = city;
    }
}

class AccountBuilder{
    constructor(accNo, holder, city){
        this.account=new Account(accNo, holder, city);
    }
    setType(type){
        this.account.type=type;
        return this;
    }
    setDeposit(deposit){
        this.account.deposit=deposit;
        return this;
    }
    build(){
        return this;
    }
}

let accountbuilder1=new AccountBuilder("001-400-165", "Hasini", "Colombo").
setType("Current").setDeposit(5000).build();
console.log(accountbuilder1);
let accountbuilder2=new AccountBuilder("001-400-900", "Hasini", "Colombo").
setType("Fixed-Deposit").setDeposit(7000).build();
console.log(accountbuilder2);

////////////////////////////////////

class Account1{
    constructor(accNo, holder, city, {type, deposit}={}){
        this.accNo = accNo;
        this.holder = holder;
        this.city = city;
        this.type = type;
        this.deposit= deposit;
    }
}

let account11=new Account1("001-400-165", "Hasini", "Colombo", {type: "Current", deposit: 5000});
console.log(account11);
let account12=new Account1("001-400-900", "Hasini", "Colombo", {type: "Fixed-Deposit", deposit: 7000});
console.log(account12);

////////////////////////////////////

