// data/secondaryMenuItems.ts

export type TMenuItem = {
  title: string;
  route?: string;
  children?: TMenuItem[];
};

const secondaryMenuItems: TMenuItem[] = [
  {
    title: 'Pomoc',
    route: '/pomoc',
    children: [
      { title: 'Kontakt', route: '/pomoc/kontakt' },
      { title: 'FAQ', route: '/pomoc/faq' },
      { title: 'Reklamácie', route: '/pomoc/reklamacie' },
      { title: 'Doprava a platba', route: '/pomoc/doprava' },
      { title: 'Obchodné podmienky', route: '/pomoc/podmienky' },
    ],
  },
  {
    title: 'Výpredaj',
    route: '/vypredaj',
    children: [
      { title: 'Zľavnené produkty', route: '/vypredaj/produkty' },
      { title: 'Topánky', route: '/vypredaj/topanky' },
      { title: 'Bicykle', route: '/vypredaj/bicykle' },
      { title: 'Oblečenie', route: '/vypredaj/oblecenie' },
      { title: 'Doplnky', route: '/vypredaj/doplnky' },
    ],
  },
  {
    title: 'O nás',
    route: '/o-nas',
    children: [
      { title: 'Kto sme', route: '/o-nas/kto-sme' },
      { title: 'Tím', route: '/o-nas/tim' },
      { title: 'Naša vízia', route: '/o-nas/vizia' },
      { title: 'Spolupráca', route: '/o-nas/spolupraca' },
      { title: 'Kontakt', route: '/o-nas/kontakt' },
    ],
  },
  {
    title: 'Blog',
    route: '/blog',
    children: [
      { title: 'Novinky', route: '/blog/novinky' },
      { title: 'Tipy & triky', route: '/blog/tipy' },
      { title: 'Tréning', route: '/blog/trening' },
      { title: 'Výživa', route: '/blog/vyziva' },
      { title: 'Recenzie', route: '/blog/recenzie' },
    ],
  },
  {
    title: 'Zákaznícka zóna',
    route: '/zakaznici',
    children: [
      { title: 'Objednávky', route: '/zakaznici/objednavky' },
      { title: 'Účet', route: '/zakaznici/ucet' },
      { title: 'Wishlist', route: '/zakaznici/wishlist' },
      { title: 'Recenzie', route: '/zakaznici/recenzie' },
      { title: 'Odhlásiť sa', route: '/zakaznici/odhlasenie' },
    ],
  },
];

export default secondaryMenuItems;
