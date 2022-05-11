import DOMPurify from 'dompurify';
import { createRoot } from "react-dom/client";

const root = createRoot(
  document.getElementById('root')
);

const trustedHTML = DOMPurify.sanitize("<i>Hello 1 World! <input value='hi 1'></input></i>", { RETURN_TRUSTED_TYPE: true });
const element = <h1 dangerouslySetInnerHTML={{__html: trustedHTML}}></h1>;
root.render(element);

const trustedHTML2 = DOMPurify.sanitize("<i>Hello 2 World! <input value='hi 2'></input></i>", { RETURN_TRUSTED_TYPE: true });
const div2 = document.body.appendChild(document.createElement("div"));
div2.innerHTML = trustedHTML2;

const div3 = document.body.appendChild(document.createElement("div"));
div3.innerHTML = "<i>Hello 3 World! <input value='hi 3'></input></i>";

// console.log()
