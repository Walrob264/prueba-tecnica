import { useEffect, useState } from "react";

export default function Pagination({ pag, setPag, max }) {
  const [numbersPag, setNumbersPag] = useState([]);
  const [prevPag, setPrevPag] = useState(null);
  useEffect(() => {
    const tmpArray = [];
    for (let n = 1; n <= max; n++) {
      tmpArray.push(n);
    }
    setNumbersPag(tmpArray);
  }, [max]);
  const handlePag = (pageNumber) => {
    setPrevPag(pag);
    setPag(pageNumber);
  };
  const getVisiblePages = () => {
    let visiblePages = new Set();
    visiblePages.add(pag);
    if (prevPag !== null && prevPag !== pag) {
      visiblePages.add(prevPag);
    }
    if (pag > 1) visiblePages.add(pag - 1);
    if (pag < max) visiblePages.add(pag + 1);
    let visiblePagesArray = Array.from(visiblePages).sort((a, b) => a - b);
    while (visiblePagesArray.length > 4) {
      if (
        visiblePagesArray[0] !== pag &&
        (visiblePagesArray[0] !== prevPag || pag === 1)
      ) {
        visiblePagesArray.shift();
      } else if (
        visiblePagesArray[visiblePagesArray.length - 1] !== pag &&
        (visiblePagesArray[visiblePagesArray.length - 1] !== prevPag ||
          pag === max)
      ) {
        visiblePagesArray.pop();
      } else {
        break;
      }
    }
    return visiblePagesArray;
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "0.5em",
        }}
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        {numbersPag.length > 0 &&
          getVisiblePages().map((numberPag) => (
            <button
              onClick={() => handlePag(numberPag)}
              key={numberPag}
              type="button"
              className={`btn btn-primary ${pag === numberPag ? "active" : "btn-secondary"}`}
            >
              {numberPag}
            </button>
          ))}
      </div>
    </>
  );
}
