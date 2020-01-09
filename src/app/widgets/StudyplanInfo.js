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

export default function StudyplanInfo(studyplan) {
    const classes = useStyles();
    studyplan = [
        {
            "credit": 2,
            "matakuliah": "TIPOGRAFI",
            "kode_mk": "A14.27101",
            "lecturer": " AURIA F. YOGANANTI, S.Sn,MTDdesign",
            "presence_percentage": 0.0,
            "presence_count": 0
        },
        {
            "credit": 3,
            "matakuliah": "NIRMANA",
            "kode_mk": "A14.27102",
            "lecturer": " PURI SULISTIYAWATI, S.Sn, M.Kom",
            "presence_percentage": 0.0,
            "presence_count": 0
        },
        {
            "credit": 2,
            "matakuliah": "GAMBAR TEKNIK",
            "kode_mk": "A14.27103",
            "lecturer": " BERNARDUS ANDANG PRASETYA ADIWIBAWA, ST, M.Si",
            "presence_percentage": 0.0,
            "presence_count": 0
        },
        {
            "credit": 2,
            "matakuliah": "SKETSA",
            "kode_mk": "A14.27106",
            "lecturer": " DEDDY AWARD WIDYA LAKSANA, M.Pd",
            "presence_percentage": 0.0,
            "presence_count": 0
        },
        {
            "credit": 6,
            "matakuliah": "DESAIN KOMUNIKASI VISUAL 1",
            "kode_mk": "A14.27301",
            "lecturer": " PETRUS GOGOR BANGSA, S. Sn, M.Sn",
            "presence_percentage": 0.0,
            "presence_count": 0
        },
        {
            "credit": 2,
            "matakuliah": "Dasar Dasar Komputasi",
            "kode_mk": "AF201704",
            "lecturer": " HENRY BASTIAN, M.Kom",
            "presence_percentage": 0.0,
            "presence_count": 0
        }
    ]
    let list_studyplan = studyplan.map(({credit, matakuliah, kode_mk, lecturer, presence_percentage, presence_count}) =>{
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
  
