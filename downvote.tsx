import { useState } from "react";
export function DownVoteButton() {
    const [downcount, setDownCount] = useState(0);
   
    function countUpVote() {
      setDownCount(downcount - 1);
    }
  
    return (
      <button onClick={countUpVote}>
        You got {downcount} down-votes
      </button>
    );
  }