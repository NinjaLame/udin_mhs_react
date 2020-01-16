import React from "react";
import StudyResultCard from '../../../widgets/StudyResultCard';

export default function StudyResult() {
    let khs = [
        {
            "current_gpa": 0.0,
            "semester_gpa": 0.0,
            "credit_sum": 0,
            "id": 5304,
            "krs_item": [
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 80.0,
                    "assignment_t_mark": 76.0,
                    "assignment_p_mark": 78.0,
                    "kode_mk": "A14.27202",
                    "midterm_p_mark": 72.0,
                    "credit": 3,
                    "matakuliah": "MENGGAMBAR 1",
                    "letter_mark": "B",
                    "finalterm_p_mark": 83.0,
                    "finalterm_t_mark": 80.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 85.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27403",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "SINEMATOGRAFI",
                    "letter_mark": "D",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 70.0
                },
                {
                    "total_mark": 46.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 60.0,
                    "kode_mk": "A14.27405",
                    "midterm_p_mark": 0.0,
                    "credit": 3,
                    "matakuliah": "FOTOGRAFI 2",
                    "letter_mark": "E",
                    "finalterm_p_mark": 80.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27203",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "KOMPUTER GRAFIS 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27611",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "MANAJEMEN SKENARIO ANIMASI",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 21.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 70.0,
                    "kode_mk": "A14.27603",
                    "midterm_p_mark": 0.0,
                    "credit": 4,
                    "matakuliah": "ANIMASI 2D",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                }
            ],
            "batch_code": "2017/2018 genap"
        },
        {
            "current_gpa": 0.0,
            "semester_gpa": 0.0,
            "credit_sum": 0,
            "id": 28599,
            "krs_item": [
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 85.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27104",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "PENGANTAR DESAIN KOMUNIKASI VISUAL",
                    "letter_mark": "B",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 70.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 50.0,
                    "assignment_t_mark": 75.0,
                    "assignment_p_mark": 75.0,
                    "kode_mk": "A14.27305",
                    "midterm_p_mark": 75.0,
                    "credit": 3,
                    "matakuliah": "FOTOGRAFI 1",
                    "letter_mark": "B",
                    "finalterm_p_mark": 70.0,
                    "finalterm_t_mark": 80.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 75.0,
                    "assignment_t_mark": 66.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27703",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "MANAJEMEN DESAIN",
                    "letter_mark": "B",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 70.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "N201707",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "Pendidikan Pancasila",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27505",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "METODE PRODUKSI GRAFIKA 2",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 3.0,
                    "midterm_t_mark": 5.0,
                    "assignment_t_mark": 5.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27705",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "ETIKA PROFESI",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 72.0,
                    "assignment_t_mark": 70.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27706",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "NEW MEDIA",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 10.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27106",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "SKETSA",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                }
            ],
            "batch_code": "2017/2018 ganjil"
        },
        {
            "current_gpa": 0.0,
            "semester_gpa": 0.0,
            "credit_sum": 0,
            "id": 11214,
            "krs_item": [
                {
                    "total_mark": 21.0,
                    "midterm_t_mark": 70.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27609",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "BAHASA VISUAL",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27607",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "MEDIA INTERAKTIF",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 3.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27606",
                    "midterm_p_mark": 10.0,
                    "credit": 2,
                    "matakuliah": "DASAR PEMROGRAMAN MULTIMEDIA",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 12.0,
                    "midterm_t_mark": 40.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27605",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "CREATIVE ENTREPRENEURSHIP",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 70.0,
                    "assignment_t_mark": 65.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27604",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "MULTIMEDIA",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27602",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "PEMODELAN 3D",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 60.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27616",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "PUBLISHING",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 55.0
                }
            ],
            "batch_code": "2016/2017 genap"
        },
        {
            "current_gpa": 0.0,
            "semester_gpa": 0.0,
            "credit_sum": 0,
            "id": 19145,
            "krs_item": [
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 10.0,
                    "assignment_t_mark": 80.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27502",
                    "midterm_p_mark": 72.0,
                    "credit": 2,
                    "matakuliah": "VISUAL STORYTELLING",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27305",
                    "midterm_p_mark": 0.0,
                    "credit": 3,
                    "matakuliah": "FOTOGRAFI 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 20.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 50.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27504",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "KRITIK DESAIN",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27505",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "METODE PRODUKSI GRAFIKA 2",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 39.0,
                    "midterm_t_mark": 50.0,
                    "assignment_t_mark": 60.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27507",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "TEORI PERIKLANAN",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 62.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27506",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "DASAR ENTREPRENEURSHIP",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                }
            ],
            "batch_code": "2016/2017 ganjil"
        },
        {
            "current_gpa": 0.0,
            "semester_gpa": 0.0,
            "credit_sum": 0,
            "id": 58389,
            "krs_item": [
                {
                    "total_mark": 56.0,
                    "midterm_t_mark": 60.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 60.0,
                    "kode_mk": "A14.27408",
                    "midterm_p_mark": 60.0,
                    "credit": 2,
                    "matakuliah": "METODE PRODUKSI GRAFIKA 1",
                    "letter_mark": "D",
                    "finalterm_p_mark": 50.0,
                    "finalterm_t_mark": 60.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27202",
                    "midterm_p_mark": 0.0,
                    "credit": 3,
                    "matakuliah": "MENGGAMBAR 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27203",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "KOMPUTER GRAFIS 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27204",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "SEJARAH DESAIN KOMUNIKASI VISUAL",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27403",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "SINEMATOGRAFI",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 61.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27406",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "METODOLOGI DESAIN",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 17.0,
                    "midterm_t_mark": 5.0,
                    "assignment_t_mark": 45.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27407",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "TINJAUAN DESAIN",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 5.0
                }
            ],
            "batch_code": "2015/2016 genap"
        },
        {
            "current_gpa": 0.0,
            "semester_gpa": 0.0,
            "credit_sum": 0,
            "id": 108995,
            "krs_item": [
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17309",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "PSIKOLOGI PERSEPSI",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 15.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 50.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17102",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "PENGANTAR KOMUNIKASI",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 22.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 40.0,
                    "kode_mk": "A14.17201",
                    "midterm_p_mark": 10.0,
                    "credit": 2,
                    "matakuliah": "MENGGAMBAR 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 21.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 70.0,
                    "assignment_p_mark": 70.0,
                    "kode_mk": "A14.17207",
                    "midterm_p_mark": 0.0,
                    "credit": 3,
                    "matakuliah": "FOTOGRAFI 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 24.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17210",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "DASAR ENTREPRENEURSHIP",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 80.0
                }
            ],
            "batch_code": "2014/2015 genap"
        },
        {
            "current_gpa": 0.0,
            "semester_gpa": 0.0,
            "credit_sum": 0,
            "id": 111308,
            "krs_item": [
                {
                    "total_mark": 17.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 34.0,
                    "kode_mk": "A14.17106",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "HURUF DAN TIPOGRAFI 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 57.0,
                    "kode_mk": "A14.17107",
                    "midterm_p_mark": 0.0,
                    "credit": 3,
                    "matakuliah": "NIRMANA",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 16.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 80.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17108",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "PENDIDIKAN KEWARGANEGARAAN",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17110",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "PENDIDIKAN AGAMA KRISTEN / PROTESTAN",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17208",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "TATATULIS KARYA ILMIAH",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 85.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17101",
                    "midterm_p_mark": 0.0,
                    "credit": 4,
                    "matakuliah": "PENGANTAR TEKNOLOGI INFORMASI",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17103",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "SEJARAH DESAIN KOMUNIKASI VISUAL",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17104",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "MENGGAMBAR TEKNIK 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 50.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.17105",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "BAHASA INGGRIS 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                }
            ],
            "batch_code": "2014/2015 ganjil"
        },
        {
            "current_gpa": 0.0,
            "semester_gpa": 0.0,
            "credit_sum": 0,
            "id": 46668,
            "krs_item": [
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27102",
                    "midterm_p_mark": 0.0,
                    "credit": 3,
                    "matakuliah": "NIRMANA",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27103",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "GAMBAR TEKNIK",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27101",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "TIPOGRAFI",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27106",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "SKETSA",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "A14.27301",
                    "midterm_p_mark": 0.0,
                    "credit": 6,
                    "matakuliah": "DESAIN KOMUNIKASI VISUAL 1",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                },
                {
                    "total_mark": 0.0,
                    "midterm_t_mark": 0.0,
                    "assignment_t_mark": 0.0,
                    "assignment_p_mark": 0.0,
                    "kode_mk": "AF201704",
                    "midterm_p_mark": 0.0,
                    "credit": 2,
                    "matakuliah": "Dasar Dasar Komputasi",
                    "letter_mark": "E",
                    "finalterm_p_mark": 0.0,
                    "finalterm_t_mark": 0.0
                }
            ],
            "batch_code": "2018/2019 ganjil"
        }
    ];

    let listStudyResult = khs.map(data => <StudyResultCard {...data}/>)
    
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