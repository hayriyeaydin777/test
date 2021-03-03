import React from 'react';
import { ReactComponent as LogoCampaign } from './images/logo-campaign.svg';
import { ReactComponent as LogoWidget } from './images/logo-widget.svg';
import { ReactComponent as LogoFooter } from './images/logo-footer.svg';
import { ReactComponent as LogoOldPayments } from './images/logo-old-payments.svg';
import { ReactComponent as Newsletter } from './images/newsletter.svg';
import { ReactComponent as Whatsapp } from './images/whatsapp-brands.svg';
import { ReactComponent as Phone } from './images/phone.svg';
import { ReactComponent as RapidSSL } from './images/rapidssl-logo.svg';
import { ReactComponent as TCMinistryLogo } from './images/tc-ministry-of-customs-logo.svg';
import { ReactComponent as SendBox } from './images/send-box.svg';
import { ReactComponent as PaymentOptions } from './images/payment-options.svg';
import { ReactComponent as Search } from './images/search.svg';
import { ReactComponent as SearchHistory } from './images/search-history.svg';
import { ReactComponent as Envelope } from './images/envelope.svg';
import { ReactComponent as BubbleTalk } from './images/bubble-talk.svg';
import { ReactComponent as Camera } from './images/camera.svg';
import { ReactComponent as ShoppingCart } from './images/shopping-cart.svg';
import { ReactComponent as CircleCheck } from './images/circle-check.svg';
import { ReactComponent as CircleClose } from './images/circle-close.svg';
import { ReactComponent as Headset } from './images/headset.svg';
import { ReactComponent as Settings } from './images/setting.svg';
import { ReactComponent as ManCircle } from './images/man-profile.svg';
import { ReactComponent as Award } from './images/award.svg';
import { ReactComponent as Bell } from './images/bell.svg';
import { ReactComponent as Document } from './images/document.svg';
import { ReactComponent as Bullhorn } from './images/bullhorn.svg';
import { ReactComponent as Euro } from './images/euro.svg';
import { ReactComponent as Dollar } from './images/dollar.svg';
import { ReactComponent as Info } from './images/info.svg';
import { ReactComponent as Export } from './images/export.svg';
import { ReactComponent as Checklist } from './images/check-list.svg';
import { ReactComponent as Trash } from './images/trash.svg';
import { ReactComponent as MailDown } from './images/mail-down.svg';
import { ReactComponent as Logout } from './images/logout.svg';
import { ReactComponent as ArrowDown } from './images/line-arrow-down.svg';
import { ReactComponent as SettingsRound } from './images/settings-round.svg';


import { ReactComponent as NavHome } from './images/home.svg';
import { ReactComponent as TecData } from './images/tecdata.svg';
import { ReactComponent as NavSearch } from './images/nav-search.svg';
import { ReactComponent as Balance } from './images/balance.svg';
import { ReactComponent as Order } from './images/order.svg';
import { ReactComponent as Oem } from './images/oem.svg';
import { ReactComponent as CurrentAccount } from './images/current-account.svg';
import { ReactComponent as Payment } from './images/payment.svg';
import { ReactComponent as Catelog } from './images/catalog.svg';
import { ReactComponent as Report } from './images/report.svg';
import { ReactComponent as Other } from './images/other.svg';
import { ReactComponent as Basket } from './images/basket.svg';
import { ReactComponent as SalesPerson } from './images/man-profile.svg';
import { ReactComponent as CampaignProducts } from './images/campaign-products.svg';
import { ReactComponent as HamburgerListMenu } from './images/hamburger-menu.svg';


const svg = {
    logocampaign: props => <LogoCampaign {...props}/>,
    logowidget: props => <LogoWidget {...props}/>,
    logofooter: props => <LogoFooter {...props}/>,
    logooldpayments: props => <LogoOldPayments {...props}/>,
    newsletter: props => <Newsletter {...props}/>,
    whatsapp: props => <Whatsapp {...props}/>,
    phone: props => <Phone {...props}/>,
    rapidssl: props => <RapidSSL {...props}/>,
    tcministryLogo: props => <TCMinistryLogo {...props}/>,
    basket: props => <Basket {...props}/>,
    search: props => <Search {...props}/>,
    sendBox: props => <SendBox {...props}/>,
    paymentOptions: props => <PaymentOptions {...props}/>,
    searchHistory: props => <SearchHistory {...props}/>,
    envelope: props => <Envelope {...props}/>,
    bubbletalk: props => <BubbleTalk {...props}/>,
    camera: props => <Camera {...props}/>,
    shoppingcart: props => <ShoppingCart {...props}/>,
    circlecheck: props => <CircleCheck {...props}/>,
    circleclose: props => <CircleClose {...props}/>,
    headset: props => <Headset {...props}/>,
    settings: props => <Settings {...props}/>,
    mancircle: props => <ManCircle {...props}/>,
    award: props => <Award {...props}/>,
    bell: props => <Bell {...props}/>,
    document: props => <Document {...props}/>,
    bullhorn: props => <Bullhorn {...props}/>,
    euro: props => <Euro {...props}/>,
    dollar: props => <Dollar {...props}/>,
    info: props => <Info {...props}/>,
    export: props => <Export {...props}/>,
    info: props => <Info {...props}/>,
    checklist: props => <Checklist {...props}/>,
    trash: props => <Trash {...props}/>,
    salesperson: props => <SalesPerson {...props}/>,
    maildown: props => <MailDown {...props}/>,
    logout: props => <Logout {...props}/>,
    arrowdown: props => <ArrowDown {...props}/>,
    settingsround: props => <SettingsRound {...props}/>,
    "nav": {
        "home": props => <NavHome {...props}/>,
        "tecdata": props => <TecData {...props}/>,
        "search": props => <NavSearch {...props}/>,
        "basket": props => <Basket {...props}/>,
        "balance": props => <Balance {...props}/>,
        "order": props => <Order {...props}/>,
        "oem": props => <Oem {...props}/>,
        "current-account": props => <CurrentAccount {...props}/>,
        "payment": props => <Payment {...props}/>,
        "catelog": props => <Catelog {...props}/>,
        "report": props => <Report {...props}/>,
        "other": props => <Other {...props}/>,
        "salesperson": props => <SalesPerson {...props}/>,
        "campaignproducts": props => <CampaignProducts {...props}/>,    
        "hamburgerlistmenu": props => <HamburgerListMenu {...props}/>,   
    },
}

export default svg;