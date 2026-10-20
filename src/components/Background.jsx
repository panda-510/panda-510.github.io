export default function Background() {
  return (
    <div className="background-layer" aria-hidden="true">
      {/* Subtle Vertical Column Guide Lines */}
      <div className="background-grid-guides" />

      {/* Floating 3D Glass Layer Accents behind Right Card */}
      <div className="hidden lg:block glass-3d-card-one" />
      <div className="hidden lg:block glass-3d-card-two" />
    </div>
  )
}
