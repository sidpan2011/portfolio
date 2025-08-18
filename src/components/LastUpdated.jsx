"use client";
import React, { useEffect, useState } from "react";

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState("--");

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/last-updated", { cache: "no-store" });
        console.log("Fetching last updated info from /api/last-updated");
        if (!res.ok) throw new Error("Failed to fetch");
        const { lastUpdated: ts } = await res.json();
        console.log("Fetching last updated info from /api/last-updated", ts);
        if (ts) {
          const d = new Date(ts);
          const formatted = d.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          setLastUpdated(formatted);
        } else {
          setLastUpdated("—");
        }
      } catch (e) {
        console.error(e);
        setLastUpdated("—");
      }
    };
    run();
  }, []);

  return (
    <div className="mb-52 mt-6">
      <p className="dark:text-white/50 text-black/50 text-sm">
        Last updated on <span>{lastUpdated}</span>
      </p>
    </div>
  );
};

export default LastUpdated;