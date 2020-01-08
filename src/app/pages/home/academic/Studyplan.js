import React from "react";
import StudyplanCard from '../../../widgets/StudyplanCard';
export default function Studyplan() {
    let studyplan = [
        {
            "batch_code": "2017/2018 genap",
            "semester_gpa": 0.0,
            "id": 5304,
            "credit_sum": 0,
            "current_gpa": 0.0
        },
        {
            "batch_code": "2017/2018 ganjil",
            "semester_gpa": 0.0,
            "id": 28599,
            "credit_sum": 0,
            "current_gpa": 0.0
        },
        {
            "batch_code": "2016/2017 genap",
            "semester_gpa": 0.0,
            "id": 11214,
            "credit_sum": 0,
            "current_gpa": 0.0
        },
        {
            "batch_code": "2016/2017 ganjil",
            "semester_gpa": 0.0,
            "id": 19145,
            "credit_sum": 0,
            "current_gpa": 0.0
        },
        {
            "batch_code": "2015/2016 genap",
            "semester_gpa": 0.0,
            "id": 58389,
            "credit_sum": 0,
            "current_gpa": 0.0
        },
        {
            "batch_code": "2014/2015 genap",
            "semester_gpa": 0.0,
            "id": 108995,
            "credit_sum": 0,
            "current_gpa": 0.0
        },
        {
            "batch_code": "2014/2015 ganjil",
            "semester_gpa": 0.0,
            "id": 111308,
            "credit_sum": 0,
            "current_gpa": 0.0
        },
        {
            "batch_code": "2018/2019 ganjil",
            "semester_gpa": 0.0,
            "id": 46668,
            "credit_sum": 0,
            "current_gpa": 0.0
        }
    ]

    const listStudyplan = (studyplans) => {
        return studyplans.map(element => <StudyplanCard {...element} key={element.id}/>);
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