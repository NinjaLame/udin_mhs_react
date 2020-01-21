import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SupervisingCard from '../../../widgets/SupervisingCard';
import {Link} from "react-router-dom";
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
 

export default function History() {
    const classes = useStyles();

    
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
        },
        {
            "status": "pending",
            "id": 12,
            "question": "<h1>tanya apa baru lagi</h1>",
            "supervising_date": "2019-11-27",
            "topic": "Apa ini",
            "answer": "Jian suan",
            "lecturer_id": " PRAJANTO WAHYU ADI, M.Kom"
        },
        {
            "status": "pending",
            "id": 13,
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
                        <Link to="/supervising/form">
                            <Fab color="primary" aria-label="Add" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {data.map((elm)=>(
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <SupervisingCard {...elm}/>
                    </div>))}
                </div>
            </div>
        </div>
    </>);
}