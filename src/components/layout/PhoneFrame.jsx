import { useRef } from "react";
import BottomNav from "./BottomNav";
import ScrollToTop from "./ScrollToTop";

export default function PhoneFrame({ children }) {
  const scrollRef = useRef(null);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-200 py-4 overflow-hidden">
      <div className="h-[90vh] max-h-[740px] aspect-[390/844] bg-background rounded-[2.5rem] shadow-2xl border-8 border-gray-900 overflow-hidden relative flex flex-col">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-6 bg-gray-900 rounded-b-xl z-[60]"></div>

        <ScrollToTop scrollRef={scrollRef} />

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto overflow-x-hidden relative pb-24"
        >
          {children}
        </div>

        <BottomNav />
      </div>
    </div>
  );
}