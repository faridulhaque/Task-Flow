"use client";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { TaskPayload } from "@/services/types";
import { useAddTaskMutation } from "@/services/queries/othersApi";
import { toast } from "react-toastify";
function AddTaskForm() {
  const today = new Date().toISOString().split("T")[0];
  const [email, setEmail] = useState("");
  const [addData, { isLoading: isAddingTask }] = useAddTaskMutation<any>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.currentTarget.title.value;
    const description = 'n/a';
    const time = e.currentTarget.time.value;
    const date = e.currentTarget.date.value;
    const complete = false;

    const payload: TaskPayload = {
      email,
      title,
      description,
      time,
      date,
      complete,
    };

    try {
      const result: any = await addData(payload);
      if (result?.data?._id) {
        toast.success("Task added successfully");
      }
    } catch (error) {
      toast.error("Failed to create a task");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (user) {
      setEmail(user.email);
    }
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 max-w-md bg-gray-700 py-10 px-6 mx-auto mt-20 rounded-lg shadow-xl space-y-6"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">
        Add a new task
      </h2>

      <div className="w-full">
        <label className="block text-gray-300 mb-2 text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Enter task title"
          className="w-full px-4 py-3 rounded-md bg-gray-600 border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100 placeholder-gray-400 transition-all duration-200"
        />
      </div>

      {/* <div className="w-full ">
        <label className="relative block text-gray-300 mb-2 text-sm font-medium">
          Description
        </label>
        <textarea
          name="description"
          maxLength={150}
          placeholder="Enter task description"
          className=" resize-none hide-scrollbar w-full px-4 py-3 rounded-md bg-gray-600 border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100 placeholder-gray-400 transition-all duration-200"
        />
        <label className="relative block text-gray-300 mb-2 text-xs">
          Max 150 characters
        </label>
      </div> */}

      <div className="w-full">
        <label className="block text-gray-300 mb-2 text-sm font-medium">
          Time
        </label>
        <input
          type="time"
          name="time"
          placeholder="Enter task title"
          className="w-full px-4 py-3 rounded-md bg-gray-600 border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100 placeholder-gray-400 transition-all duration-200"
        />
      </div>

      <div className="w-full">
        <label className="block text-gray-300 mb-2 text-sm font-medium">
          Date
        </label>
        <input
          // min={today}
          type="date"
          name="date"
          placeholder="Enter task title"
          className="w-full px-4 py-3 rounded-md bg-gray-600 border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100 placeholder-gray-400 transition-all duration-200"
        />
      </div>

      <button
        type="submit"
        disabled={isAddingTask}
        className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-md font-semibold transition-all duration-200"
      >
        ADD
      </button>
    </form>
  );
}

export default AddTaskForm;
