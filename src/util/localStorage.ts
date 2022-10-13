export const loginTicket=(id:string)=>{
    localStorage.setItem('ticket', id);
};

export const logoutTicket=()=>{
    localStorage.removeItem('ticket');
};

export const getTicket=()=>{
    return localStorage.getItem('ticket');
};