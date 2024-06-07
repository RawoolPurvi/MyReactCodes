
import { useMemo, useState } from 'react';

export function calcSum(num1:any, num2:any) {
    console.log(`called calcSum with ${ num1} ${num2} `)
    return parseInt(num1) + parseInt(num2);
}

//export default function CalculatorUseMem({ num1, num2 }) {
    export default function CalculatorUseMem() {
 const [num1, setNum1] = useState(10);
 const [num2, setNum2] = useState(10);

  const result = useMemo ( () => calcSum(num1, num2),
    [num1, num2]
  );

  function updateState()
  {
    setNum1(num1 => num1 + 12);
    setNum2(num2 => num2 + 22);
  }

  return (
    <div >
    <button onClick= { () => alert(result) } > Find result</button>
    <button onClick= { updateState } > Update value </button>
      <p><b>here is your result: { result } </b></p>
    </div>
  );
}