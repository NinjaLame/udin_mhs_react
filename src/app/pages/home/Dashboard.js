import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import {
  Portlet,
  PortletBody,
  PortletHeader,
  PortletHeaderToolbar
} from "../../partials/content/Portlet";
import AcademicStatistic from "../../widgets/AcademicStatistic";
import TodaySchedule from "../../widgets/TodaySchedule";
import PortletHeaderDropdown from "../../partials/content/CustomDropdowns/PortletHeaderDropdown";
import { krsList, scheduleList } from "../../crud/academic.crud";
import { getUserByToken } from "../../crud/auth.crud";


export default function Dashboard() {

  const [studyplan, setStudyplan] = useState([])

  useEffect(() => {
    const updatekrs = async () => {
      const data = await krsList()
      setStudyplan(data.data.data);
    };
    updatekrs();
  }, []);

  const [dashboard_data, setDashboard] = useState({
    "program_id": "",
    "sks": 0,
    "current_status": "AKTIF",
    "nim": "",
    "name": "",
    "dosen_wali": "",
    "ipk": 0
  })

  useEffect(() => {
    const update = async () => {
      const data = await getUserByToken()
      setDashboard(data.data);
    };
    update();
  }, []);

  const [today_schedule, setTodaySchedule] = useState([])

  useEffect(() => {
    const update = async () => {
      const data = await scheduleList()
      setTodaySchedule(data.data.data);
    };
    update();
  }, []);
  

  return (
    <>
      <div className="row">

        <div className="col-xl-4">
          <TodaySchedule schedule={today_schedule} />
        </div>
        <div className="col-xl-8">
          <Portlet fluidHeight={true}>
            <PortletHeader
              title="Order Statistics"
              toolbar={
                <PortletHeaderToolbar>
                  <PortletHeaderDropdown />
                </PortletHeaderToolbar>
              }
            />

            <PortletBody>
              {studyplan.length > 0 ? <AcademicStatistic {...dashboard_data} krs={studyplan} /> : ''}
            </PortletBody>
          </Portlet>
        </div>
      </div>
      

    </>
  );
}
