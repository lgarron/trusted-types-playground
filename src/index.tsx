import DOMPurify from 'dompurify';
import { createRoot } from "react-dom/client";

const root = createRoot(
  document.getElementById('root')
);

const trustedHTML = DOMPurify.sanitize("<i>Hello!<input value='hi'></input></i>", { RETURN_TRUSTED_TYPE: true });
const element = <h1 dangerouslySetInnerHTML={{__html: trustedHTML}}></h1>;
root.render(element);

const trustedHTML2 = DOMPurify.sanitize("<i>Hello!<input value='hi'></input></i>", { RETURN_TRUSTED_TYPE: true });
const div = document.body.appendChild(document.createElement("div"));
div.innerHTML = trustedHTML2;
div.innerHTML = "<i>Hello!<input value='hi'></input></i>";

// console.log()
