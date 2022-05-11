import DOMPurify from 'dompurify';
import { createRoot } from "react-dom/client";

const root = createRoot(
  document.getElementById('root')
);
const element = <h1 dangerouslySetInnerHTML={{__html: "foo"}}></h1>;
root.render(element);

console.log(DOMPurify.sanitize("<i>Hello!</i>"))
