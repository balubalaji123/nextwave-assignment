import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchDataComponent() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json');
        setResources(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return;
}

export default FetchDataComponent;
