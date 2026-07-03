interface FilterPanelProps {
  category: string;
  distance: string;
  onCategoryChange: (value: string) => void;
  onDistanceChange: (value: string) => void;
}

function FilterPanel({
  category,
  distance,
  onCategoryChange,
  onDistanceChange,
}: FilterPanelProps) {
  return (
    <div className="filters">

      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Power Tools">Power Tools</option>
        <option value="Garden">Garden</option>
        <option value="Camping">Camping</option>
        <option value="Home">Home</option>
      </select>

      <select
        value={distance}
        onChange={(event) => onDistanceChange(event.target.value)}
      >
        <option value="">Any Distance</option>
        <option value="5">5 km</option>
        <option value="10">10 km</option>
        <option value="20">20 km</option>
      </select>

    </div>
  );
}

export default FilterPanel;