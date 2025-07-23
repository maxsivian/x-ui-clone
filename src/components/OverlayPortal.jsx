// OverlayPortal.jsx

import { createPortal } from "react-dom";

const OverlayPortal = ({ children }) => {
  console.log(document.body, document.body.children);
  return createPortal(children, document.body);
};

export default OverlayPortal;



// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";

// const OverlayPortal = ({ children }) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   if (!mounted) return null;

//   return createPortal(children, document.body);
// };

// export default OverlayPortal;

