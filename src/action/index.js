
//create three action functions to update contact, sauce and toppings information. 
//these functions will later be dispatched in handlechanges. payloads are information we want to send

export default function updateContact(payload){
    return {
        type: "UPDATE_CONTACT", 
        payload
    };
}

export function updateSauce(payload){
    return {
        type: "UPDATE_SAUCE", 
        payload
    };
}

export function updateToppings(payload){
    return {
        type: "UPDATE_TOPPINGS", 
        payload
    };
}
