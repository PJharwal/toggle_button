import React, { useState } from 'react';

const ToggleSwitch = () => {

const [isDarkMode, setIsDarkMode] = useState(false);

const toggleMode = () => setIsDarkMode (!isDarkMode);

return(
  <div style= {{

    backgroundColor: isDarkMode ? '#333' : '#fff', 
    color: isDarkMode ? '#fff' : '#000', 
    padding: '20px', 
    textAlign: 'center' 


  }}>
    <h1>

      {isDarkMode ?  'Dark Mode' :  'Light Mode'}
    </h1>

  <button onClick={toggleMode}>
    
    Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
  </button>


  </div>


);


};

export default ToggleSwitch;