import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

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

export default function StudyplanInfo({item}) {
    const classes = useStyles();
    
    let list_studyplan = item.map(({credit, matakuliah, kode_mk, lecturer, presence_percentage, presence_count}) =>{
        return (
            <TableRow>
                <TableCell>{matakuliah}</TableCell>
                <TableCell>{credit}</TableCell>
                <TableCell>{kode_mk}</TableCell>
                <TableCell  style={{ maxWidth: 140 }}>{lecturer}</TableCell>
                <TableCell>{presence_count}</TableCell>
                <TableCell>{presence_percentage}</TableCell>
            </TableRow>
        );
    })
    return (
      <div className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Mata Kuliah</b></TableCell>
              <TableCell><b>SKS</b></TableCell>
              <TableCell><b>Kode Makul</b></TableCell>
              <TableCell><b>Dosen Pengajar</b></TableCell>
              <TableCell><b>Jumlah Hadir</b></TableCell>
              <TableCell><b>Presentase Kehadiran</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list_studyplan}
          </TableBody>
        </Table>
      </div>
    )
  };
  
