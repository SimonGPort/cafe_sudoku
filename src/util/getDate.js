const getDate=()=>{
    const tempDate=new Date;
    const year=tempDate.getFullYear();
    let month=tempDate.getMonth();
    let day=tempDate.getDate();
    if(month<10){
        month='0'+month;
    }
    if(day<10){
        day='0'+day;
    }
    const date=year+'/'+month+'/'+day;
    return date;
};

export default getDate;