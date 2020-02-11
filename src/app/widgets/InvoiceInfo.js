import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const toCurrency = (num) => {
  try {
    let currency = 'Rp. '+ num.toLocaleString('id-ID')
    return currency;
  } catch (error) {
    return 'Rp. 0'
  }
}

function Current({gedung, poli, bk, spp, sks, modul, total,
  prev_gedung, prev_poli, prev_bk, prev_spp, prev_sks, prev_modul, prev_total}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><b>Kewajiban Sekarang</b></TableCell>
          <TableCell></TableCell>
          <TableCell><b>Kewajiban Lalu</b></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Gedung</TableCell>
          <TableCell>{toCurrency(gedung)}</TableCell>
          <TableCell>Gedung</TableCell>
          <TableCell>{toCurrency(prev_gedung)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>SPP</TableCell>
          <TableCell>{toCurrency(spp)}</TableCell>
          <TableCell>SPP</TableCell>
          <TableCell>{toCurrency(prev_spp)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Poliknik</TableCell>
          <TableCell>{toCurrency(poli)}</TableCell>
          <TableCell>Poliknik</TableCell>
          <TableCell>{toCurrency(prev_poli)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>SKS</TableCell>
          <TableCell>{toCurrency(sks)}</TableCell>
          <TableCell>SKS</TableCell>
          <TableCell>{toCurrency(prev_sks)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Modul</TableCell>
          <TableCell>{toCurrency(modul)}</TableCell>
          <TableCell>Modul</TableCell>
          <TableCell>{toCurrency(prev_modul)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>BK</TableCell>
          <TableCell>{toCurrency(bk)}</TableCell>
          <TableCell>BK</TableCell>
          <TableCell>{toCurrency(prev_bk)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><b>Total Kewajiban</b></TableCell>
          <TableCell><b>{toCurrency(total)}</b></TableCell>
          <TableCell><b>Total Kekurangan</b></TableCell>
          <TableCell><b>{toCurrency(prev_total)}</b></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
};

// function Prev({prev_gedung, prev_poli, prev_bk, prev_spp, prev_sks, prev_modul, prev_total}) {
//   return (
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell><b>Kewajiban Lalu</b></TableCell>
//           <TableCell></TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         <TableRow>
//           <TableCell>Gedung</TableCell>
//           <TableCell>{toCurrency(prev_gedung)}</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>SPP</TableCell>
//           <TableCell>{toCurrency(prev_spp)}</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>Poliknik</TableCell>
//           <TableCell>{toCurrency(prev_poli)}</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>SKS</TableCell>
//           <TableCell>{toCurrency(prev_sks)}</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>Modul</TableCell>
//           <TableCell>{toCurrency(prev_modul)}</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>BK</TableCell>
//           <TableCell>{toCurrency(prev_bk)}</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell><b>Total Kekurangan</b></TableCell>
//           <TableCell><b>{toCurrency(prev_total)}</b></TableCell>
//         </TableRow>
//       </TableBody>
//     </Table>
//   )
// }

export default function InvoiceInfo(prop) {
  let {invoice} = prop;
  let status = '';
  if (parseInt(invoice.status) === 1) {
    status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-success">Selesai</span>
  } else {
    status = <span className="btn btn-bold btn-sm btn-font-sm  btn-label-danger">Belum</span>
  }
  return (
      <div className={prop.rootcls ? prop.rootcls: ''}>
        <span>Periode {invoice.name} {status}</span>
            <div className="row">
              <div className="col-12">
                <Current {...invoice}/>
              </div>
        </div>
        <div className="kt-widget12__item">
          <span style={{fontWeight: 'bold'}} > Total Tagihan : {toCurrency(invoice.total+invoice.prev_total)}</span>
        </div>
    </div>
  );
}
