import { useDrawer } from "@/contexts/drawerContext";
import MenuButton from "./buttons/menu";
import { Logo, MiniLogo } from "./logo";
import {
  CenterNavbarContainer,
  LeftNavbarContainer,
  RightNavbarContainer,
  SubNavbarContainer,
} from "./containers";
import InteractiveSubContainer from "./spaces/interactive";
import UserSubContainer from "./spaces/user";
import SearchSubContainer from "./spaces/search";

export default function Navbar() {
  const { setDrawerOpen } = useDrawer();

  return (
    <>
      <div className='sticky top-0 left-0 w-full h-32 lg:h-20 z-20 bg-neutral-50 dark:bg-neutral-900 flex flex-col'>
        <div className='container mx-auto h-2/3 lg:h-full flex flex-col'>
          <div className='flex flex-row justify-between items-center h-full mx-4'>
            <LeftNavbarContainer>
              <MenuButton setDrawerOpen={setDrawerOpen} />
              <Logo />
              <MiniLogo />
            </LeftNavbarContainer>

            <CenterNavbarContainer>
              <SearchSubContainer />
            </CenterNavbarContainer>

            <RightNavbarContainer>
              <UserSubContainer />
              <InteractiveSubContainer />
            </RightNavbarContainer>
          </div>
        </div>

        <SubNavbarContainer>
          <h1>Espaço para buscar</h1>
        </SubNavbarContainer>
      </div>
    </>
  );
}
