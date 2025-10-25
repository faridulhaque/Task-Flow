"use client";
import Navbar from "@/components/Navbar";
import PreviousTask from "@/components/PreviousTask";
import TodayTask from "@/components/TodayTask";
import UpcomingTasks from "@/components/UpcomingTasks";
import {
  useChangeStatusMutation,
  useDeleteTaskMutation,
  useGetArchiveTasksQuery,
  useGetTodayTaskQuery,
  useGetUpcomingTasksQuery,
} from "@/services/queries/othersApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [deleteTask, { isLoading: deleting }] = useDeleteTaskMutation<any>();
  const [isData, setData] = useState(0);
  const [changeStatus, { isLoading: changing }] = useChangeStatusMutation();
  const [email, setEmail] = useState(null);

  const { data: archivedTasks, isLoading: atLoading } =
    useGetArchiveTasksQuery<any>(email);
  const { data: todayTasks, isLoading: ttLoading } =
    useGetTodayTaskQuery<any>(email);

  const { data: upcomingTasks, isLoading: uTasksLoading } =
    useGetUpcomingTasksQuery<any>(email);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (user) {
      setEmail(user.email);
    }
  }, []);

  const router = useRouter();

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTask(id);
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Operation Failed");
    }
  };

  const handleChangeStatus = async (id: string) => {
    try {
      const result: any = await changeStatus(id);
      if (result?.data?.complete === true) {
        toast.success("Task marked as incomplete");
      } else if (result?.data?.complete === false) {
        toast.success("Task marked as complete");
      }
    } catch (error) {
      toast.error("Operation Failed");
    }
  };

  useEffect(() => {
    const total =
      (archivedTasks?.length || 0) +
      (todayTasks?.length || 0) +
      (upcomingTasks?.length || 0);

    setData(total);
  }, [archivedTasks, todayTasks, upcomingTasks]);

  return (
    <>
      <TodayTask
        data={todayTasks}
        dataLoading={ttLoading}
        email={email}
        deleteTask={handleDeleteTask}
        changeStatus={handleChangeStatus}
        changing={changing}
        deleting={deleting}
      ></TodayTask>
      <UpcomingTasks
        data={upcomingTasks}
        dataLoading={uTasksLoading}
        email={email}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
        changing={changing}
        deleting={deleting}
      ></UpcomingTasks>
      <PreviousTask
        data={archivedTasks}
        dataLoading={atLoading}
        email={email}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
        changing={changing}
        deleting={deleting}
      ></PreviousTask>
    </>
  );
}
