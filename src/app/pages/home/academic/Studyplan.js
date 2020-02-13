import React, { useState, useEffect } from "react";
import StudyplanCard from '../../../widgets/StudyplanCard';
import { krsList } from "../../../crud/academic.crud";


export default function Studyplan() {

  const [studyplan, setStudyplan] = useState([])

  useEffect(() => {
    const updatekrs = async () => {
      const data = await krsList()
      setStudyplan(data.data.data);
    };
    updatekrs();
  }, []);


  const listStudyplan = (studyplans) => {
    return studyplans.map(element => <StudyplanCard {...element} key={element.id} />);
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            {listStudyplan(studyplan)}
          </div>
        </div>
      </div>
    </>)
}