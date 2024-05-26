import React from "react";
import "../styles/ResourceList.css"; // Import the CSS file for styling

function ResourceList({ resources }) {
  return (
    <div className="resource-list">
      {resources.map((resource, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <img
              src={resource["icon_url"]}
              alt="Slack logo"
              className="card-logo"
            />
            <div className="card-title">
              <h2>{resource.title}</h2>
              <p>{resource.category}</p>
            </div>
          </div>
          <div className="card-body">
            <a href={resource.link} className="card-link">
              {resource.link}
            </a>
            <p>{resource.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResourceList;
