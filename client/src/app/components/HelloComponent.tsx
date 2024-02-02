"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const HelloComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/hello")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default HelloComponent;
