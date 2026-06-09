import Map from "../features/map/Map";

export default function MapPage() {
  return (
    <div className="flex flex-col items-center justity-center w-full min-h-screen bg-brand-light pt-24 px-40 pb-6">
      <div className="flex flex-col items-center justify-center w-full z-0 border-4 border-brand-navy">
        <Map />
      </div>
    </div>
  )
};