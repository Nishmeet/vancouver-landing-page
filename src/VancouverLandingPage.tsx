import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { activeCityConfig } from "./cityConfig";
import logo from "./assets/Logo.png";

const VancouverLandingPage = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const config = activeCityConfig;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (id && entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(id));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setItemRef = (id: string) => (element: HTMLDivElement | null) => {
    if (element) {
      itemRefs.current.set(id, element);
    } else {
      itemRefs.current.delete(id);
    }
  };

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Header with Logo */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-warm-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <a href="https://www.airliners.ca" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Airliners.ca" className="h-10 w-auto md:h-12" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${config.heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-warm-cream" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-6 font-inter text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
            {config.headline}
          </h1>
          <p className="max-w-2xl text-lg font-medium text-white/95 md:text-xl lg:text-2xl">
            {config.subheadline}
          </p>
        </div>
      </section>

      {/* Micro-Itinerary Section */}
      <section className="mx-auto max-w-4xl px-6 py-32 md:px-12 lg:py-40">
        <div className="mb-24 text-center">
          <h2 className="mb-4 font-inter text-3xl font-bold tracking-tight text-soft-black md:text-4xl lg:text-5xl">
            The Micro-Itinerary
          </h2>
          <p className="mx-auto max-w-xl text-lg text-soft-black/70">
            Two days. Three moments. Zero tourist traps.
          </p>
        </div>

        <div className="space-y-32 md:space-y-40">
          {config.itinerary.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.has(item.id);

            return (
              <div
                key={item.id}
                ref={setItemRef(item.id)}
                data-id={item.id}
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="space-y-6">
                  {/* Time & Icon */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/10">
                      <Icon
                        className="h-5 w-5 text-terracotta"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-inter text-sm font-semibold uppercase tracking-widest text-terracotta">
                      {item.time}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="mb-2 font-inter text-4xl font-bold leading-tight tracking-tight text-soft-black md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="font-inter text-xl text-soft-black/60 md:text-2xl">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-2">
                    <MapPin
                      className="mt-1 h-5 w-5 flex-shrink-0 text-soft-black/40"
                      strokeWidth={1.5}
                    />
                    <span className="font-ibm text-lg text-soft-black/70">
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-ibm text-lg leading-relaxed text-soft-black/80 md:text-xl md:leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Divider (except for last item) */}
                {index < config.itinerary.length - 1 && (
                  <div className="mt-32 h-px w-full bg-gradient-to-r from-transparent via-soft-black/10 to-transparent md:mt-40" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Spacer for sticky bar */}
      <div className="h-32" />

      {/* Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-soft-black/10 bg-warm-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-12">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
            <span className="font-inter text-base font-semibold text-soft-black md:text-lg">
              {config.route.from} → {config.route.to}
            </span>
            <span className="hidden text-soft-black/30 md:inline">|</span>
            <span className="font-ibm text-sm text-soft-black/70 md:text-base">
              Non-stop flights available
            </span>
          </div>

          <a
            href="https://www.airliners.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 font-inter text-sm font-semibold text-white transition-all duration-200 hover:bg-terracotta/90 hover:shadow-lg hover:shadow-terracotta/25 md:px-8 md:py-3.5 md:text-base"
          >
            See Real-Time Availability
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VancouverLandingPage;
