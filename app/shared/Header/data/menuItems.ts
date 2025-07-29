import { title } from "process";

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
      { title: 'Gravel bicykle', route: '/cyklistika/gravel' },
      { title: 'Detské bicykle', route: '/cyklistika/detske' },
      { title: 'Elektrobicykle', route: '/cyklistika/elektro' },
      { title: 'Cyklistické doplnky', route: '/cyklistika/doplnky' }
      
    ]
  }, 
   {
    title: 'Beh',
    route: '/beh',
    children: [
      { title: 'Cestné topánky', route: '/beh/cesta' },
      { title: 'Trailové topánky', route: '/beh/trail' },
      { title: 'Detské topánky', route: '/beh/detske' },
      { title: 'Bežecké doplnky', route: '/beh/doplnky' }
    ]
  },
  {
    title: 'Oblečenie',
    route: '/oblecenie',
    children: [
      { title: 'Bežecké', route: '/oblecenie/bezecke' },
      { title: 'Cyklistické', route: '/oblecenie/cyklisticke' },
      { title: 'Okuliare', route: '/oblecenie/okuliare' },
      { title: 'Doplnky', route: '/oblecenie/doplnky' }

    ]
  },
    {
    title: 'Výživa',
    route: '/výživa',
    children: [
      { title: 'Pitný režim', route: '/vyzyva/napoje' },
      { title: 'Energetické gély', route: '/vyzyva/gely' },
      { title: 'Proti kŕčom', route: '/vyzyva/proteiny' },
      { title: 'Regenerácia', route: '/vyzyva/regeneracia' }
    ]
  },


  {
    title: 'Bazár',
    route: '/bazar'
  }
];

export default menuItems;