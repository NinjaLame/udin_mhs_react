import React from "react";
import {
    Portlet,
    PortletBody,
  } from "../partials/content/Portlet";

export default function SupervisingCard ({status,id,question,supervising_date,topic,answer,lecturer_id}) {
    if (status === 'answered') {
        status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-success">Terjawab</span>
    } 
    else if (status === 'pending') {
        status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-warning">Menunggu</span>
    }
    else {
        status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-danger">Batal</span>
      }
    return (<>
    <Portlet className="kt-portlet--border-bottom-brand">
        <PortletBody fluid={true}>
        <div className="kt-widget26">
          <div className="kt-widget26__content text-center">
            <span className="kt-widget26__number" >{topic}</span>
            <span>{status}</span>
          </div>
          <div
            className="kt-widget26__item"
            style={{ }}
          >
            <div className='row'>
              <div className='col-12 text-center'>
                Dosen Wali: 
                {lecturer_id}
              </div>
            </div>
          </div>
        </div>
        </PortletBody>
      </Portlet>
    
    </>)
}