import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import Resources from "./Resources";
import Requests from "./Requests";
import Users from "./Users";
import "../styles/MainContent.css"; // Import the CSS file for styling
import axios from "axios";

function MainContent() {
  const [activeTab, setActiveTab] = useState("Resources");
  const [resources, setResources] = useState([]);
  const [requests, setRequests] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const newRequests = [];
  const newUsers = [];

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(
          "https://media-content.ccbp.in/website/react-assignment/resources.json"
        );
        setResources(response.data);
        response.data.forEach((resource) => {
          if (resource.tag === "request") {
            newRequests.push(resource);
          } else if (resource.tag === "user") {
            newUsers.push(resource);
          }
        });
        setRequests(newRequests);
        setUsers(newUsers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchResources();
  }, []);

  return (
    <div className="main-content">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Resources" && <Resources resources={resources} />}
      {activeTab === "Requests" && <Resources resources={requests} />}
      {activeTab === "Users" && <Resources resources={users} />}
    </div>
  );
}

export default MainContent;
