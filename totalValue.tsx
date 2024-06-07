import { useState } from "react";

export function TotalValue() {
  const [likes, setLikes] = useState(0);

  function wallet() {
    setLikes(likes + 1);
  }

  const [likes1, setLikes1] = useState(0);

  function netbanking() {
    setLikes1(likes1 + 1);
  }
  return (
    <div>
      <h1>Total Value - wallet and netbanking</h1>
      <Preference likes={likes} onClick={wallet} />
      <Preference likes={likes1} onClick={netbanking} />
      <Total a={likes} b ={likes1} /> 
    </div>
  );
}



function Preference({ likes, onClick }: any) {
  return (
    <button onClick={onClick}>
      Liked {likes} times
    </button>
  );
}

const Total = ({a,b}:any)=>{
  return (
    <>
    The total amount is {a+b}
    </>
  )
}