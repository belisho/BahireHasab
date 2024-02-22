// import {useState} from "react";

import { useState } from "react";

export default function Home(){
    return(
        <div>
            <h1>ባህረ ሐሳብ</h1>
            <ButtonComponent />
            <ButtonComponent />
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