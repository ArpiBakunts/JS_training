class Account {
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        if (typeof value === "number") {
            this._balance = value;
        }
    }

    credit(amount) {
        if (typeof amount === "number") {
            return this._balance = this.balance + amount;
        }
    }

    debit(amount) {
        if (typeof amount === "number") {
            if (amount > this.balance) {
                return "Amount exceeds the balance";
            }

            return this._balance = this.balance - amount;
        }
    }

    transferTo(anotherAccount, amount) {
        if (anotherAccount instanceof Account && typeof amount === "number") {
            if (amount > this.balance) {
                return "Amount exceeds the balance";
            }

            anotherAccount._balance += amount;

            return this._balance = this.balance - amount;
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst instanceof Account && accountSecond instanceof Account) {
            for (let key in accountFirst) {
                if (accountFirst[key] !== accountSecond[key]) {
                    console.log("This accounts are not the same");
                    return false;
                }
            }

            console.log("The accounts are identical");
            return true;
        }

        console.log("Please enter correct instances");
        return false;
    }

    constructor(id, name, balance) {
        this._id = id;
        this.name = name;
        this.balance = balance;
    }
}

let accountOne = new Account("1234", "", 0);
accountOne.name = "First Account";
accountOne.balance = 10000;
console.log(accountOne.credit(9000));
console.log(accountOne.debit(2000));

console.log("************************");

console.log(accountOne.name);
console.log(accountOne.balance);
console.log(accountOne.id);

console.log("************************");

let accountTwo = new Account("1234", "Second Account",15000);

console.log(accountTwo.name);
console.log(accountTwo.balance);
console.log(accountTwo.id);

console.log("************************");

Account.identifyAccounts(accountOne, accountTwo);
accountOne.transferTo(accountTwo, 5000);
console.log(accountOne.balance);
console.log(accountTwo.balance);


