export class businessEvent{
    public name: string;
    public income: number;
    public timeSpent: number;
    public energyUsed: number;

    constructor(name: string, income: number, timeSpent: number, energyUsed: number){
        this.name=name;
        this.income=income;
        this.timeSpent=timeSpent;
        this.energyUsed=energyUsed;

    }

}