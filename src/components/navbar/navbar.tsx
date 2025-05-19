import { useDrawer } from "@/contexts/drawerContext";
import MenuButton from "../button/menu";
import { Logo } from "@/components/logo/logo";
import {
  CenterNavbarContainer,
  LeftNavbarContainer,
  RightNavbarContainer,
  SubNavbarContainer,
} from "./containers/containers";
import InteractiveSubContainer from "./containers/toolbar";
import UserSubContainer from "./containers/user";
import CenterContent from "./containers/center/container";

export default function Navbar() {
  const { setDrawerOpen } = useDrawer();

  return (
    <>
      <div className='navbar colors responsive'>
        <div className='container mx-auto h-2/3 lg:h-full flex flex-col'>
          <div className='flex flex-between-row size-full px-1'>
            <LeftNavbarContainer>
              <MenuButton setDrawerOpen={setDrawerOpen} />
              <Logo />
            </LeftNavbarContainer>

            <CenterNavbarContainer>
              <CenterContent />
            </CenterNavbarContainer>

            <RightNavbarContainer>
              <UserSubContainer />
              <InteractiveSubContainer />
            </RightNavbarContainer>
          </div>
        </div>

        <SubNavbarContainer>
          <input
            className='w-full h-full px-10 sm:px-[30dvw]'
            placeholder='Buscar...'
            type='text'
          />
        </SubNavbarContainer>
      </div>
    </>
  );
}
