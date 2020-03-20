//Reducers specify how the application's state changes in response to actions sent

const initialState = {

    contact: {
        name: '',
        email: '',
        address: '',
        phone_number: ''
    },
    sauce: {
        sauce: '',
        crust: '',
     },

    toppingsList:{}
}

let ToppingsList = [];

function reducer(state = initialState, action) {  

    switch(action.type) {
        //Updates the user data to edit.data
        case 'UPDATE_CONTACT':
            return{
            ...state,
            contact: action.payload 
            }
         
        //updates the pizza sauce and crust data
        case 'UPDATE_SAUCE':
            return{
                ...state,
                sauce: action.payload 
                }
           
        //updates the toppings 
        case 'UPDATE_TOPPINGS':
            let toppings = action.payload 
            ToppingsList = []
            for (let [key,value] of Object.entries(toppings)){
                if (value === true){
                    ToppingsList.push(key)
                }
            }
            console.log(ToppingsList)
            return{
                ...state,
                toppingsList: ToppingsList
                }

        default:
            return state
    }
}

export default reducer;