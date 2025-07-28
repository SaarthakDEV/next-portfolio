import { useEffect, useState } from "react";

// Remove custom Entry type, use IntersectionObserverEntry directly

const useScroll = (sectionId: string[]) => {
    const [activeId, setActiveId] = useState<string>("");
  
  useEffect(() => {

    const options = {
    rootMargin: "0px 0px -50% 0px",
    threshold: 0.1,
  };
  
  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target instanceof HTMLElement ? entry.target.getAttribute("id") || "" : "");
      }
    });
  };

  sectionId.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
    }
  });

  }, [sectionId]);

  return activeId;
};

export default useScroll;
