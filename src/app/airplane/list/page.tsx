"use client";
import {useGetPlanesQuery} from '@/redux/services/usePlanes';
import ListPlanes from "@/components/ListPlanes";

function List() {

  const {data, error} = useGetPlanesQuery(null);

  return (
    <div className="py-5 flex flex-col gap-2">
      {data?.map((plane : any) => (
        <ListPlanes key={plane.id} data={plane}/>
      ))}
    </div>
  )
}

export default List