import { useState } from "react";
export function UpVoteButton() {
    const [upcount, setUpCount] = useState(0);
  
    function countUpVote() {
      setUpCount(upcount + 1);
    }
  
    return (
      <button onClick={countUpVote}>
        You got {upcount} upvotes
      </button>
    );
  }