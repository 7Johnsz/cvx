export function AnimatedBackground() {
  return (
    <>
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-2xl animate-pulse" />
    </>
  );
}
