import { useState, useRef } from "react";
import svgPaths from "../../imports/Html→Body-2/svg-6cll9mlgcl";
import imgIncaKola500Ml from "../../imports/Html→Body/7a7a1a54128ef8e3dee020a1832b332677bb1994.png";
import imgPanFrances from "../../imports/Html→Body/1c39aebd1210a98a2c75e829f94bd8645a88f4eb.png";
import imgPapasLays from "../../imports/Html→Body/3a77978991e368fdd70c8d4fe2924a0360f31f6e.png";

interface CartModalProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps) {
  const [startY, setStartY] = useState<number | null>(null);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = (clientY: number, target: HTMLElement) => {
    if (target.closest('[data-name="Swipe Handle"]') ||
        target.closest('[data-name="Header"]') ||
        target.closest('[data-name="Header:margin"]')) {
      setStartY(clientY);
      setIsDragging(true);
    }
  };

  const handleMove = (clientY: number) => {
    if (startY === null || !isDragging) return;
    const deltaY = clientY - startY;
    if (deltaY > 0) {
      setCurrentY(deltaY);
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    if (currentY > 120) {
      onClose();
    } else {
      setCurrentY(0);
    }
    setStartY(null);
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientY, e.target as HTMLElement);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientY);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientY, e.target as HTMLElement);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientY);
  };

  return (
    <div
      className="relative w-full h-full bg-black rounded-tl-[40px] rounded-tr-[40px] flex flex-col"
      style={{
        transform: `translateY(${currentY}px)`,
        transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={isDragging ? handleMouseMove : undefined}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      {/* Swipe Handle */}
      <div className="content-stretch flex items-start justify-center py-[16px]" data-name="Swipe Handle">
        <div className="bg-[rgba(255,255,255,0.1)] h-[6px] relative rounded-[9999px] shrink-0 w-[48px]" />
      </div>

      {/* Header */}
      <div className="pb-[24px]" data-name="Header:margin">
        <div className="relative shrink-0 w-full" data-name="Header">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[20px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
                  <p className="leading-[32px]">Mi Carrito</p>
                </div>
              </div>
              <div className="bg-[#201f1f] content-stretch flex flex-col items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0">
                <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#c4c7c8] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">3 Items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Product List */}
      <div className="flex-1 overflow-y-auto px-[20px] pb-[24px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="content-stretch flex flex-col gap-[16px] items-start">
          {/* Item 1: Inca Kola */}
          <div className="bg-[#1c1b1b] relative rounded-[32px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
                {/* Product Image */}
                <div className="aspect-square w-[80px] bg-black content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0">
                  <img src={imgIncaKola500Ml} alt="Inca Kola" className="w-full h-full object-cover" />
                </div>
                {/* Product Info */}
                <div className="content-stretch flex flex-col items-start flex-1 relative shrink-0">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-white">
                    <p className="leading-[28px]">Inca Kola 500ml</p>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[14px]">
                    <p className="leading-[20px]">S/ 3.50</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white">
                      <p className="leading-[28px]">S/ 3.50</p>
                    </div>
                  </div>
                </div>
                {/* Quantity Controls */}
                <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[16px] items-center px-px py-[13px] relative rounded-[9999px] shrink-0 w-[48px] border border-[rgba(255,255,255,0.1)]">
                  <button className="relative shrink-0 size-[24px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
                      <path d={svgPaths.p3b89c3e0} fill="white" />
                    </svg>
                  </button>
                  <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] whitespace-nowrap">
                    <p className="leading-[24px]">1</p>
                  </div>
                  <button className="relative shrink-0 size-[24px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 1.24997">
                      <path d={svgPaths.p1f8a1e00} fill="#C4C7C8" fillOpacity="0.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Pan Francés */}
          <div className="bg-[#1c1b1b] relative rounded-[32px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
                <div className="aspect-square w-[80px] bg-black content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0">
                  <img src={imgPanFrances} alt="Pan Francés" className="w-full h-full object-cover" />
                </div>
                <div className="content-stretch flex flex-col items-start flex-1 relative shrink-0">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-white">
                    <p className="leading-[28px]">Pan Francés</p>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[14px]">
                    <p className="leading-[20px]">S/ 0.30</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white">
                      <p className="leading-[28px]">S/ 1.50</p>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[16px] items-center px-px py-[13px] relative rounded-[9999px] shrink-0 w-[48px] border border-[rgba(255,255,255,0.1)]">
                  <button className="relative shrink-0 size-[24px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
                      <path d={svgPaths.p3b89c3e0} fill="white" />
                    </svg>
                  </button>
                  <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] whitespace-nowrap">
                    <p className="leading-[24px]">5</p>
                  </div>
                  <button className="relative shrink-0 size-[24px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 1.24997">
                      <path d={svgPaths.p1f8a1e00} fill="#C4C7C8" fillOpacity="0.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: Papas Lay's */}
          <div className="bg-[#1c1b1b] relative rounded-[32px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
                <div className="aspect-square w-[80px] bg-black content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0">
                  <img src={imgPapasLays} alt="Papas Lay's" className="w-full h-full object-cover" />
                </div>
                <div className="content-stretch flex flex-col items-start flex-1 relative shrink-0">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-white">
                    <p className="leading-[28px]">Papas Lay's</p>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[14px]">
                    <p className="leading-[20px]">S/ 4.20</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white">
                      <p className="leading-[28px]">S/ 8.40</p>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[16px] items-center px-px py-[13px] relative rounded-[9999px] shrink-0 w-[48px] border border-[rgba(255,255,255,0.1)]">
                  <button className="relative shrink-0 size-[24px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
                      <path d={svgPaths.p3b89c3e0} fill="white" />
                    </svg>
                  </button>
                  <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] whitespace-nowrap">
                    <p className="leading-[24px]">2</p>
                  </div>
                  <button className="relative shrink-0 size-[24px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 1.24997">
                      <path d={svgPaths.p1f8a1e00} fill="#C4C7C8" fillOpacity="0.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Summary */}
      <div className="bg-[#0e0e0e] content-stretch drop-shadow-[0px_-20px_25px_rgba(0,0,0,0.5)] flex flex-col gap-[16px] items-start p-[24px] rounded-tl-[32px] rounded-tr-[32px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c7c8] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Subtotal</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[24px]">S/ 13.40</p>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c7c8] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Delivery Fee / IGV</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[24px]">S/ 2.50</p>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] h-px relative shrink-0 w-full" />
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
              <p className="leading-[28px]">Total</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
              <p className="leading-[32px]">S/ 15.90</p>
            </div>
          </div>
        </div>
        <div className="drop-shadow-[0px_10px_15px_rgba(255,255,255,0.15)] h-[64px] relative rounded-[9999px] shrink-0 w-full cursor-pointer active:scale-95 transition-transform" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(226, 226, 226) 100%)" }}>
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[32px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a0b14] text-[18px] text-center whitespace-nowrap">
                <p className="leading-[28px]">Cobrar S/ 15.90</p>
              </div>
              <div className="relative shrink-0 size-[15px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9999 14.9999">
                  <path d={svgPaths.p19722680} fill="#0A0B14" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
