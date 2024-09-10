"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex">
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-2 rounded-md mr-3 border bg-green-500 text-white "
      >
        Increase
      </button>
      <h2 className="text-2xl">{count} </h2>
      <button
        onClick={() => setCount(count - 1)}
        className="px-3 py-2 rounded-md border bg-red-500 text-white ml-3"
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
