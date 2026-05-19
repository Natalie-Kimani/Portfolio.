function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;