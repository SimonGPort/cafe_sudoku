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
  ]
}

export interface square{
  row:number,col:number,draft:[string,string,string,string,string,string,string,string,string],answer:string
}
