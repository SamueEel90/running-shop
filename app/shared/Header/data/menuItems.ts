export type MenuItem = {
  title: string;
  route?: string;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    title: 'Cyklistika',
    route: '/cyklistika',
    children: [
      { title: 'Horské bicykle', route: '/cyklistika/horske' },
      { title: 'Cestné bicykle', route: '/cyklistika/cestne' },
    ]
  },
  {
    title: 'Oblečenie',
    route: '/oblecenie',
    children: [
      { title: 'Tričká', route: '/oblecenie/tricka' },
      { title: 'Bundy', route: '/oblecenie/bundy' },
    ]
  },
  {
    title: 'Beh',
    route: '/beh',
    children: [
      { title: 'Cestné', route: '/beh/cesta' },
      { title: 'Trailové', route: '/beh/trail' },
    ]
  },
  {
    title: 'Bazár',
    route: '/bazar'
  }
];

export default menuItems;