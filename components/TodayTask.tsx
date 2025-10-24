"use client";
import { useGetTodayTaskQuery } from "@/services/queries/othersApi";
import { TaskPayload, TTaskListComponent } from "@/services/types";
import React, { useEffect, useState } from "react";

function TodayTask({
  email,
  deleteTask,
  changeStatus,
  data,
  dataLoading,
  deleting,
  changing,
}: TTaskListComponent) {
  return (
    <div className="w-11/12 max-w-md bg-gray-700 py-10 px-6 mx-auto mt-20 rounded-lg shadow-xl space-y-6">
      <h2 className="text-md font-semibold mb-6">Today</h2>

      {data?.map((d: TaskPayload) => {
        if (!d.complete)
          return (
            <div
              key={d?._id}
              className="w-full bg-gray-700 border border-yellow-300 shadow-md rounded-md mt-4 p-4 flex items-center justify-between hover:border-indigo-500 transition-all duration-200 relative"
            >
              <div className="flex items-start space-x-4">
                <div
                  onClick={() => changeStatus(d?._id as string)}
                  aria-disabled={changing}
                  className="mt-1 w-6 h-6 border-2 border-gray-400 rounded-sm flex items-center justify-center cursor-pointer hover:border-indigo-500 transition"
                ></div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    {d.title}
                  </h3>
                  {/* <p className="text-gray-400 text-sm">{d.description}</p> */}
                  <p className="text-gray-400 text-xs mt-1">
                    {d.date} • {d.time}
                  </p>
                </div>
              </div>

              <div
                onClick={() => deleteTask(d?._id as string)}
                aria-disabled={deleting}
                className="absolute text-red-500 cursor-pointer hover:text-red-400 text-xl font-bold select-none top-3 right-2.5"
              >
                ×
              </div>
            </div>
          );
      })}

      {/* complete tasks */}
      {data?.map((d: TaskPayload) => {
        if (d.complete)
          return (
            <div
              key={d._id}
              className="w-full bg-gray-700 border border-green-300 shadow-md rounded-md mt-4 p-4 flex items-center justify-between hover:border-indigo-500 transition-all duration-200 relative"
            >
              <div className="flex items-start space-x-4">
                <div
                  onClick={() => changeStatus(d?._id as string)}
                  aria-disabled={changing}
                  className="mt-1 w-6 h-6 border-2 border-gray-400 rounded-sm flex items-center justify-center cursor-pointer hover:border-indigo-500 transition"
                >
                  <span className="text-white text-sm font-bold">✔</span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    {d.title}
                  </h3>
                  {/* <p className="text-gray-400 text-sm">{d.description}</p> */}
                  <p className="text-gray-400 text-xs mt-1">
                    {d.date} • {d.time}
                  </p>
                </div>
              </div>

              <div
                onClick={() => deleteTask(d?._id as string)}
                aria-disabled={deleting}
                className="absolute text-red-500 cursor-pointer hover:text-red-400 text-xl font-bold select-none top-3 right-2.5"
              >
                ×
              </div>
            </div>
          );
      })}
    </div>
  );
}

export default TodayTask;
