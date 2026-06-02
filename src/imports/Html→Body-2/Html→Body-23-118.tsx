import svgPaths from "./svg-6cll9mlgcl";
import imgUser from "./c21f46f013b36e68ab42d58de3f870ec5f39949f.png";

function MainBackgroundContentLayerBlurredDarkened() {
  return (
    <div className="opacity-10 relative shrink-0 w-full" data-name="Main → Background Content Layer (Blurred/Darkened)">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] px-[20px] relative size-full">
        <div className="bg-[#1c1b1b] h-[128px] relative rounded-[24px] shrink-0 w-full" data-name="Background" />
        <div className="bg-[#1c1b1b] h-[128px] relative rounded-[24px] shrink-0 w-full" data-name="Background" />
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="User">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUser} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#201f1f] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <User />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">Trax</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background />
      <Heading />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[19.192px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9999 19.1922">
        <g id="Container">
          <path d={svgPaths.p1a177c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function HeaderTopNavigationShell() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[12px] bg-[rgba(20,19,19,0.8)] content-stretch flex h-[64px] items-center justify-between left-1/2 max-w-[512px] px-[20px] top-0 w-[390px]" data-name="Header - Top Navigation Shell">
      <Container />
      <Container1 />
    </div>
  );
}

function SwipeHandle() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 py-[16px] right-0 top-0" data-name="Swipe Handle">
      <div className="bg-[rgba(255,255,255,0.1)] h-[6px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Overlay" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">Mi Carrito</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#201f1f] content-stretch flex flex-col items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#c4c7c8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">3 Items</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] relative size-full">
          <Heading1 />
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function HeaderMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] right-0 top-[38px]" data-name="Header:margin">
      <Header />
    </div>
  );
}

function IncaKola() {
  return <div className="h-[120.83px] relative shrink-0 w-full" data-name="Inca Kola" />;
}

function Background2() {
  return (
    <div className="aspect-square bg-black content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Background">
      <IncaKola />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[18px] text-ellipsis text-white w-full">
        <p className="leading-[28px]">Inca Kola 500...</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[14px] w-full">
        <p className="leading-[20px]">S/ 3.50</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">S/ 3.50</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117.17px]" data-name="Container">
      <Heading2 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[10.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
        <g id="Container">
          <path d={svgPaths.p3b89c3e0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[1.25px] relative shrink-0 w-[10.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 1.24997">
        <g id="Container">
          <path d={svgPaths.p1f8a1e00} fill="var(--fill-0, #C4C7C8)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[16px] items-center px-px py-[13px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Button />
      <Container7 />
      <Button1 />
    </div>
  );
}

function Item1IncaKola() {
  return (
    <div className="bg-[#1c1b1b] relative rounded-[32px] shrink-0 w-full" data-name="Item 1: Inca Kola">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Background2 />
          <Container3 />
          <OverlayBorderOverlayBlur />
        </div>
      </div>
    </div>
  );
}

function PanFrances() {
  return <div className="h-[120.83px] relative shrink-0 w-full" data-name="Pan Frances" />;
}

function Background3() {
  return (
    <div className="aspect-square bg-black content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Background">
      <PanFrances />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[28px]">Pan Francés</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[14px] w-full">
        <p className="leading-[20px]">S/ 0.30</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">S/ 1.50</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117.17px]" data-name="Container">
      <Heading3 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[10.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
        <g id="Container">
          <path d={svgPaths.p3b89c3e0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[1.25px] relative shrink-0 w-[10.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 1.24997">
        <g id="Container">
          <path d={svgPaths.p1f8a1e00} fill="var(--fill-0, #C4C7C8)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[16px] items-center px-px py-[13px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Button2 />
      <Container13 />
      <Button3 />
    </div>
  );
}

function Item2PanFrances() {
  return (
    <div className="bg-[#1c1b1b] relative rounded-[32px] shrink-0 w-full" data-name="Item 2: Pan Frances">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Background3 />
          <Container9 />
          <OverlayBorderOverlayBlur1 />
        </div>
      </div>
    </div>
  );
}

function PapasLays() {
  return <div className="h-[120.83px] relative shrink-0 w-full" data-name="Papas Lays" />;
}

function Background4() {
  return (
    <div className="aspect-square bg-black content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Background">
      <PapasLays />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[28px]">{`Papas Lay's`}</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[14px] w-full">
        <p className="leading-[20px]">S/ 4.20</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">S/ 8.40</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117.17px]" data-name="Container">
      <Heading4 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[10.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
        <g id="Container">
          <path d={svgPaths.p3b89c3e0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">2</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[1.25px] relative shrink-0 w-[10.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 1.24997">
        <g id="Container">
          <path d={svgPaths.p1f8a1e00} fill="var(--fill-0, #C4C7C8)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[16px] items-center px-px py-[13px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Button4 />
      <Container19 />
      <Button5 />
    </div>
  );
}

function Item3PapasLays() {
  return (
    <div className="bg-[#1c1b1b] relative rounded-[32px] shrink-0 w-full" data-name="Item 3: Papas Lays">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Background4 />
          <Container15 />
          <OverlayBorderOverlayBlur2 />
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] inset-[94px_0_208px_0] items-start pb-[24px] px-[20px]" data-name="Product List">
      <Item1IncaKola />
      <Item2PanFrances />
      <Item3PapasLays />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c7c8] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Subtotal</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">S/ 13.40</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c7c8] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Delivery Fee / IGV</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">S/ 2.50</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Total</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bai_Jamjuree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">S/ 15.90</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container25 />
      <div className="bg-[rgba(255,255,255,0.05)] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      <Container28 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a0b14] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Cobrar S/ 15.90</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9999 14.9999">
        <g id="Container">
          <path d={svgPaths.p19722680} fill="var(--fill-0, #0A0B14)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function CheckoutButton() {
  return (
    <div className="drop-shadow-[0px_10px_15px_rgba(255,255,255,0.15)] h-[64px] relative rounded-[9999px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(226, 226, 226) 100%)" }} data-name="Checkout Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] relative size-full">
          <Container31 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function OrderSummaryFooter() {
  return (
    <div className="absolute bg-[#0e0e0e] content-stretch drop-shadow-[0px_-20px_25px_rgba(0,0,0,0.5)] flex flex-col gap-[16px] items-start left-0 p-[24px] right-0 rounded-tl-[32px] rounded-tr-[32px] top-[587px]" data-name="Order Summary Footer">
      <Container21 />
      <CheckoutButton />
    </div>
  );
}

function ExpandedCartBottomSheet() {
  return (
    <div className="absolute bg-black bottom-0 left-0 max-w-[512px] rounded-tl-[40px] rounded-tr-[40px] top-[64px] w-[390px]" data-name="Expanded Cart Bottom Sheet">
      <SwipeHandle />
      <HeaderMargin />
      <ProductList />
      <OrderSummaryFooter />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[508px] pt-[88px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(20, 19, 19) 0%, rgb(20, 19, 19) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <MainBackgroundContentLayerBlurredDarkened />
      <HeaderTopNavigationShell />
      <ExpandedCartBottomSheet />
    </div>
  );
}