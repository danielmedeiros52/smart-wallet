export interface SEOprops {
    SEOinformation: SEOinformationProps;
  }
  
  export interface SEOinformationProps {
    url: string;
    title: string;
    description: string;
    siteName: string;
    twitter: SEOtwitterProps;
  }
  
  export interface SEOtwitterProps {
    handle: string;
    site: string;
    cardType: string;
  }