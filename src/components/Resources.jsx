import React, { useState } from 'react';
import ResourceList from './ResourceList';
import '../styles/Resources.css'

function Resources() {
  const [resources] = useState([
    { name: 'Dropbox, Inc.', link: 'www.dropbox.com', description: 'Dropbox is a file hosting service' },
    { name: 'Slack', link: 'www.slack.com', description: 'Slack brings the team together' },
    // Add more resources as needed
  ]);

  // const addResource = (resource) => {
  //   setResources([...resources, resource]);
  // };

  return (
    <div className="resources">
      <ResourceList resources={resources} />
      {/* <ResourceForm addResource={addResource} /> */}
    </div>
  );
}

export default Resources;
