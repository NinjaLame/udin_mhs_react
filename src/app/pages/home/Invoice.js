import React, { useState, useEffect } from 'react';
import {
  Portlet,
  PortletBody,
  PortletHeader,
} from "../../partials/content/Portlet";
import InvoiceInfo from "../../widgets/InvoiceInfo";
import InvoiceCard from "../../widgets/InvoiceCard";
import Notice from "../../partials/content/Notice";
import { curInvoice, invoiceHistory } from "../../crud/invoice.crud";

export default function Invoice() {
  
  const [cur_invoice, setCurInvoice] = React.useState({
    "total": 0,
    "prev_gedung": 0,
    "prev_poli": 0,
    "poli": 0,
    "modul": 0,
    "prev_total": 0,
    "rep_name": "A14.2014.01961 - SATRIA WIDYATAMA",
    "prev_sks": 0,
    "sks": 0,
    "status": "0",
    "prev_bk": 0,
    "spp": 0,
    "bk": 0,
    "gedung": 0,
    "prev_spp": 0,
    "period_id": 1,
    "prev_modul": 0
  })

  const [invoices, setHistInvoice] = React.useState([])

  useEffect(() => {
    const updateInvoiceData = async () => {
      const data = await curInvoice()
      setCurInvoice(data.data.data);
    };
    updateInvoiceData();
  }, []);

  useEffect(() => {
    const updateInvoiceData = async () => {
      const data = await invoiceHistory()
      setHistInvoice(data.data.data);
    };
    updateInvoiceData();
  }, []);

  // curInvoice().then(invoice => setCurInvoice(invoice)).catch(e=>console.error(e))

  const iconBell = (<div className="alert-icon alert-icon-top" style={{ paddingRight: '10px' }}>
    <i className='flaticon2-bell kt-font-primary' />
  </div>);


  const listInvoice = (invoices) => {
    return invoices.map(element => <InvoiceCard {...element} />);
  }
  return (
    <>
      <div className="row">

        <div className="col-xl-6">
          <Portlet fluidHeight={true}>
            <PortletHeader
              icon={iconBell}
              title=" Tagihan"
            />
            <PortletBody>
              <InvoiceInfo invoice={cur_invoice} />
            </PortletBody>
          </Portlet>
        </div>

        <div className="col-xl-6">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12" style={{ textAlign: "center" }}>
              <Notice icon="flaticon-calendar-with-a-clock-time-tools kt-font-primary">
                <h3>
                  Riwayat Pembayaran
                </h3>
              </Notice>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                {listInvoice(invoices)}
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}   