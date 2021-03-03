import React from 'react';

import { ReactComponent as Halkbank } from './bank-logos/halkbank_logo.svg';
import { ReactComponent as Akbank } from './bank-logos/akbank_logo.svg';
import { ReactComponent as Albaraka } from './bank-logos/albaraka_logo.svg';
import { ReactComponent as Ziraat } from './bank-logos/ziraat_logo.svg';
import { ReactComponent as Vakifbank } from './bank-logos/vakifbank_logo.svg';
import { ReactComponent as Yapikredi } from './bank-logos/yapikredi_logo.svg';
import { ReactComponent as Alternatifbank } from './bank-logos/alternatifbank_logo.svg';
import { ReactComponent as Denizbank } from './bank-logos/denizbank_logo.svg';
import { ReactComponent as Fibabank } from './bank-logos/fibabanka_logo.svg';
import { ReactComponent as Finansbank } from './bank-logos/finansbank_logo.svg';
import { ReactComponent as Paraf } from './bank-logos/paraf_logo.svg';
import { ReactComponent as Axess } from './bank-logos/axess_logo.svg';
import { ReactComponent as WorldCard } from './bank-logos/worldcard_logo.svg';
import { ReactComponent as MaximumCard} from './bank-logos/maximumcard_logo.svg';
import { ReactComponent as BonusCard } from './bank-logos/bonuscard_logo.svg';
import { ReactComponent as CardFinans } from './bank-logos/cardfinans_logo.svg';

const banklogos = {
  halkbankLogo: (props) => <Halkbank {...props} />,
  akbankLogo: (props) => <Akbank {...props} />,
  albarakaLogo: (props) => <Albaraka {...props} />,
  ziraatLogo: (props) => <Ziraat {...props} />,
  vakifbankLogo: (props) => <Vakifbank {...props} />,
  yapikrediLogo: (props) => <Yapikredi {...props} />,
  alternatifbankLogo: (props) => <Alternatifbank {...props} />,
  denizbankLogo: (props) => <Denizbank {...props} />,
  fibabankLogo: (props) => <Fibabank {...props} />,
  finansbankLogo: (props) => <Finansbank {...props} />,
  parafLogo: (props) => <Paraf {...props} />,
  axessLogo: (props) => <Axess {...props} />,
  worldcardLogo: (props) => <WorldCard {...props} />,
  maximumcardLogo: (props) => <MaximumCard {...props} />,
  bonuscardLogo: (props) => <BonusCard {...props} />,
  cardfinansLogo: (props) => <CardFinans {...props} />,
  "banklogos": {
   "halkbankLogo": (props) => <Halkbank {...props} />, 
   "akbankLogo": (props) => <Akbank {...props} />,
  "albarakaLogo": (props) => <Albaraka {...props} />,
   "ziraatLogo": (props) => <Ziraat {...props} />,
   "vakifbankLogo": (props) => <Vakifbank {...props} />,
   "yapikrediLogo": (props) => <Yapikredi {...props} />,
   "alternatifbankLogo": (props) => <Alternatifbank {...props} />,
   "denizbankLogo": (props) => <Denizbank {...props} />,
   "fibabankLogo": (props) => <Fibabank {...props} />,
   "finansbankLogo": (props) => <Finansbank {...props} />,
   "parafLogo": (props) => <Paraf {...props} />,
   "axessLogo": (props) => <Axess {...props} />,
   "worldcardLogo": (props) => <WorldCard {...props} />,
   "maximumcardLogo": (props) => <MaximumCard {...props} />,
   "bonuscardLogo": (props) => <BonusCard {...props} />,
   "cardfinansLogo": (props) => <CardFinans {...props} />,
},
};



export default banklogos;
