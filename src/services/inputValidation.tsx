const inputValidation=(input:string):boolean=>{
    const result=input.match(/^[1-9]$/);
    if(result || input==='')return true;
    else return false;
};
export default inputValidation;