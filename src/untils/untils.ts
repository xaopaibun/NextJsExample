export const HandleNumTime = (num : number) : string => {
    let result = "";
    if (num > 0 && num < 10) {
        result = "0" + num.toString();
    }
    else {
        result = num.toString();
    }
    return result;
}

export const HandleTime = (epoch : any): string => {
    let d = new Date(parseInt(epoch));
    let doneTime = d.getFullYear() + "-" + HandleNumTime(d.getMonth() + 1) + "-" + HandleNumTime(d.getDate()) + " " + HandleNumTime(d.getHours()) + ":" + HandleNumTime(d.getMinutes());
    return doneTime;
}
