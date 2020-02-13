import React, { useState, useEffect } from "react";
import StudyResultCard from '../../../widgets/StudyResultCard';

import { khsList } from '../../../crud/academic.crud';

export default function StudyResult() {

  const [khs, setKhs] = useState([])

  useEffect(() => {
    const updatekhs = async () => {
      const data = await khsList()
      setKhs(data.data.data);
    };
    updatekhs();
  }, []);


  let listStudyResult = khs.map(data => <StudyResultCard {...data} />)

  return (<>
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="row">
          {listStudyResult}
        </div>
      </div>
    </div>
  </>)
}