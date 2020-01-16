import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Button, Modal } from "@material-ui/core";
import {
  Portlet,
  PortletBody,
} from "../../partials/content/Portlet";
import FormSupervising from "../../widgets/FormSupervising"

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    paper: {
        position: "absolute",
        width: '90%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: "none"
    },
}));

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

export default function Supervising() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      
    
    let data = [
        {
            "status": "pending",
            "id": 10,
            "question": "<p>tanya apa baru lagi</p>",
            "supervising_date": "2019-11-27",
            "topic": "perwalian baru lagi",
            "answer": false,
            "lecturer_id": " PRAJANTO WAHYU ADI, M.Kom"
        },
        {
            "status": "pending",
            "id": 11,
            "question": "<p>tanya apa baru lagi</p>",
            "supervising_date": "2019-11-27",
            "topic": "perwalian baru lagi",
            "answer": false,
            "lecturer_id": " PRAJANTO WAHYU ADI, M.Kom"
        }
    ]


    return (<>
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-2">
                    <Fab color="primary" aria-label="Add" className={classes.fab} onClick={handleOpen}>
                        <AddIcon />
                    </Fab>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        onClose={handleClose}>
                            <div style={modalStyle} className={classes.paper}>
                                <FormSupervising></FormSupervising>
                            </div>
                    </Modal>

                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </div>
    </>);
}