"use client";

import { useRequest } from "@/hooks/use-request";

const RoutineIdPage = ({ params }: { params: { routineId: string } }) => {
   const routine = useRequest("/api/routine/" + params.routineId);
   return <pre className="container">{JSON.stringify(routine, null, 3)}</pre>;
};

export default RoutineIdPage;
