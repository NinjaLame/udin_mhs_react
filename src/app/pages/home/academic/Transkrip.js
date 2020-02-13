import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {
  Portlet,
  PortletBody,
  PortletHeader,
} from "../../../partials/content/Portlet";

import { transkripList } from "../../../crud/academic.crud";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function Transkrip() {
  const classes = useStyles();

  const [transkrip, setTranskrip] = useState([])

  useEffect(() => {
    const updateTranskrip = async () => {
      const data = await transkripList()
      setTranskrip(data.data.data);
    };
    updateTranskrip();
  }, []);



  const list_transkrip = transkrip.map(({ letter_mark, credit, name, code }) => {
    return (
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{code}</TableCell>
        <TableCell>{credit}</TableCell>
        <TableCell>{letter_mark}</TableCell>
      </TableRow>
    );
  })

  return (<>
    <div className="offset-md-3 col-md-6">
      <Portlet fluidHeight={true}>
        <PortletHeader
          title=" Transkrip Nilai"
        />
        <PortletBody>
          <div className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell><b>Mata Kuliah</b></TableCell>
                  <TableCell><b>Kode Makul</b></TableCell>
                  <TableCell><b>SKS</b></TableCell>
                  <TableCell><b>Nilai</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list_transkrip}
              </TableBody>
            </Table>
          </div>
        </PortletBody>
      </Portlet>
    </div>

  </>)
}