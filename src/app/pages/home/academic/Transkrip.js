import React from "react";
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

export default function Transkrip() {
    const classes = useStyles();

    let transkrip = [
        {
            "credit": 0,
            "letter_mark": "B",
            "name": "MENGGAMBAR 1",
            "code": "A14.27202"
        },
        {
            "credit": 0,
            "letter_mark": "D",
            "name": "SINEMATOGRAFI",
            "code": "A14.27403"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "MANAJEMEN SKENARIO ANIMASI",
            "code": "A14.27611"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "FOTOGRAFI 2",
            "code": "A14.27405"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "ANIMASI 2D",
            "code": "A14.27603"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "KOMPUTER GRAFIS 1",
            "code": "A14.27203"
        },
        {
            "credit": 0,
            "letter_mark": "B",
            "name": "PENGANTAR DESAIN KOMUNIKASI VISUAL",
            "code": "A14.27104"
        },
        {
            "credit": 0,
            "letter_mark": "B",
            "name": "MANAJEMEN DESAIN",
            "code": "A14.27703"
        },
        {
            "credit": 0,
            "letter_mark": "B",
            "name": "FOTOGRAFI 1",
            "code": "A14.27305"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "SKETSA",
            "code": "A14.27106"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "NEW MEDIA",
            "code": "A14.27706"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "Pendidikan Pancasila",
            "code": "N201707"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "ETIKA PROFESI",
            "code": "A14.27705"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "METODE PRODUKSI GRAFIKA 2",
            "code": "A14.27505"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "DASAR PEMROGRAMAN MULTIMEDIA",
            "code": "A14.27606"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "MULTIMEDIA",
            "code": "A14.27604"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "MEDIA INTERAKTIF",
            "code": "A14.27607"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "BAHASA VISUAL",
            "code": "A14.27609"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "PEMODELAN 3D",
            "code": "A14.27602"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "CREATIVE ENTREPRENEURSHIP",
            "code": "A14.27605"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "PUBLISHING",
            "code": "A14.27616"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "KRITIK DESAIN",
            "code": "A14.27504"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "TEORI PERIKLANAN",
            "code": "A14.27507"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "FOTOGRAFI 1",
            "code": "A14.27305"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "DASAR ENTREPRENEURSHIP",
            "code": "A14.27506"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "METODE PRODUKSI GRAFIKA 2",
            "code": "A14.27505"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "VISUAL STORYTELLING",
            "code": "A14.27502"
        },
        {
            "credit": 0,
            "letter_mark": "D",
            "name": "METODE PRODUKSI GRAFIKA 1",
            "code": "A14.27408"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "SEJARAH DESAIN KOMUNIKASI VISUAL",
            "code": "A14.27204"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "SINEMATOGRAFI",
            "code": "A14.27403"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "METODOLOGI DESAIN",
            "code": "A14.27406"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "TINJAUAN DESAIN",
            "code": "A14.27407"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "KOMPUTER GRAFIS 1",
            "code": "A14.27203"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "MENGGAMBAR 1",
            "code": "A14.27202"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "FOTOGRAFI 1",
            "code": "A14.17207"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "MENGGAMBAR 1",
            "code": "A14.17201"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "DASAR ENTREPRENEURSHIP",
            "code": "A14.17210"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "PSIKOLOGI PERSEPSI",
            "code": "A14.17309"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "PENGANTAR KOMUNIKASI",
            "code": "A14.17102"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "HURUF DAN TIPOGRAFI 1",
            "code": "A14.17106"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "PENDIDIKAN KEWARGANEGARAAN",
            "code": "A14.17108"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "TATATULIS KARYA ILMIAH",
            "code": "A14.17208"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "NIRMANA",
            "code": "A14.17107"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "MENGGAMBAR TEKNIK 1",
            "code": "A14.17104"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "PENGANTAR TEKNOLOGI INFORMASI",
            "code": "A14.17101"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "PENDIDIKAN AGAMA KRISTEN / PROTESTAN",
            "code": "A14.17110"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "SEJARAH DESAIN KOMUNIKASI VISUAL",
            "code": "A14.17103"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "BAHASA INGGRIS 1",
            "code": "A14.17105"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "TIPOGRAFI",
            "code": "A14.27101"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "GAMBAR TEKNIK",
            "code": "A14.27103"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "SKETSA",
            "code": "A14.27106"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "DESAIN KOMUNIKASI VISUAL 1",
            "code": "A14.27301"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "Dasar Dasar Komputasi",
            "code": "AF201704"
        },
        {
            "credit": 0,
            "letter_mark": "E",
            "name": "NIRMANA",
            "code": "A14.27102"
        }
    ];

    const list_transkrip = transkrip.map(({letter_mark,credit,name, code}) => {
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