import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { MyButton } from './MyButton.tsx'
// import { UpVoteButton } from './upvote.tsx'
// import { DownVoteButton } from './downvote.tsx'
// import { GamesPoll } from './lifting.tsx'
// import { TotalValue } from './totalValue.tsx'
// import { Product } from './Product.tsx'
// import { EmployeeLogin, GuestLogin, HomePanel } from './HomePanel.tsx'
// import { Holiday } from './Holiday.tsx'
// import { HelloWorldComponent } from './Prop.tsx'
// import { Greeting } from './Greetings.tsx'
// import { SplitPane } from './SplitPane.tsx'
// import FollowMe from './effectExample1.tsx'
import ChatApp from './chatRoom.tsx'
import CalculatorUseMem from './useMemoExample.tsx'
// import { TotalAmount } from './totalValue.tsx'
import FetchAge from './ReducerExample.tsx'
import CheckOnline from './customHooks.tsx'
import Counter from './useRefExample.tsx'
import BuggyCounter from './BuggyCounter.tsx'
import ErrorBoundary from './errorComponent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyButton></MyButton> */}
    {/* <UpVoteButton></UpVoteButton> */}
    {/* <UpVoteButton></UpVoteButton> */}
    {/* <DownVoteButton></DownVoteButton> */}
    {/* <GamesPoll></GamesPoll> */}
    {/* <TotalAmount></TotalAmount> */}
    {/* <TotalValue></TotalValue> */}
     {/* <Product></Product> */}
    {/* <HomePanel></HomePanel> */}
    {/* <FollowMe></FollowMe> */}
    <ChatApp></ChatApp>
    <CalculatorUseMem></CalculatorUseMem>
    <FetchAge></FetchAge>
    <Counter></Counter>
    <CheckOnline></CheckOnline>
    <ErrorBoundary><BuggyCounter></BuggyCounter></ErrorBoundary>
    {/* <Holiday name={123} holidaydate='June 05, 2024'></Holiday> */}
    {/* <HelloWorldComponent name={'Purvi'}></HelloWorldComponent> used for validation..if be give {123} it will not accept */}
    {/* <Greeting ></Greeting> */} 
    {/* <SplitPane left={<EmployeeLogin/>} right={<GuestLogin/>}></SplitPane> */}

  </React.StrictMode>,


)
