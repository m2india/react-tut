import React from 'react';
import './Header.css'; // Import the CSS file for styling
import styles from './Header.module.css'; // Import the CSS module for styling

function Header() { 

    const myStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '5px',
    }
    return (
          <>
          <div className={styles.bigBlue}>
            <h1 >Hello Styling</h1>
            <p>Add a little style</p>
             </div>

             <div className={styles.bigBlue}>
            <h1 >Hello Styling 2</h1>
            <p>Add a little style 3</p>
             </div>
            
            {/* <p style={myStyle}>Add a paragrpha style </p> */}
        </>
    )
  
}

export default Header;