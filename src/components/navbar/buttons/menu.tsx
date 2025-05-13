import { menuStyle } from "../styles";

interface MenuProps {
  setDrawerOpen: (open: boolean) => void;
}

export default function MenuButton({ setDrawerOpen }: MenuProps) {
  return (
    <div className={`${menuStyle}`} onClick={() => setDrawerOpen(true)}>
      <span className='material-symbols-outlined navbar-icon'>menu</span>
    </div>
  );
}
