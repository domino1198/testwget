import {User} from "./user";

export class SuperWidjet{

    user:User;
    allComponentId: string[] = [];
    constructor(user:User){
        this.user = user;

    }

    findComponentId(componentId:string){
        let i:any;
        for(i in this.allComponentId){
            if(this.allComponentId[i] === componentId)
                break;
        }
        this.addComponentId(componentId);
    }

    addComponentId(componentId:string){
        this.allComponentId.push(componentId);
    };

    track(componentId:string){
        this.findComponentId(componentId);
        this.user.findStatisitic(componentId);
    }

}