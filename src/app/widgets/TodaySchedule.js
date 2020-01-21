/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { toAbsoluteUrl } from "../../_metronic/utils/utils";
import PortletHeaderDropdown from "../partials/content/CustomDropdowns/PortletHeaderDropdown";

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false
};

const timeline = ({
  kode,room, hour_start,
  lecturer,hour_end,credit,
  kelompok,name,schedule_type
}) => {
  return (
  <div className="kt-timeline-v2__item">
    <span className="kt-timeline-v2__item-time">{hour_start}</span>
    <div className="kt-timeline-v2__item-cricle">
      <i className="fa fa-genderless kt-font-danger" />
    </div>
    <div className="kt-timeline-v2__item-text kt-padding-top-5">
      <p>{room}</p>
      <p>{name} - {kelompok}</p>
      <p>{lecturer} - {kode} : {hour_start} - {hour_end}</p>
    </div>
    <div className="kt-list-pics kt-list-pics--sm kt-padding-l-20" />
  </div>
  )
}

export default function TodaySchedule({schedule}) {
  // console.log(props)
  let schedule_list = schedule.map(e => timeline(e))
  return (
    <>
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Jadwal Hari Ini</h3>
          </div>
          <PortletHeaderDropdown />
        </div>
        <div className="kt-portlet__body">
          {/* style="max-height: 50vh;" */}
          <PerfectScrollbar
            options={perfectScrollbarOptions}
            style={{ maxHeight: "50vh", position: "relative" }}
          >
            <div className="kt-timeline-v2 ps ps--active-y">
              <div className="kt-timeline-v2__items kt-padding-top-25 kt-padding-bottom-30">
                {schedule_list}
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </>
  );
}
