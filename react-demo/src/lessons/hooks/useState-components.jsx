import React from "react";

// step1️⃣ 从React中引入useState函数
import { useState } from 'react';

import SetTimeIntervalComponent from './setTimeInterval-component';

function UseStateCom() {
    // step2️⃣ 调用 useState 函数，并传入状态的初始值，
    const [num, setNum] = useState(0);
    // step3️⃣ 从useState函数的返回值中，拿到状态和修改状态的方法
    return (

        <>
            {/* step4️⃣ 在JSX中展示*/}
            <h2>{num}</h2>
            {/* step5️⃣ 调用修改状态的方法 */}
            <button onClick={() => { setNum(num + 1) }}>修改</button>
        </>
    )

}


class UseStateComponent extends React.Component {
    
    state = {
        flag: true,
        num:0
    }
    componentDidMount() { 

        setTimeout(() => this.setState({flag:false }),2000)

    }

    listen = (val) => { 
        console.log(val);
        this.setState({
            num:val
        })
    }

    render() {
        return (
            <div>
                <h1>UseState</h1>

                {/* <UseStateCom /> */}
                {/* <SetTimeIntervalComponent flag={this.state.flag} cb={ this.listen} /> */}
                { this.state.num}
            </div>
        );
    }

}

export default UseStateComponent;