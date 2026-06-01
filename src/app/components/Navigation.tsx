import { useState } from "react";
import Container from "../../imports/Container/Container";
import HtmlBody from "../../imports/Html→Body/Html→Body";
import Navbar8 from "../../imports/Navbar8/Navbar8";

type Screen = "inicio" | "ventas" | "negocio" | "crecer";

export default function Navigation() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("inicio");

  return (
    <div className="size-full bg-black overflow-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="mx-auto w-full max-w-[430px] pb-[100px]">
        {currentScreen === "inicio" && <Container />}
        {currentScreen === "ventas" && <HtmlBody />}
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-[92px] z-50 flex justify-center">
        <div className="w-[375px] h-full origin-bottom scale-x-[1.15] scale-y-100">
          <Navbar8 />
        </div>
      </div>
    </div>
  );
}
