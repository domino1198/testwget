import {Statistic} from "./statistics";

export class User{
    Name:string;
    LName:string;
    id:string;
    fullStatisitic:Statistic[] = [];

    constructor(Name:string,LName:string,id:string){
        this.Name = Name;
        this.LName = LName;
        this.id = id;
    }


    getId(): string {
        return this.id
    };

    addStatistic(componentId:string){
        let stat : Statistic = new Statistic(this.id,componentId,1);
        this.fullStatisitic.push(stat);
    };

    getFullStatistic():Statistic[]{
        return this.fullStatisitic
    }

    findStatisitic(componentId:string){
        let i:any;
        for(i in this.fullStatisitic){
            if(this.fullStatisitic[i].componentId == componentId)
                {
                    this.fullStatisitic[i].counter++;
                    return;
                }
        }
        this.addStatistic(componentId);
    }
        
}