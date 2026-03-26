import { ArrowLeft } from "lucide-react";

const rows = [
  {
    id: "row1",
    images: [
      {
        src: "/assets/uploads/flex_1-019d276b-ee88-737c-9283-ef6764a663c0-4.png",
        alt: "Flex 1",
      },
      {
        src: "/assets/uploads/flex_1_mockup-019d276b-fcc6-702f-8132-ef3143c0b1ca-6.png",
        alt: "Flex 1 Mockup",
      },
    ],
  },
  {
    id: "row2",
    images: [
      {
        src: "/assets/uploads/flex_2-019d276b-e8e5-723d-af51-e892de6d18c1-3.png",
        alt: "Flex 2",
      },
      {
        src: "/assets/uploads/flex_2_mockup-019d276c-00ef-72bb-9b1e-b4f093f903c1-7.png",
        alt: "Flex 2 Mockup",
      },
    ],
  },
  {
    id: "row3",
    images: [
      {
        src: "/assets/uploads/flex_3-019d276c-087a-77a8-9fa1-e07169b61505-8.png",
        alt: "Flex 3",
      },
      {
        src: "/assets/uploads/flex_3_mockup-019d276c-0ba5-76ce-bcf9-918584502099-9.png",
        alt: "Flex 3 Mockup",
      },
    ],
  },
  {
    id: "row4",
    images: [
      {
        src: "/assets/uploads/flex_5-019d276b-d5c5-758d-a327-b4dc468dd606-1.png",
        alt: "Flex 5",
      },
      {
        src: "/assets/uploads/flex_5_mockup-019d276b-d970-77de-a3ec-0418a3a83933-2.png",
        alt: "Flex 5 Mockup",
      },
    ],
  },
];

const flex4 = {
  src: "/assets/uploads/flex_4-019d276b-f17b-726a-9c0b-c8a9e65c5c08-5.png",
  alt: "Flex 4",
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-12">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-semibold tracking-[0.15em] uppercase mb-12"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </button>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#F7B818] text-xs font-bold tracking-[0.25em] uppercase">
            Portfolio
          </span>
          <div className="flex-1 h-px bg-[#F7B818]/40" />
        </div>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-none tracking-tight text-white mb-1">
          Print Design
        </h1>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-none tracking-tight text-[#F7B818] mb-6">
          Brochures · Menu Cards · Hoardings
        </h2>
        <p className="text-sm text-white/40 tracking-wide max-w-lg">
          Showcasing print work including brochures, menu cards, and hoardings.
        </p>
      </div>
      <main className="max-w-7xl mx-auto px-6 md:px-10 pb-16 flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.id} className="flex gap-4">
            {row.images.map((image) => (
              <div
                key={image.src}
                className="flex-1 rounded-xl overflow-hidden border border-white/15 bg-[#111] transition-transform duration-300 ease-in-out hover:scale-[1.04]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>
        ))}
        <div className="w-full rounded-xl overflow-hidden border border-white/15 bg-[#111] transition-transform duration-300 ease-in-out hover:scale-[1.04]">
          <img
            src={flex4.src}
            alt={flex4.alt}
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
      </main>
      <footer className="border-t border-[#F7B818]/20 py-6 text-center">
        <p className="text-xs text-white/30 tracking-wider">
          &copy; {new Date().getFullYear()}. Built with &hearts; using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#F7B818]/80 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
