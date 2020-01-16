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

export default function StudyResultInfo({studyResult}) {
    const classes = useStyles();
    // console.log(studyResult)
    let list_studyResult = studyResult.map(
      ({total_mark, midterm_t_mark, assignment_t_mark, assignment_p_mark, 
        kode_mk, midterm_p_mark, credit, matakuliah, letter_mark, 
        finalterm_p_mark,finalterm_t_mark}) =>{
        return (
            <TableRow>
                <TableCell>{matakuliah}</TableCell>
                <TableCell>{kode_mk}</TableCell>
                <TableCell>{credit}</TableCell>
                <TableCell>{assignment_p_mark}</TableCell>
                <TableCell>{assignment_t_mark}</TableCell>
                <TableCell>{midterm_p_mark}</TableCell>
                <TableCell>{midterm_t_mark}</TableCell>
                <TableCell>{finalterm_p_mark}</TableCell>
                <TableCell>{finalterm_t_mark}</TableCell>
                <TableCell>{total_mark}</TableCell>
                <TableCell>{letter_mark}</TableCell>
            </TableRow>
        );
    })
    return (
      <div className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Mata Kuliah</b></TableCell>
              <TableCell><b>Kode Makul</b></TableCell>
              <TableCell><b>SKS</b></TableCell>
              <TableCell><b>Tugas Praktek</b></TableCell>
              <TableCell><b>Tugas Teori</b></TableCell>
              <TableCell><b>UTS Praktek</b></TableCell>
              <TableCell><b>UTS Teori</b></TableCell>
              <TableCell><b>UAS Praktek</b></TableCell>
              <TableCell><b>UAS Teori</b></TableCell>
              <TableCell><b>Nilai Akhir</b></TableCell>
              <TableCell><b>Huruf</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list_studyResult}
          </TableBody>
        </Table>
      </div>
    )
  };
  
