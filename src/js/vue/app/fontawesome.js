import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBlackTie as fabBlackTie,
    faCss3 as fabCss3,
    faFontAwesomeFlag as fabFontAwesomeFlag,
    faGithub as fabGithub,
    faHtml5 as fabHtml5,
    faVuejs as fabVuejs
} from '@fortawesome/free-brands-svg-icons';

import {
    faSadCry as farSadCry,
    faSquare as farSquare
} from '@fortawesome/free-regular-svg-icons';

import {
    faBold as fasBold,
    faChevronLeft as fasChevronLeft,
    faChevronRight as fasChevronRight,
    faCircle as fasCircle,
    faGlobe as fasGlobe,
    faImage as fasImage,
    faMoon as fasMoon,
    faSquare as fasSquare,
    faSun as fasSun,
    faSync as fasSync,
    faUserSecret as fasUserSecret
} from '@fortawesome/free-solid-svg-icons';

library.add(fabBlackTie, fabCss3, fabFontAwesomeFlag, fabGithub, fabHtml5, fabVuejs);
library.add(farSadCry, farSquare);
library.add(fasBold, fasChevronLeft, fasChevronRight, fasCircle, fasGlobe, fasImage, fasMoon, fasSquare, fasSun, fasSync, fasUserSecret);

export default library;
