

export const saveState = (state) => {
    try {
        const data = JSON.stringify(state);
        localStorage.setItem('state', data);
    }catch(err){
        
    }
    
}
export const getState = () => {
    try {
        const data = localStorage.getItem('state');
        const state = JSON.parse(data);
        if(state == null) {
            return undefined;
        }
        return state;
    }catch(err) {
        return undefined;
    }
}