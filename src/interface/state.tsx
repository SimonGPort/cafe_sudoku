export interface state {
  writting: string;
  game:[
    square,square,square,square,square,square,square,square,square,
    square,square,square,square,square,square,square,square,square,
    square,square,square,square,square,square,square,square,square,
    square,square,square,square,square,square,square,square,square,
    square,square,square,square,square,square,square,square,square,
    square,square,square,square,square,square,square,square,square,
    square,square,square,square,square,square,square,square,square,
    square,square,square,square,square,square,square,square,square,
    square,square,square,square,square,square,square,square,square,
  ],
}

export interface square{
  lock:string,zone:number, row:number,col:number,draft:[string,string,string,string,string,string,string,string,string],answer:string
}
