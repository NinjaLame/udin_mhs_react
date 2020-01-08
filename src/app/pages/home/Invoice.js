import React from "react";
import {
  Portlet,
  PortletBody,
  PortletHeader,
} from "../../partials/content/Portlet";
import InvoiceCurrent from "../../widgets/InvoiceInfo";
import InvoiceCard from "../../widgets/InvoiceCard";
import Notice from "../../partials/content/Notice";


export default function invoice() {

    const iconBell = (<div className="alert-icon alert-icon-top" style={{paddingRight:'10px'}}>
                    <i className='flaticon2-bell kt-font-primary'/>
                  </div>);
    
    let cur_invoice = {
      "total": 2550000,
      "prev_gedung": 0,
      "prev_poli": 0,
      "poli": 0,
      "modul": 0,
      "prev_total": 0,
      "name": "A14.2014.01961 - SATRIA WIDYATAMA",
      "prev_sks": 0,
      "sks": 2550000,
      "status": "1",
      "prev_bk": 0,
      "spp": 0,
      "bk": 0,
      "gedung": 0,
      "prev_spp": 0,
      "period_id": [1,"2015/2016 ganjil"],
      "prev_modul": 0
    };

    const invoices = [
      {...cur_invoice},
      {...cur_invoice, period_id: [Math.random(), "2015/2016 ganjil"]},
      {...cur_invoice, period_id: [Math.random(), "2015/2016 ganjil"]},
    ];

    const listInvoice = (invoices) => {
      const list = element => (<div className="col-sm-12 col-md-12 col-lg-6" key={element.period_id}>
          <Portlet className="kt-portlet--border-bottom-brand">
            <PortletBody fluid={true}>
              <InvoiceCard {...element}/>
            </PortletBody>
          </Portlet>
      </div>);
      invoices = invoices.map(list);
      return invoices;
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
              <InvoiceCurrent invoice={cur_invoice}/>
            </PortletBody>
          </Portlet>
        </div>

        <div className="col-xl-6">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12" style={{textAlign: "center"}}>
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