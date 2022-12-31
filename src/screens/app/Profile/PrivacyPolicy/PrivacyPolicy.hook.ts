import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();

    return{
        nav
    }
}
