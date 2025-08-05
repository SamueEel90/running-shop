const presentations = [
  {
    key: "beh",
    title: "Beh",
    subtitle: "Špičkové vybavenie pre každého bežca",
    description:
      "Objavte prémiovú bežeckú obuv, funkčné oblečenie a profesionálne doplnky pre začiatočníkov aj elitných atlétov. Vyberte si z najnovších technológií a trendov, ktoré vám pomôžu prekonať vaše limity a užiť si každý kilometer naplno. Naša ponuka zahŕňa špecializované modely pre rôzne typy behov, ergonomické doplnky pre maximálny komfort a inteligentné športové hodinky na sledovanie vášho výkonu. S nami získate istotu, že ste pripravení na každú výzvu, či už trénujete na maratón alebo si užívate rekreačný beh v prírode.",
  },
  {
    key: "cyklistika",
    title: "Cyklistika ",
    subtitle: "Všetko pre váš cyklistický výkon",
    description:
      "Preskúmajte špičkové bicykle, aerodynamické oblečenie, prilby a doplnky od popredných značiek. Pripravte sa na každú jazdu s profesionálnym vybavením, ktoré zvyšuje komfort, bezpečnosť a radosť z jazdy. V našom sortimente nájdete cestné aj horské bicykle, cyklistické tretry, výkonné svetlá a navigácie pre bezpečné objavovanie nových trás. S našimi produktmi dosiahnete lepšie výsledky a užijete si cyklistiku naplno, nech ste kdekoľvek.",
  },
  {
    key: "horske",
    title: "Horské bicykle",
    subtitle: "Dobrodružstvo v teréne",
    description:
      "Vyberte si z našej ponuky horských bicyklov navrhnutých pre náročné traily a terénne výzvy. Robustné rámy, kvalitné odpruženie a spoľahlivé komponenty vám umožnia zvládnuť každý kopec aj zjazd s istotou a pohodlím.",
  },
  {
    key: "cestne",
    title: "Cestné bicykle",
    subtitle: "Rýchlosť a efektivita na asfalte",
    description:
      "Objavte ľahké a aerodynamické cestné bicykle pre rýchlu jazdu na dlhé vzdialenosti. Ideálne pre športových nadšencov aj profesionálov, ktorí chcú dosiahnuť maximálny výkon na ceste.",
  },
  {
    key: "trail",
    title: "Trail topánky",
    subtitle: "Stabilita a ochrana v teréne",
    description:
      "Trailové bežecké topánky poskytujú výbornú trakciu, ochranu a stabilitu na nerovnom povrchu. Vhodné pre beh v prírode, lesoch a horských chodníkoch.",
  },
  {
    key: "cesta",
    title: "Cestné topánky",
    subtitle: "Komfort a výkon na asfalte",
    description:
      "Cestné bežecké topánky sú navrhnuté pre maximálny komfort a efektivitu na tvrdých povrchoch. Ideálne pre rýchle tréningy a preteky na ceste.",
  },
    {
      key: "bazar",
      title: "Bazar",
      subtitle: "Kvalitné produkty za výhodné ceny",
      description: "V našom bazáre nájdete široký výber použitých a zľavnených produktov, ktoré sú stále v skvelom stave. Ušetrite peniaze a nájdite kvalitné vybavenie pre vaše športové aktivity."
    }
];

const CategoryPresentation: React.FC<{ category: string }> = ({ category }) => {
  const normalized = category.trim().toLowerCase();
  const presentation =
    presentations.find((p) => p.key === normalized) || presentations[0];

  return (
    <section className="bg-white rounded-xl p-8 shadow-md mb-8">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">{presentation.title}</h2>
      <h3 className="text-xl font-semibold mb-4 text-gray-700">{presentation.subtitle}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{presentation.description}</p>
    </section>
  );
};

export default CategoryPresentation;
