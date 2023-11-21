import { useRef, useState, useEffect } from "react";
import * as React from "react";
// import PLACE_HOLDER from "./img/placeholder.jpg";

interface IProps {
  src: string;
}
export default function Image({ src }: IProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    function loadImage() {
      setIsLoad(true);
    }

    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    return () => {
      imgEl && imgEl.removeEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        // 확인을 위해 이미지 20% 나타날 때 로딩한다.
        threshold: 0.2
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  return (
    <img
      ref={imgRef}
      // src={isLoad ? src : PLACE_HOLDER}
      src={src}
      alt=""
    />
  );
}

let observer: IntersectionObserver | null = null;
const LOAD_IMG_EVENT_TYPE = "loadImage";

function onIntersection(
  entries: IntersectionObserverEntry[],
  io: IntersectionObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
}
