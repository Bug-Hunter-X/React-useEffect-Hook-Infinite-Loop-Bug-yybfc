```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render
    console.log('Count:', count); // This will log 0, then 1, then 2, etc.
    return () => {
      // Cleanup function (optional)
      console.log('Cleanup function ran');
    };
  }, [count]); // Add count to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```