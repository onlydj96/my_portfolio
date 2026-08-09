const STRIPS = 7;

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {Array.from({ length: STRIPS }).map((_, i) => (
        <div
          key={i}
          className="page-strip"
          style={{
            top: `${(i / STRIPS) * 100}%`,
            height: `${100 / STRIPS}%`,
            animationDelay: `${i * 0.055}s`,
          }}
          aria-hidden="true"
        />
      ))}
      <div className="page-enter">{children}</div>
    </>
  );
}
