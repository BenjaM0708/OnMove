import { Button } from "flowbite-react";
import { useGetNearRide } from "../hooks/useGetNearRide";

export default function ButtonTest() {

  const { nearRides, nearRidesFunction } = useGetNearRide();

  return (
  <Button color='red' className="w-auto m-5" onClick={()=>{nearRidesFunction}}>Click me</Button>
  )
}
