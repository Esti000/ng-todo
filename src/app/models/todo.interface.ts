export interface IToDo{
    id:number
    title: string,
    description:string,
    isComplited: boolean,
    isArchived:boolean,
    endDate:boolean|number |string;
    selected:boolean

}