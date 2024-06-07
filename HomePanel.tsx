
//conditional rendering
const btnText = {
    text: 'Login 1'
  };
export function GuestLogin(){
    return<button> Guest {btnText.text} </button>
}

export function EmployeeLogin(){
    function emp1(){
        alert('Please provide valid employee credentials');
    }
    return <button onClick = {emp1}> Employee {btnText.text}</button>
}

export function HomePanel(){
    // let content ;
    let isLoggedIn = true;



    // THIS IS ONE METHOD TO WRITE THIS

    /*if(isLoggedIn){
        content = <EmployeeLogin></EmployeeLogin>;
    }else{
        content = <GuestLogin></GuestLogin>;
    }
    */



    //THIS IS SECOND METHOD TO WRITE THIS

    // content = (isLoggedIn ? (<EmployeeLogin/>) : (<GuestLogin/>));



    //fOR THE FIRST TWO METHOD WE WRTE THIS RETURN

    // return ( 
    //     <div>
    //         {content}
    //     </div>
    // );



    //THIS IS THE THIRD TYPE OF WAY TO WRITE IT

    // return (
    //     <div>
    //         {(isLoggedIn ? (<EmployeeLogin/>) : (<GuestLogin/>))}
    //     </div>
    // )



    //THIS IS THE FORTH TYPE

    return(
        <div>
            {(isLoggedIn && (<EmployeeLogin/>))}
        </div>
    )
    
}