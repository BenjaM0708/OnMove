import Map from "../features/map/Map";

export default function MapPage() {
  return (
    <div className="flex flex-col items-center justity-center min-h-screen bg-brand-light mt-24 px-6">
      <div className="flex flex-col items-center justify-center">
        <Map />
      </div>
    </div>
  )
};