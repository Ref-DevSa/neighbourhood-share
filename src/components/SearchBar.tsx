interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

function SearchBar({ search, onSearchChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for tools..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;