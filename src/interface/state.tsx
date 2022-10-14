export interface state {
  numberError:Array<errorObj>,
  name:string,
  score:Array<Date>,
  gameOver:boolean;
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

interface errorObj{
  row:number,
  col:number
}
