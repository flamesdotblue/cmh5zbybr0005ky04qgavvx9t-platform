import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-neutral-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-4xl items-end justify-center px-4 pb-10 text-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">All my links in one place</h1>
          <p className="mt-2 text-sm text-white/70 sm:text-base">A clean, modern link hub with an interactive cover.</p>
        </div>
      </div>
    </section>
  );
}
