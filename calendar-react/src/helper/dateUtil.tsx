export function startOfMonth(date:Date){
    var year = date.getFullYear();
    var month = date.getMonth();
    return new Date(year,month,1);
}

export function endOfMonth(date:Date){
    var year = date.getFullYear();
    var month = date.getMonth();
    return new Date(year, month+1, 0);
}

export function differenceInDays(date1:Date, date2:Date){
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}


export function setDate(date:Date, index:number){
    return new Date(date.getFullYear(),date.getMonth(),index);
}

export interface dateDiff{
    years: number;
    months: number;
    days: number;
}

export function addToDate(date:Date, diffObj:dateDiff){
    return new Date(date.getFullYear()+diffObj.years,date.getMonth()+diffObj.months, date.getDate()+diffObj.days);
}