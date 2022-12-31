import React, {memo, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN_ROUTE } from '../route';
import { TabNavigator } from '../navigator/TabNavigator';
import {useDispatch, useSelector} from "react-redux";
import {getCountMessage, getMessage} from "../../redux/selector/messageSlector";
import {setCountMessage} from "@redux";

const MainStack = createStackNavigator();

const MainStackComponent = memo(() => {
    const dispatch = useDispatch();
    const listMessage=useSelector(getMessage)
    const count=useSelector(getCountMessage)
    useEffect(()=>{
            getData()
    },[])
    const getData=()=>{
        dispatch(setCountMessage(1))
    }
  return (
    <MainStack.Navigator
      initialRouteName={SCREEN_ROUTE.MAIN_STACK}
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name={SCREEN_ROUTE.MAIN_STACK}
        component={TabNavigator}
      />
    </MainStack.Navigator>
  );
});

export { MainStackComponent };
