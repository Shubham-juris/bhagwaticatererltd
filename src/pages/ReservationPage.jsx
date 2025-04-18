import React from "react";
import ReservationHeader from "../components/Reservation/ReservationHeader";
import TableBook from "../components/Reservation/TableBook";
import StartersBeverages from "../components/Reservation/StartersBeverages";
import ReservationMenus from "../components/Reservation/ReservationMenu";

export default function ReservationPage () {
  return (
    <>
      <ReservationHeader />
      <div className="bg-black text-white px-4 md:px-20 py-16" id="reservation">
      <TableBook />
      <StartersBeverages />
      <ReservationMenus/>
      </div>
    </>
  );
}
