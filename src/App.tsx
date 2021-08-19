import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {decrement, increment} from "./store/counter";
import { Button, Icon } from 'semantic-ui-react'

function App() {
    const {count} = useSelector((state: any) => state.counter)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <Button animated="fade" onClick={() => dispatch(increment())}>
                <Button.Content visible>Increment</Button.Content>
                <Button.Content hidden>
                    <Icon name="add" />
                </Button.Content>
            </Button>
            <Button animated="fade" onClick={() => dispatch(decrement())}>
                <Button.Content visible>Decrement</Button.Content>
                <Button.Content hidden>
                    <Icon name="minus" />
                </Button.Content>
            </Button>
        </div>
    );
}

export default App;
