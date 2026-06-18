interface Point {
  lat: number;
  lng: number;
}

export function funcAngArrow(origin: Point, destination: Point): number {
  const dx = destination.lng - origin.lng
  const dy = destination.lat - origin.lat

  const angleRadians = Math.atan2(dy, dx)
  const angleFunction = angleRadians * (180 / Math.PI)

  const angleRotation = -(90 + angleFunction)

  return angleRotation
}