import Car from "./Car";
import Apple from "./Apple";
import { type } from "@testing-library/user-event/dist/type";
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

  return(
    <>
        <h2>Hello test this My Garage component</h2>
        {/* <Car sendToBrand={setBrand} sendColor={setColor} /> */}
        <Car sendToBrand={carInfo} />
        <Apple sendToApple={appleInfo}/>
    </>
    
  )
}

export default Garage;