import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {getProfileUserFromStore, getTokenUserFromStore, logoutUser, setUserProfile} from "@redux";
import {getUserDetail} from "@services";
import {useEffect} from "react";
import {api} from "@api";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const token = useSelector(getTokenUserFromStore);
    const infoUser=useSelector(getProfileUserFromStore)
    const nav = useNavigation();
    console.log({infoUser})
    useEffect(()=>{
        getUserDetail((res)=>{
            dispatch(setUserProfile(res))
        }).then()
    },[])
    const logoutApp=()=>{
        api.setToken('').then()
        dispatch(logoutUser())
    }
    return{
        nav,
        token,
        infoUser,
        logoutApp
    }
}
