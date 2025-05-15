interface MenuProps {
  setDrawerOpen: (open: boolean) => void;
}

export default function MenuButton({ setDrawerOpen }: MenuProps) {
  return (
    <button
      type='button'
      className='menu-btn colors'
      onClick={() => setDrawerOpen(true)}>
      <span className='material-symbols-outlined navbar-icon'>menu</span>
    </button>
  );
}
