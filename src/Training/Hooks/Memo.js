import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [count, setCount] = useState(0);

  const countIncrement = (count) => {
    console.log("Count incremented:", count);
  };

  const memoizedCountIncrement = useMemo(() => countIncrement, []);
  console.log(memoizedCountIncrement);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default Memo;