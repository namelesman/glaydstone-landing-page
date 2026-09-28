const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const importsEndIndex = code.indexOf('export default function Home() {');

const newCodeToInsert = `
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const reportConversion = (url: string) => {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      // Flag to prevent double opening
      let opened = false;
      const openUrl = () => {
        if (!opened) {
          opened = true;
          window.open(url, '_blank');
        }
      };

      window.gtag('event', 'conversion', {
        'send_to': 'AW-11039252214/_w8QCNGOpYkdEPa99o8p',
        'event_callback': openUrl
      });
      
      // Fallback if event_callback doesn't fire
      setTimeout(openUrl, 1000);
    } else {
      window.open(url, '_blank');
    }
  }
};

`;

code = code.slice(0, importsEndIndex) + newCodeToInsert + code.slice(importsEndIndex);

code = code.replace(
  /window\.open\(`https:\/\/wa\.me\/\$\{WHATSAPP_NUMBER\}\?text=\$\{encodeURIComponent\(msg\)\}`, '_blank'\);/g,
  'reportConversion(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);'
);

code = code.replace(
  /<a href=\{WHATSAPP_LINK\}/g,
  '<a href={WHATSAPP_LINK} onClick={(e) => { e.preventDefault(); reportConversion(WHATSAPP_LINK); }}'
);

fs.writeFileSync('src/app/page.tsx', code);
console.log('Done');
