import { searchStyle } from "../styles";
interface SearchButtonProps {
  set: (open: boolean) => void;
}

export default function SearchButton({ set }: SearchButtonProps) {
  return (
    <div className={`${searchStyle}`} onClick={() => set(true)}>
      <span className='material-symbols-outlined'>search</span>
    </div>
  );
}
