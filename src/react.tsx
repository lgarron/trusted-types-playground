import DOMPurify from 'dompurify';
import { createRoot } from "react-dom/client";

const root = createRoot(
  document.getElementById('root')
);

// This doesn't work. 😢
declare module "react" {
  namespace React {
   interface DOMAttributes<T> {
     dangerouslySetInnerHTML?: {
       __html: string | TrustedHTML
     } | undefined;
   }
 }
}

const trustedHTML = DOMPurify.sanitize("<i>Hello 1 World! <input value='hi 1'></input></i>", { RETURN_TRUSTED_TYPE: true });
const element = <h1 dangerouslySetInnerHTML={{__html: trustedHTML}}></h1>;
root.render(element);
