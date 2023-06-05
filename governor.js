class Governor {
    constructor(name, yearElected, termNumber) {
        this.name = name;
        this.yearElected = yearElected;
        this.termNumber = termNumber;
    }
    vote(billNum, yay) {
        if (yay) {
            console.log(`${this.name} voted yes on bill number ${billNum}`);
        } else {
            console.log(`${this.name} voted no on bill number ${billNum}`);
        }
    }
}