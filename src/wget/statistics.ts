

export class Statistic{
    componentId: string;
    counter:number;
    idUser:string;

    constructor(idUser:string, componentId:string,counter:number){
        this.idUser=idUser;
        this.componentId=componentId;
        this.counter=counter;
    }
}