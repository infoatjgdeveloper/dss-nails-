type Item = [string, string];

const manicure: Item[] = [
  ["Regular Manicure", "$20"],
  ["French Manicure", "$30"],
  ["Paraffin Manicure", "$30"],
  ["Spa Manicure", "$40"],
  ["Powder Manicure SNS", "$65"],
  ["Color Change Manicure", "$10"],
];

const gelColor: Item[] = [
  ["Gel Manicure", "$40"],
  ["Gel Pedicure", "$45"],
  ["Gel French Extra", "$10"],
  ["Soak Off", "$15"],
  ["Gel Color Change", "$20"],
];

const pedicure: Item[] = [
  ["Regular Pedicure", "$30"],
  ["French Pedicure", "$40"],
  ["Callus Pedicure", "$40"],
  ["Paraffin Pedicure", "$40"],
  ["Color Change Pedicure", "$10"],
];

const artificial: Item[] = [
  ["One Nail Fix", "$5"],
  ["UV Gel Fill In", "$65"],
  ["Acrylic Fill In", "$65"],
  ["UV Gel Tips (New Set)", "$75"],
  ["Gel X", "$75"],
  ["Dip Powder Tips", "$75"],
  ["Acrylic (New Set)", "$75"],
  ["Russian Manicure", "$95"],
  ["Russian + Tips", "$110"],
];

const waxing: Item[] = [
  ["Chin", "$10"],
  ["Cheek", "$15"],
  ["Full Face", "$40"],
  ["Under Arms", "$15"],
  ["Half Arms", "$20"],
  ["Full Arms", "$40"],
  ["Belly Wax", "$20"],
  ["Full Leg", "$55"],
  ["Half Leg", "$28"],
  ["Back Wax", "$55"],
  ["Eye Brows", "$10"],
  ["Upper Lip", "$10"],
  ["Eye Lashes", "$80–$150"],
];

const relaxation: Item[] = [
  ["10 Min", "$12"],
  ["15 Min", "$18"],
  ["20 Min", "$24"],
  ["30 Min", "$35"],
];

type SpaPackage = {
  name: string;
  price: string;
  bullets: string[];
  addon?: string;
};

const spaPackages: SpaPackage[] = [
  {
    name: "Gold CBD Spa",
    price: "$120",
    bullets: [
      "Million Dollar feet",
      "Rich Scented Bath",
      "Makes your feet soft and smooth",
      "Hydration for dry skin",
      "Helps with aches and pains",
    ],
    addon: "Callus care & Paraffin & 30 mins soothing stone therapy",
  },
  {
    name: "Tropical CBD Volcano Spa",
    price: "$100",
    bullets: [
      "Get the summer on your feet",
      "Provides relaxation with a bath of scented tropical",
      "Tropical and smooth skin",
    ],
    addon: "Callus care & Paraffin & 20 mins muscle relaxation with stones",
  },
  {
    name: "Honey Pearl CBD Volcano Spa",
    price: "$80",
    bullets: [
      "Luxury Pearl feet",
      "Sweet scent that restores skin's natural beauty",
      "Nature's energy booster",
      "Honey contains natural anti-inflammatory compounds",
      "Helps repairing and nourishing the skin",
    ],
    addon: "Callus care & Paraffin & 15 mins revitalizing touch",
  },
  {
    name: "Lavender CBD Volcano Spa",
    price: "$80",
    bullets: [
      "Stress reliever pedicure",
      "Relax with classic floral scent",
      "Relieves emotional stress",
      "Lavender fragrance reduces anxiety",
    ],
    addon: "Callus Care Paraffin & 15 mins relaxing ritual",
  },
  {
    name: "Collagen Spa",
    price: "$75",
    bullets: [
      "Detoxifies and softens skin",
      "Helps to maintain skin's youthful beauty",
      "Refreshes and relaxes muscles",
    ],
    addon: "Callus care & 15 mins restorative treatment",
  },
  {
    name: "Green Tea and Aloe Vera Spa",
    price: "$75",
    bullets: [
      "Promotes detoxification",
      "Provides moisture-rich protection",
      "Chill out with green tea and aloe fragrance",
    ],
    addon: "Callus care & 15 mins rejuvenation therapy",
  },
  {
    name: "Vitamin Spa",
    price: "$65",
    bullets: [
      "Detoxifies and Soothes Skin",
      "Helps to Maintain Skin's Youthful Beauty",
      "Refreshes and Relaxes Muscles",
    ],
    addon: "Callus Care & 10 mins refreshing knead",
  },
  {
    name: "Lemon Spa",
    price: "$65",
    bullets: [
      "Fresh lemon helps to tone the skin",
      "Exfoliate dead skin cells",
    ],
    addon: "Callus Care & 10 mins gentle tension relief",
  },
];

function PriceList({ title, items }: { title: string; items: Item[] }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.3em] text-primary mb-6 font-sans">
        {title}
      </h3>
      <ul className="divide-y divide-border/60">
        {items.map(([name, price]) => (
          <li
            key={name}
            className="flex items-baseline justify-between gap-4 py-4 group"
          >
            <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
              {name}
            </span>
            <span className="flex-1 border-b border-dotted border-border/70 mx-2 mb-1.5" />
            <span className="text-sm tracking-wider text-muted-foreground tabular-nums">
              {price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SpaCard({ pkg }: { pkg: SpaPackage }) {
  return (
    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-sm p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-baseline justify-between gap-4 mb-5">
        <h4 className="font-serif text-2xl md:text-3xl text-foreground">
          {pkg.name}
        </h4>
        <span className="font-serif text-xl text-primary tabular-nums whitespace-nowrap">
          {pkg.price}
        </span>
      </div>
      <ul className="space-y-2 mb-4">
        {pkg.bullets.map((b) => (
          <li
            key={b}
            className="text-sm text-muted-foreground leading-relaxed before:content-['✦'] before:text-primary before:mr-2"
          >
            {b}
          </li>
        ))}
      </ul>
      {pkg.addon && (
        <p className="text-xs italic text-foreground/70 pt-3 border-t border-border/50">
          + {pkg.addon}
        </p>
      )}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 px-6 lg:px-10 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Menu
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
            Our <em className="text-primary">Services</em>
          </h2>
          <p className="mt-6 text-sm uppercase tracking-[0.4em] text-muted-foreground">
            Price List · Tax not included
          </p>
        </div>

        {/* Three-column price list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-12">
            <PriceList title="Manicure" items={manicure} />
            <PriceList title="Gel Color" items={gelColor} />
          </div>
          <div className="space-y-12">
            <PriceList title="Pedicure" items={pedicure} />
            <PriceList title="Artificial Nails" items={artificial} />
          </div>
          <div className="space-y-12">
            <PriceList title="Waxing" items={waxing} />
            <PriceList title="Relaxation Therapy" items={relaxation} />
          </div>
        </div>

        {/* Spa packages */}
        <div className="mt-24 lg:mt-32">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Signature Packages
            </p>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground">
              Spa <em className="text-primary">Experiences</em>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {spaPackages.map((pkg) => (
              <SpaCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>

        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mt-16">
          Prices may vary based on length & design · Cash and card accepted
        </p>
      </div>
    </section>
  );
}
