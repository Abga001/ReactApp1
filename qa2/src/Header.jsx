import React from 'react';

const App = () => {
    const myItem = "Mama's Seasoning"
  
    return (
      <ul>
        <li>Sauce</li>
        <li> {myItem}</li>
        <li>{myItem.toUpperCase()}</li>
      </ul>
    )
  }

  export default App