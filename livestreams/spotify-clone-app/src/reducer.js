export const initialState = {
        user: null, 
        playlists: [],
        playing: false,
        item: null,
        // REMOVE after finished developing...
        // token: 'BQCKInp0AATZHtnItHherFcCi6ir1FaiMZkXhnPv8OPiC2LOIttGoMwd6zsRG5IoHdpc5jFVBoaZY4N7z5TgBKZb55vm_FJ9VddvtAnV3G6g5MWnOUvEMYHqG7ljZX-51Bvge3vN6VnzyilXf8lp_IzinUIWd0O_R03r2_tbsY9HBVmw',
    };

    const reducer = (state, action) => {
        console.log(action);
    
        // Action -> type, [payload]
    
        switch(action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    user: action.user,
                };
    
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };

                case 'SET_PLAYLISTS': 
                    return {
                        ...state,
                        playlists: action.playlists,
                    };

                    case 'SET_DISCOVER_WEEKLY':
                    return {
                        ...state, 
                        discover_weekly: action.discover_weekly,
                    }
                default: 
                    return state;
        }
    };
    
    export default reducer;
    