import Car from "./Car";
import Apple from "./Apple";

function Garage()
{

    // const setBrand = "Toyota";
    // const setColor = "red";

        let carInfo = {
        brand: 'Toyota',
        color: 'red'
    }

    const appleInfo = {
        color: 'red',
        size: 'medium',
        type: 'Fuji'
    };

    const carList = [
        { brand: 'Toyota', color: 'red' },
        { brand: 'Honda', color: 'blue' },
        { brand: 'Ford', color: 'black' }
    ];

    const numberList = [1, 2, 3, 4, 5];

    //  const appleInfo = {};

  return(
    <>
        <h2>Hello test this My Garage component</h2>
        {/* <Car sendToBrand={setBrand} sendColor={setColor} /> */}
        <Car sendToBrand={carInfo} />
        <Apple sendToApple={appleInfo}/>
        <ul>
          { 
            carList.map( (sendToBrand) => <li key={sendToBrand.brand}><Car sendToBrand={sendToBrand} /></li> ) 
          }
        </ul>
        <ul>
          {numberList.map((e,index) => <p key={index}>{e}</p> ) }
        </ul>
    </>
    
  )
}

export default Garage;