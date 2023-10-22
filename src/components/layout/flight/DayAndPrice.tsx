"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setDepartureDate } from "@/redux/slices/flights";
import { PATH_FLIGHT } from "@/routes/paths";
import { useRouter, useSearchParams } from "next/navigation";

const DayAndPrice = (date:any) => {
    const router = useRouter()  
    const searchParams = useSearchParams()
    const search = searchParams?.get('d')

    const dispatch = useAppDispatch();
    const flight = useAppSelector((state) => state.flight);

    let cheapest_fullDate = date.cheapest.departureDate.split(" ")[0]
    let cheapest_year = cheapest_fullDate?.split("-")[0]
    let cheapest_month = cheapest_fullDate?.split("-")[1]
    let cheapest_day = cheapest_fullDate.split("-")[2]

    let month = date.date.query.split("-")[1]
    let day = parseInt(search?.split('-')[2]) ?? date.date.query.split("-")[2]

    const handle_otherDay = async (cheapest : string,cheapest_year:string ,cheapest_month:string,cheapest_day:string) => {
console.log('day == cheapest_day && month == cheapest_month :>> ', day , cheapest_day , month , cheapest_month);
         dispatch(
                setDepartureDate({
                  day: cheapest_day,
                  month: "",
                  month_number:cheapest_month,
                  year: `${cheapest_year}/${cheapest_month}/${cheapest_day}`,
                  fullYear: cheapest_year,
                })
              )

            const encodedData = encodeURIComponent(JSON.stringify(flight));
            const encodedDepartur = encodeURIComponent(JSON.stringify(`${cheapest_year}-${cheapest_month}-${cheapest_day}`));
            router.push(`/${PATH_FLIGHT.availableTickets}/?q=${encodedData}&d=${encodedDepartur}`)

        //    router.refresh()
    
}

      if (day == cheapest_day && month == cheapest_month  ){
        return <div className="text-ms-crimson border-r-ms-gray border-r-[1px] rounded-2xl min-w-[192px] float-left
                     shadow-ms-r-side flex flex-col justify-center h-full">
      <span className="text-ms-crimson w-full flex items-center justify-center text-ms-lg font-ms-medium ">{date.cheapest.cheapest}</span>
      <span className="text-ms-crimson flex flex-row items-center justify-center text-ms-xs font-ms-medium pt-1 ">
        {/* {cheapest.departureDate.split(" ")[1] } */}
        <span>{cheapest_month}/{cheapest_day}</span>
      </span>
    </div>
      }else{
        return <div onClick={()=>handle_otherDay(date.cheapest,cheapest_year,cheapest_month,cheapest_day)} className="text-ms-thick-green min-w-[192px] mx-auto hover:shadow-ms-r-side flex flex-col justify-center h-full">
            <span className="w-full flex items-center justify-center text-ms-lg font-ms-medium ">{date.cheapest.cheapest}</span>
            <span className="flex flex-row items-center justify-center text-ms-xs font-ms-medium pt-1 ">
              {/* {cheapest.departureDate.split(" ")[1] } */}
              <span>{cheapest_month}/{cheapest_day}</span>
            </span>
          </div>
      }

}

export default DayAndPrice;
