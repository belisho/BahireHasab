// import {useState} from "react";

import { useState } from "react";

export default function Home(){
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');

    function userNameHandler(e){
        setUserName(e.target.value);
    }
    function passwordHandler(e){
        setPassword(e.target.value);
    }

    return(
        <div>
            <h1>ባህረ ሐሳብ</h1>
            {/* <ButtonComponent /> */}
                <label>
                    User Name: {' '}
                    <input value={userName} onChange={userNameHandler}/>
                </label><br></br>
                <label>
                    Password: {' '}
                    <input value={password} type="password" onChange={passwordHandler}/>
                </label>
                <p>
                    You are trying to log in with user name: {userName} and password: {password}
                </p>
        </div>
    );
}
function ButtonComponent(){
const [count, setCount] = useState(0);

    function eventHandler(){
        setCount(count + 1);
    }
return(
<div>
    <button onClick={eventHandler}>Click {count} times</button>
</div>
);
}