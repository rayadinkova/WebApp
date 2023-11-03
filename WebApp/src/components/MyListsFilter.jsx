import "../styles/components_styles/mylistsfilter.css";

export default function MyListsFilter() {
  return (
    <>
      <div className="my-lists-filter-wrapper">
        <div className="my-lists-filter-all">
          <p>All</p>
        </div>

        <div className="my-lists-filter-custom">
          <p>Custom</p>
        </div>

        <div className="my-lists-filter-shared">
          <p>Shared</p>
        </div>
      </div>
    </>
  );
}
