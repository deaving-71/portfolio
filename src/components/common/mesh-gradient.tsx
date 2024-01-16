export function MeshGradient() {
  return (
    <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2">
      <div className="opacity-20">
        <div className="absolute -left-24 -z-10 size-[200px] rounded-full bg-gradient-to-br from-blue-400 to-purple-800 blur-[8rem] sm:size-[350px] lg:size-[500px] "></div>
        <div className="absolute -right-24 -z-10 size-[200px] rounded-full bg-gradient-to-tl from-blue-700 to-purple-400 blur-[8rem] sm:size-[350px] lg:size-[500px]"></div>
        <div className="absolute -right-48 top-9 -z-10 size-[200px] rounded-full bg-gradient-to-tl from-blue-600 to-purple-800 blur-[8rem] sm:size-[350px] lg:size-[500px]"></div>
      </div>
    </div>
  )
}
