import React from "react";
import { Button, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InvoiceInfo from "./InvoiceInfo";
import {
  Portlet,
  PortletBody,
} from "../partials/content/Portlet";

const toCurrency = (num) => {
  try {
    let currency = 'Rp. ' + num.toLocaleString('id-ID')
    return currency;
  } catch (error) {
    console.log(num + '----' + error)
    return 'Rp. -'
  }
}


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: '90%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
}));

export default function InvoiceCard(invoice) {
  let {
    period_id,
    total,
    prev_total,
    status
  } = invoice;

  const classes = useStyles();

  if (parseInt(status) === 1) {
    status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-success">Selesai</span>
  } else {
    status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-danger">Belum</span>
  }

  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="col-sm-12 col-md-12 col-lg-6" key={period_id}>
      <Portlet className="kt-portlet--border-bottom-brand">
        <PortletBody fluid={true}>
          <div className="kt-widget26">
            <div className="kt-widget26__content">
              <span className="kt-widget26__number" >{period_id[1]}</span>
              {status}
            </div>

            <Button onClick={handleOpen}>Detail</Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <InvoiceInfo invoice={invoice} rootcls={classes.root} />
              </div>
            </Modal>

            <div
              className="kt-widget26__item text-justify"
              style={{ textAlign: "justify", height: "100px" }}
            >
              <div className='row'>
                <div className='col-6'>
                  Total Kewajiban
                </div>
                <div className='col-6 text-right'>
                  {toCurrency(total)}
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  Total Kekurangan
                </div>
                <div className='col-6 text-right'>
                  {toCurrency(prev_total)}
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  Total Tagihan
                </div>
                <div className='col-6 text-right'>
                  {toCurrency(total + prev_total)}
                </div>
              </div>
            </div>
          </div>
        </PortletBody>
      </Portlet>
    </div>
  );
}
