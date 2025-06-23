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

  return(
    <>
        <h2>Hello test this My Garage component</h2>
        {/* <Car sendToBrand={setBrand} sendColor={setColor} /> */}
        <Car sendToBrand={carInfo} />
        <Apple/>
    </>
    
  )
}

export default Garage;