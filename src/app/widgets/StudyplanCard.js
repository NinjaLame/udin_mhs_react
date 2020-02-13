import React from "react";
import { Button, Modal } from "@material-ui/core";
import {
  Portlet,
  PortletBody,
} from "../partials/content/Portlet";
import { makeStyles } from "@material-ui/core/styles";
import StudyplanInfo from "./StudyplanInfo";

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
}));

export default function StudyplanCard(studyplan) {
  let {batch_code, credit_sum, semester_gpa, krs_item} = studyplan;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div className="col-sm-12 col-md-12 col-lg-3">
      <Portlet className="kt-portlet--border-bottom-brand">
        <PortletBody fluid={true}>
        <div className="kt-widget26">
          <div className="kt-widget26__content">
            <span className="kt-widget26__number" >{batch_code}</span>
            <Button onClick={handleOpen}>Detail</Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
              
            >
              <div style={modalStyle} className={classes.paper}>
                <StudyplanInfo id={studyplan.id} item={krs_item} />
              </div>
            </Modal>

          </div>
          <div
            className="kt-widget26__item text-justify"
            style={{ padding: '10%', height: "100px" }}
          >
            <div className='row'>
              <div className='col-6'>
                SKS Semester
              </div>
              <div className='col-6 text-right'>
                {credit_sum}
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                IP Semester
              </div>
              <div className='col-6 text-right'>
                {semester_gpa}
              </div>
            </div>
          </div>
        </div>
        </PortletBody>
      </Portlet>
    </div>
    );
}
