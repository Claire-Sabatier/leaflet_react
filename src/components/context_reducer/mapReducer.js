const mapReducer = (state, action) => {
    switch(action.type) {
        case '' : console.log(action)
            break

        default : return {...state} 
    }
}

export default mapReducer