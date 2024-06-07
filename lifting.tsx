import { useState } from "react";

export function GamesPoll() {
    const [likes, setLikes] = useState(0);     //useState is a hook....type of hook-state hook
  
    function updateResult() {
      setLikes(likes + 1);
    }
  
    return (
      <div>
        <h1>Games Poll Result - update together</h1>
        <Preference likes={likes} onClick={updateResult} />
        <Preference likes={likes} onClick={updateResult} />
      </div>
    );
  }

  
  
function Preference({ likes, onClick }:any) {
    return (
      <button onClick={onClick}>
        Liked {likes} times
      </button>
    );
  }