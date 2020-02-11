import React, { useState } from 'react';
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

export default function Dashboard() {

  const auth = useSelector(state => state.auth)
  
  const [a, setCurInvoice] = React.useState(0)
  
  let studyplan = [
    {
        "batch_code": "2017/2018 genap",
        "semester_gpa": 3.5,
        "id": 5304,
        "credit_sum": 0,
        "current_gpa": 0.0
    },
    {
        "batch_code": "2017/2018 ganjil",
        "semester_gpa": 3.6,
        "id": 28599,
        "credit_sum": 0,
        "current_gpa": 0.0
    },
    {
        "batch_code": "2016/2017 genap",
        "semester_gpa": 3.4,
        "id": 11214,
        "credit_sum": 0,
        "current_gpa": 0.0
    },
    {
        "batch_code": "2016/2017 ganjil",
        "semester_gpa": 3.7,
        "id": 19145,
        "credit_sum": 0,
        "current_gpa": 0.0
    },
    {
        "batch_code": "2015/2016 genap",
        "semester_gpa": 3.2,
        "id": 58389,
        "credit_sum": 0,
        "current_gpa": 0.0
    },
    {
        "batch_code": "2014/2015 genap",
        "semester_gpa": 2,
        "id": 108995,
        "credit_sum": 0,
        "current_gpa": 0.0
    },
    {
        "batch_code": "2014/2015 ganjil",
        "semester_gpa": 3.6,
        "id": 111308,
        "credit_sum": 0,
        "current_gpa": 0.0
    },
    {
        "batch_code": "2018/2019 ganjil",
        "semester_gpa": 4,
        "id": 46668,
        "credit_sum": 0,
        "current_gpa": 0.0
    }
]
  

  let dashboard_data = {
        "program_id": "FIK / Desain Komunikasi Visual - S1",
        "sks": 144,
        "current_status": "AKTIF",
        "nim": "A14.2014.01961",
        "name": "SATRIA WIDYATAMA",
        "dosen_wali": "Dr. ARIPIN, M.Kom",
        "ipk": 3.5
    }

  let today_schedule = [
      {
          "kode": "A14.27103",
          "room": "D.5.Gambar",
          "hour_start": "16:20",
          "lecturer": " BERNARDUS ANDANG PRASETYA ADIWIBAWA, ST, M.Si",
          "hour_end": "18:00",
          "credit": 2,
          "kelompok": "A14.7108",
          "name": "GAMBAR TEKNIK",
          "schedule_type": "P"
      },
      {
        "kode": "A14.27103",
        "room": "D.5.Gambar",
        "hour_start": "16:20",
        "lecturer": " BERNARDUS ANDANG PRASETYA ADIWIBAWA, ST, M.Si",
        "hour_end": "18:00",
        "credit": 2,
        "kelompok": "A14.7108",
        "name": "GAMBAR TEKNIK",
        "schedule_type": "P"
      },
      {
        "kode": "A14.27103",
        "room": "D.5.Gambar",
        "hour_start": "16:20",
        "lecturer": " BERNARDUS ANDANG PRASETYA ADIWIBAWA, ST, M.Si",
        "hour_end": "18:00",
        "credit": 2,
        "kelompok": "A14.7108",
        "name": "GAMBAR TEKNIK",
        "schedule_type": "P"
    }

    ]
    
  // const { brandColor, dangerColor, successColor, primaryColor } = useSelector(
  //   state => ({
  //     brandColor: metronic.builder.selectors.getConfig(
  //       state,
  //       "colors.state.brand"
  //     ),
  //     dangerColor: metronic.builder.selectors.getConfig(
  //       state,
  //       "colors.state.danger"
  //     ),
  //     successColor: metronic.builder.selectors.getConfig(
  //       state,
  //       "colors.state.success"
  //     ),
  //     primaryColor: metronic.builder.selectors.getConfig(
  //       state,
  //       "colors.state.primary"
  //     )
  //   })
  // );


  return (
    <>
     <div className="row">
        
        <div className="col-xl-4">
          <TodaySchedule schedule={today_schedule}/>
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
              <AcademicStatistic {...dashboard_data} krs={studyplan}/>
            </PortletBody>
          </Portlet>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-xl-6">
          <div className="row row-full-height">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <Portlet className="kt-portlet--height-fluid-half kt-portlet--border-bottom-brand">
                <PortletBody fluid={true}>
                  <QuickStatsChart
                    value={570}
                    desc="Total Sales"
                    data={chartOptions.chart1.data}
                    color={chartOptions.chart1.color}
                    border={chartOptions.chart1.border}
                  />
                </PortletBody>
              </Portlet>

              <div className="kt-space-20" />

              <Portlet className="kt-portlet--height-fluid-half kt-portlet--border-bottom-brand">
                <PortletBody fluid={true}>
                  <QuickStatsChart
                    value={680}
                    desc="Completed Transactions"
                    data={chartOptions.chart2.data}
                    color={chartOptions.chart2.color}
                    border={chartOptions.chart2.border}
                  />
                </PortletBody>
              </Portlet>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
              <Portlet className="kt-portlet--height-fluid-half kt-portlet--border-bottom-brand">
                <PortletBody fluid={true}>
                  <QuickStatsChart
                    value="234+"
                    desc="Transactions"
                    data={chartOptions.chart3.data}
                    color={chartOptions.chart3.color}
                    border={chartOptions.chart3.border}
                  />
                </PortletBody>
              </Portlet>

              <div className="kt-space-20" />

              <Portlet className="kt-portlet--height-fluid-half kt-portlet--border-bottom-brand">
                <PortletBody fluid={true}>
                  <QuickStatsChart
                    value="4.4M$"
                    desc="Paid Commissions"
                    data={chartOptions.chart4.data}
                    color={chartOptions.chart4.color}
                    border={chartOptions.chart4.border}
                  />
                </PortletBody>
              </Portlet>
            </div>
          </div>
        </div>

       
      </div> */}
{/* 
      <Portlet>
        <PortletBody fit={true}>
          <div className="row row-no-padding row-col-separator-xl">
            <div className="col-xl-4">
              <OrdersWidget />
            </div>
            <div className="col-xl-4">
              <SalesBarChart
                title="Daily Sales"
                desc="Check out each column for more details"
              />
            </div>
            <div className="col-xl-4">
              <SalesBarChart
                title="Revenue Change"
                desc="Revenue change breakdown by cities"
              />
            </div>
          </div>
        </PortletBody>
      </Portlet> */}
{/* 
      <div className="row">
        <div className="col-xl-4">
          <DownloadFiles />
        </div>
        <div className="col-xl-4">
          <NewUsers />
        </div>
        <div className="col-xl-4">
          <LatestUpdates />
        </div>
      </div> */}

      {/* <div className="row">
        <div className="col-xl-8"></div>
        <div className="col-xl-4">
          <AuthorsProfit />
        </div>
      </div> */}

     
    </>
  );
}
