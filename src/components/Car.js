function Car(props)
{
    console.log("Car component props:", props);

    // const { sendToBrand } = props;
    // const { sendColor } = props;

    const {sendToBrand} = props;
    const { brand, color } = sendToBrand;
    const text = `Hi there, this is my ${brand} car! It is ${color} in color.`;
    
  return(
    <h2>{text}</h2>
  )
}

export default Car;