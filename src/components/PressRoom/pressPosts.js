import Texpo1 from '../../assets/pressrum/texpo.jpg'
import Texpo2 from '../../assets/pressrum/texo2.jpg'
import SVTPress from '../../assets/pressrum/press.png'
import SR2 from '../../assets/pressrum/vi-sr.jpg'
import SR from '../../assets/pressrum/emeliesr.jpg'
import Techella2 from '../../assets/pressrum/föreläsning2.jpeg'

const pressPosts = [
  {
    id: 1,

    titleKey: 'svtTitle',

    date: 'May 2026',
    sortDate: '2026-05-01',

    textKey: 'svtText',

    link: 'https://www.svt.se/nyheter/lokalt/skane/ny-app-ska-hjalpa-mammor-att-hitta-vanner',

    linkTextKey: 'svtLinkText',

    images: [
      SVTPress
    ]
  },

  {
    id: 2,

    titleKey: 'texpoTitle',

    date: 'May 2026',
    sortDate: '2026-05-01',

    textKey: 'texpoText',

    images: [
      Texpo1,
      Texpo2
    ]
  },

  {
    id: 3,

    titleKey: 'srTitle',

    date: 'August 2026',
    sortDate: '2026-08-01',

    textKey: 'srText',
    
    link: 'https://www.sverigesradio.se/artikel/mommieappen-hjalper-mammor-att-hitta-nya-vanner',
    linkTextKey: 'srLinkText',
    images: [
      SR,
      SR2
    ]
  },
  {
    id: 4,
    titleKey: 'techellaTitle',
    date: 'October 2026',
    sortDate: '2026-10-13',
    textKey: 'techellaText',
    images: [
      Techella2
    ]
  }
]

export default pressPosts