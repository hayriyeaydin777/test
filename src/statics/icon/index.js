import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF,
    faTwitter,
    faYoutube,
    faInstagram,
    faWhatsapp,
    faLinkedin,
    
 } from '@fortawesome/free-brands-svg-icons';

 import {
     faHistory,
     faFileExcel,
     faPlus,
     faChevronRight,
     faChevronCircleDown,
     faFilePdf,
     faEnvelope,
     faChevronDown,
     faInfo,
     faClosedCaptioning,
     faTimesCircle,
     faAngleDoubleUp,
     faHeadset,
     faUser,
     faCheckCircle,
     faMinusCircle,
     faComments,
     faVideo,
     faCamera,
     faBullhorn,
     faExternalLinkAlt,
     faSyncAlt,
     faGem,
     faDollarSign,
     faEuroSign,
     faShoppingCart,
     faCog,
     faMapMarkerAlt,
     faPhone,
     faFileDownload,
     faFileSignature,


} from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

const awesomeIcon = {
    facebook: props => <FontAwesomeIcon icon={faFacebookF} {...props}/>,
    twitter: props => <FontAwesomeIcon icon={faTwitter} {...props}/>,
    youtube: props => <FontAwesomeIcon icon={faYoutube} {...props}/>,
    instagram: props => <FontAwesomeIcon icon={faInstagram} {...props}/>,
    whatsapp: props => <FontAwesomeIcon icon={faWhatsapp} {...props}/>,
    linkedin: props => <FontAwesomeIcon icon={faLinkedin} {...props}/>,
    faHistory: props => <FontAwesomeIcon icon={faHistory} {...props}/>,
    faExcel: props => <FontAwesomeIcon icon={faFileExcel} {...props}/>,
    faPlus: props => <FontAwesomeIcon icon={faPlus} {...props}/>,
    faChevronRight: props => <FontAwesomeIcon icon={faChevronRight} {...props}/>,
    faChevronDown: props => <FontAwesomeIcon icon={faChevronDown} {...props}/>,
    faFilePdf: props => <FontAwesomeIcon icon={faFilePdf} {...props}/>,
    faEnvelope: props => <FontAwesomeIcon icon={faEnvelope} {...props}/>,
    faInfo: props => <FontAwesomeIcon icon={faInfo} {...props}/>,
    faClose: props => <FontAwesomeIcon icon={faTimesCircle} {...props}/>,
    faAngleUp: props => <FontAwesomeIcon icon={faAngleDoubleUp} {...props}/>,
    faHeadset: props => <FontAwesomeIcon icon={faHeadset} {...props}/>,
    faUser: props => <FontAwesomeIcon icon={faUser} {...props}/>,
    faCheck: props => <FontAwesomeIcon icon={faCheckCircle} {...props}/>,
    faMinus: props => <FontAwesomeIcon icon={faMinusCircle} {...props}/>,
    faComments: props => <FontAwesomeIcon icon={faComments} {...props}/>,
    faVideo: props => <FontAwesomeIcon icon={faVideo} {...props}/>,
    faCamera: props => <FontAwesomeIcon icon={faCamera} {...props}/>,
    faBullhorn: props => <FontAwesomeIcon icon={faBullhorn} {...props}/>,
    faExtarnalLink: props => <FontAwesomeIcon icon={faExternalLinkAlt} {...props}/>,
    faRotate360: props => <FontAwesomeIcon icon={faSyncAlt} {...props}/>,
    faGem: props => <FontAwesomeIcon icon={faGem} {...props}/>,
    faDollarSign: props => <FontAwesomeIcon icon={faDollarSign} {...props}/>,
    faEuroSign: props => <FontAwesomeIcon icon={faEuroSign} {...props}/>,
    faShoppingCart: props => <FontAwesomeIcon icon={faShoppingCart} {...props}/>,
    faCog: props => <FontAwesomeIcon icon={faCog} {...props}/>,
    faMapMarker: props => <FontAwesomeIcon icon={faMapMarkerAlt} {...props}/>,
    faPhone: props => <FontAwesomeIcon icon={faPhone} {...props}/>,
    faFileDownload: props => <FontAwesomeIcon icon={faFileDownload} {...props}/>,
    faFileSignature: props => <FontAwesomeIcon icon={faFileSignature} {...props}/>,
    

}

export default awesomeIcon;
