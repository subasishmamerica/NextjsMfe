import React, { Suspense, useState, useEffect } from "react";

interface RemoteButtonWrapperProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const RemoteButtonWrapper: React.FC<RemoteButtonWrapperProps> = (props) => {
  const [RemoteButton, setRemoteButton] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRemoteButton = async () => {
      try {
        // Dynamically import the Button component from the remote app
        const module = await import("remote/Button");
        setRemoteButton(() => module.default);
      } catch (err) {
        console.error("Failed to load remote button:", err);
        setError("Failed to load remote component");
      }
    };

    loadRemoteButton();
  }, []);

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  if (!RemoteButton) {
    return <div>Loading remote button...</div>;
  }

  return <RemoteButton {...props} />;
};

export default RemoteButtonWrapper;
