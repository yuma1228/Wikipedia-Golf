"use client";
import { useEffect, useRef } from "react";

type Props = {
  html: string;
  onLinkClick: (href: string, title: string, text: string) => void;
};

export const WikiFrame = ({ html, onLinkClick }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handler = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;

      const style = doc.createElement("style");
      style.textContent = `
        body { font-family: sans-serif; padding: 20px; color: #333; }
        img { max-width: 100%; height: auto; }
        .mw-editsection, .mw-footer { display: none; } 
        #footer, .mw-footer, #catlinks { display: none !important; }
        #mw-navigation, .mw-ui-icon { display: none !important; }
        .noprint { display: none !important; }

        a.new { 
          color: #ba0000; 
          cursor: not-allowed;
          text-decoration: none; 
          pointer-events: none; 
          opacity: 0.6;
        }
      `;
      doc.head.appendChild(style);

      doc.querySelectorAll("a:not(.new)").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault(); 
          
          const href = a.getAttribute("href") || "";
          const title = a.getAttribute("title") || "";
          const text = a.textContent?.trim() || "";

          onLinkClick(href, title, text);
        });
      });
    };

    iframe.addEventListener("load", handler);
    return () => iframe.removeEventListener("load", handler);
  }, [html, onLinkClick]);

  return (
    <div className="w-full h-[70vh] md:h-[80vh] border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
      <iframe
        ref={iframeRef}
        srcDoc={html}
        title="Wikipedia Viewer"
        sandbox="allow-same-origin allow-scripts"
        className="w-full h-full"
      />
    </div>
  );
};