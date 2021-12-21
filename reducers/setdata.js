const initialState=[];
const set_movie_data=(state=initialState, action)=>{
    switch(action.type)
    {
        case "Movie_data" : return state=action.data;
        default : return state;
    }
}

export default set_movie_data;