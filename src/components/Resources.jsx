import React, { useState } from "react";
import ResourceList from "./ResourceList";
import "../styles/Resources.css";
import Filter from "./Filter";

function Resources({ resources }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredResources = resources.filter((resource) => {
    const matchesSearchTerm =
      searchTerm === "" ||
      resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearchTerm;
  });
  return (
    <div>
      <Filter  onSearch={handleSearch} />
      <div className="resources">
        <ResourceList resources={filteredResources} />
        {/* <ResourceForm addResource={addResource} /> */}
      </div>
    </div>
  );
}

export default Resources;
