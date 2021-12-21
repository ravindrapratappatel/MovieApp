const initialState=0;
const set_movie_name=(state=initialState, action)=>{
    switch(action.type)
    {
        case "Movie_name" : return state=action.index;
        default : return state;
    }
}

export default set_movie_name;