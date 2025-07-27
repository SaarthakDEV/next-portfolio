"use client";
import { FaCloudArrowDown } from "react-icons/fa6";
import { useState, useRef } from "react";

const DownloadButton = () => {
    const downloadRef = useRef<HTMLAnchorElement | null>(null);
  const [downloading, setDownloading] = useState<boolean>(false);

  const handleResumeDownload = () => {
    setDownloading(true);
    downloadRef?.current?.click()
    setTimeout(() => {
        setDownloading(false)
    }, 3000)
  }

  return (
    <button onClick={handleResumeDownload} className="bg-white px-3 py-2 rounded-3xl text-black cursor-pointer">
      <div className="flex items-center justify-center">
        {downloading ? (
          <div className="w-4 h-4 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <FaCloudArrowDown size={25} />
        )}
        <span className="ml-2">Download Resume</span>
        <a ref={downloadRef} href="/resume.pdf" className="hidden" download>resume</a>
      </div>
    </button>
  );
};

export default DownloadButton;
