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
  solution:[
    string,string,string,string,string,string,string,string,string,
    string,string,string,string,string,string,string,string,string,
    string,string,string,string,string,string,string,string,string,
    string,string,string,string,string,string,string,string,string,
    string,string,string,string,string,string,string,string,string,
    string,string,string,string,string,string,string,string,string,
    string,string,string,string,string,string,string,string,string,
    string,string,string,string,string,string,string,string,string,
    string,string,string,string,string,string,string,string,string,
  ]
}

export interface square{
  idx:number, lock:string,zone:number, row:number,col:number,draft:[string,string,string,string,string,string,string,string,string],answer:string
}
