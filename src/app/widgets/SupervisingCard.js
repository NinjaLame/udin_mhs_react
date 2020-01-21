import React, { useState } from "react";
import {
    Portlet,
    PortletBody,
  } from "../partials/content/Portlet";
import { Button, Modal } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


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
  
export default function SupervisingCard ({status,id,question,supervising_date,topic,answer,lecturer_id}) {
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [isQuestion, setIsQuestion] = React.useState(true)

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (e) => {
        if (e === "answer") {
            setIsQuestion(false)
        } else setIsQuestion(true)
        setOpen(true);
    };
    
      


    if (status === 'answered') {
        status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-success">Terjawab</span>
    } 
    else if (status === 'pending') {
        status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-warning">Menunggu</span>
    }
    else {
        status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-danger">Batal</span>
    }

    let html = isQuestion ? question:answer;

    return (<>
    <Portlet className="kt-portlet--border-bottom-brand">
        <PortletBody fluid={true}>
        <div className="kt-widget26">
          <div className="kt-widget26__content text-center">
            <span className="kt-widget26__number" >{topic}</span>
            <span>{status}</span>
            <span>{supervising_date}</span>
          </div>
          <div
            className="kt-widget26__item"
          >
            <div className='row'>
              <div className='col-12 text-center'>
              <Button onClick={() => handleOpen("question")}>Lihat Pertanyaan</Button>
              <Button onClick={() => handleOpen("answer")}>Lihat Jawaban</Button>
              </div>
            </div>
          </div>
        </div>
        </PortletBody>
      </Portlet>
      <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose} >
            <div style={modalStyle} className={classes.paper}>
                <p dangerouslySetInnerHTML={{__html: html}}></p>
            </div>
        </Modal>
    </>)
}