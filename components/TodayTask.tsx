"use client";
import { useGetTodayTaskQuery } from "@/services/queries/othersApi";
import { TaskPayload } from "@/services/types";
import React, { useEffect, useState } from "react";

function TodayTask() {
  const [email, setEmail] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (user) {
      setEmail(user.email);
    }
  }, []);

  const { data, isLoading } = useGetTodayTaskQuery<any>(email);

  return (
    <div className="w-11/12 max-w-md bg-gray-700 py-10 px-6 mx-auto mt-20 rounded-lg shadow-xl space-y-6">
      <h2 className="text-md font-semibold mb-6">Today</h2>

      {data.map((d: TaskPayload) => {
        if (d.complete === false)
          return (
            <div className="w-full border-indigo-500 border-2 shadow-md h-20 rounded-md mt-5"></div>
          );
      })}
    </div>
  );
}

export default TodayTask;
