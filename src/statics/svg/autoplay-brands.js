import React from 'react';

import { ReactComponent as AcDelco } from './autoplay/acdelco-logo.svg';
import { ReactComponent as Airtex } from './autoplay/airtex-logo.svg';
import { ReactComponent as Aisin } from './autoplay/aisin-logo.svg';
import { ReactComponent as Ate } from './autoplay/ate-logo.svg';
import { ReactComponent as Bando } from './autoplay/bando-logo.svg';
import { ReactComponent as Barum } from './autoplay/barum-logo.svg';
import { ReactComponent as Behr } from './autoplay/behr-logo.svg';
import { ReactComponent as Bendix } from './autoplay/bendix-logo.svg';
import { ReactComponent as BluePrint } from './autoplay/blue-print-logo.svg';
import { ReactComponent as Bosch } from './autoplay/bosch-logo.svg';
import { ReactComponent as Ina } from './autoplay/ina-logo.svg';
import { ReactComponent as Sachs } from './autoplay/sachs-logo.svg';
import { ReactComponent as Trw } from './autoplay/trw-logo.svg';

const autoplaybrands = {
  acddelcoLogo: (props) => <AcDelco {...props} />,
  airtexLogo: (props) => <Airtex {...props} />,
  aisinLogo: (props) => <Aisin {...props} />,
  ateLogo: (props) => <Ate {...props} />,
  bandoLogo: (props) => <Bando {...props} />,
  barumLogo: (props) => <Barum {...props} />,
  behrLogo: (props) => <Behr {...props} />,
  bendixLogo: (props) => <Bendix {...props} />,
  blueprintLogo: (props) => <BluePrint {...props} />,
  boschLogo: (props) => <Bosch {...props} />,
  inaLogo: (props) => <Ina {...props} />,
  sachsLogo: (props) => <Sachs {...props} />,
  trwLogo: (props) => <Trw {...props} />,

};

export default autoplaybrands;
