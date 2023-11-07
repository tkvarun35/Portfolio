"use client";
//@ts-ignore
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import data from "@/Details.json";
export default function CalScheduler() {
  const calUserName = data.calUsername;
  const callTime = data.calCallTime;
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      calLink={`${calUserName}/${callTime}`}
      style={{ width: "100%", height: "95%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
      className="m-3"
    />
  );
}
