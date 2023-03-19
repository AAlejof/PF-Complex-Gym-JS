import {GET_ALL_POSTS, GET_POST_BY_ID, SEARCH_POSTS, UPDATE_SEARCH, GET_CLIENT_DETAIL, POST_CLIENT, UPDATE_FILTERS, FILTER_POSTS} from "./action-types.js"
import axios from "axios"

export function getAllPosts(){
   return async function(dispatch){
    try{
        const response = await axios.get("/publications/all")
        return dispatch({
            type: GET_ALL_POSTS,
            payload: response.data
        })
    }
    catch(error){
        console.log(error);
    }
   }
}

export function searchPosts({tag, date}, title){
    return async function(dispatch){
        try{
            let response = []

            //*only search
            if(!date && !tag && search){   
                response = await axios.get(`/publications?title=${title}`)
                return dispatch({
                    type: SEARCH_POSTS,
                    payload: response.data
                })
            }

            //*tag
            if(!date && tag && !search){
                response = await axios(`/publications/filters?tag=${tag}`)
            }

            //*date
            if(date && !tag && !search){
                response = await axios(`/publications/filters?date=${date}`)
            }
            
            //*tag and search
            if(!date && tag  && search){
                response = await axios(`/publications/filters?tag=${tag}&title=${search}`)
            }

            //*date and search
            if(date && !tag && search){
                response = await axios(`/publications/filters?date=${date}&title=${search}`)
            }

            //*date and tag
            if(date && tag && !search){
                response = await axios(`/publications/filters?tag=${tag}&date=${date}`)
            }

            //*date, tag and search
            if(date && tag && search){
                response = await axios(`/publications/filters?tag=${tag}&date=${date}&title=${search}`)
            }

            //*no value
            if(!date && !tag && !search){   
                response = await axios.get(`/publications/all`)
                return dispatch({
                    type: FILTER_POSTS,
                    payload: response.data
                })
            }
            
            return dispatch({
                type: SEARCH_POSTS,
                payload: response.data.filteredPublication
            })
        }
        catch(error){
            console.log(error);
        }
    }
}

export function updateSearch(title){
    return {
        type: UPDATE_SEARCH,
        payload: title
    }
}

export const getClientDetail = (id) => async (dispatch) => {
	try {
		let json = await axios(`/clients/${id}`);

		return dispatch({
			type: GET_CLIENT_DETAIL,
			payload: json.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const postClient = (client) => async () => {
	try {
		const data = await axios.post('/clients', client);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export function filterPosts({tag, date}, search){
    return async function(dispatch){
        try{
            let response = []
            
            //*tag
            if(!date && tag && !search){
                response = await axios(`/publications/filters?tag=${tag}`)
            }

            //*date
            if(date && !tag && !search){
                response = await axios(`/publications/filters?date=${date}`)
            }

            //*tag
            if(!date && tag && !search){
                response = await axios(`/publications/filters?tag=${tag}`)
            }

            //*date and tag
            if(date && tag && !search){
                response = await axios(`/publications/filters?tag=${tag}&date=${date}`)
            }

            //*tag and search
            if(!date && tag  && search){
                response = await axios(`/publications/filters?tag=${tag}&title=${search}`)
            }
            //*date and search
            if(date && !tag && search){
                response = await axios(`/publications/filters?date=${date}&title=${search}`)
            }
            //*date, tag and search
            if(date && tag && search){
                response = await axios(`/publications/filters?tag=${tag}&date=${date}&title=${search}`)
            }

            if(!date && !tag && !search){   
                response = await axios.get(`/publications/all`)
                return dispatch({
                    type: FILTER_POSTS,
                    payload: response.data
                })
            }

            else{
                return dispatch({
                    type: FILTER_POSTS,
                    payload: response?.data?.filteredPublication
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
}

export const updateFilters = ({tag, date}) => async () => {
    return {
        type: UPDATE_FILTERS,
        payload: {tag, date}
    }
}