import Map from "../features/map/Map";

export default function MapPage() {
  return (
    <div className="min-h-screen bg-brand-light pt-24 px-6">
      <div className="max-w-5xl mx-auto py-10">

        <div className="flex flex-col gap-2 mb-6">
          <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
          <h1 className="font-display text-4xl font-semibold text-brand-navy leading-tight">
            Map
          </h1>
          <p className="text-brand-dark/70 text-base">
            See available rides near you in real time.
          </p>
        </div>

        <div className="h-[500px] md:h-[700px] rounded-lg overflow-hidden border-2 border-brand-navy/30 shadow-sm">
          <Map />
        </div>

      </div>
    </div>
  )
}