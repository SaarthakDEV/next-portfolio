import { useEffect, useState } from "react";

type Entry = {
    isIntersecting: boolean,
    target: HTMLElement
}

const useScroll = (sectionId: string[]) => {
    const [activeId, setActiveId] = useState<string>("");
  
  useEffect(() => {

    const options = {
    rootMargin: "0px 0px -50% 0px",
    threshold: 0.1,
  };
  
  const callback = (enteries: Entry[]) => {
    enteries.forEach((entry: Entry) => {
        if(entry.isIntersecting){
            // console.log(entry.target.getAttribute("id")) 
            setActiveId(entry.target.getAttribute("id"))
        }
    });
  }
  const observer = new IntersectionObserver(callback, options);

  sectionId.map(id => {
    const el = document.getElementById(id);
    if(el){
        observer.observe(el);
    }
  })

  }, [sectionId]);

  return activeId;
};

export default useScroll;
