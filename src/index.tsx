
import("./react");
import DOMPurify from 'dompurify';

// declare global {
//   interface InnerHTML {
//     set innerHTML(v: string | TrustedHTML)
//   }
// }

const trustedHTML2 = DOMPurify.sanitize("<i>Hello 2 World! <input value='hi 2'></input></i>", { RETURN_TRUSTED_TYPE: true });
const div2 = document.body.appendChild(document.createElement("div"));
div2.innerHTML = trustedHTML2;

const div3 = document.body.appendChild(document.createElement("div"));
div3.innerHTML = "<i>Hello 3 World! <input value='hi 3'></input></i>";

