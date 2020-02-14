import React, { useState } from "react";
import { Button, Form, InputGroup, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Editor } from '@tinymce/tinymce-react';
import { supervisingPost  } from "../../../crud/supervising.crud";
// import {Editor, EditorState} from 'draft-js';
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  paper: {
    // position: "absolute",
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  },
}));

export default function FormSupervising() {

  const classes = useStyles();
  const lecturer = useSelector(state=>state.auth.user.dosen_wali)

  const [validate, _] = useState(false);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [topic, setTopic] = useState('');
  const [date, setDate] = useState();
  const [checkBox, setCheckBox] = useState(false)

  
  const handleTopicChange = (e) => {
    setTopic(e.target.value)
  };
  const handleDateChange = (e) => {
    setDate(e.target.value)
  };
  const handleAnswerChange = (e) => {
    setAnswer(e.target.getContent())
  };
  const handleQuestionChange = (e) => {
    setQuestion(e.target.getContent())
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (checkBox == false) {
      console.log('sss')
      return;
    }
    let data = {
      "topic": topic,
      "question": question,
      "answer": answer,
      "supervising_date": date
    }
    supervisingPost(data).then((data)=>{
      window.location.href = process.env.REACT_APP_PUBLIC_URL+'/supervising';
    })
  }
  
  return (<>
    <div className="row ">
      <div className="col-12">
        <div className={classes.paper}>

          <Form
            noValidate
            validated={validate}
            onSubmit={e => handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Topic</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Topik Bimbingan"
                  onChange={handleTopicChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Tanggal</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="date"
                    placeholder="Tanggal Bimbingan"
                    aria-describedby="inputGroupPrepend"
                    onChange={handleDateChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a date.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Dosen Wali</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  disabled={true}
                  defaultValue={lecturer}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>

              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Question</Form.Label>
                <Editor
                  initialValue={question}
                  apiKey="tba26vbdl9s38g1qsgqzuwhn4n313wr38fm43xacypr39i78"
                  init={{
                    max_height: 30,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image',
                      'charmap print preview anchor help',
                      'searchreplace visualblocks code',
                      'insertdatetime media table paste wordcount',
                    ],
                    toolbar:
                      `undo redo | formatselect | bold italic | 
                            alignleft aligncenter alignright | 
                            bullist numlist outdent indent | help`
                  }}
                  onChange={handleQuestionChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Answer</Form.Label>
                <Editor
                  initialValue={answer}
                  apiKey="tba26vbdl9s38g1qsgqzuwhn4n313wr38fm43xacypr39i78"
                  init={{
                    height: 5,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image',
                      'charmap print preview anchor help',
                      'searchreplace visualblocks code',
                      'insertdatetime media table paste wordcount'
                    ],
                    toolbar:
                      `undo redo | formatselect | bold italic | 
                            alignleft aligncenter alignright | 
                            bullist numlist outdent indent | help`
                  }}
                  onChange={handleAnswerChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                required
                onChange={(e)=>setCheckBox(e.target.value)}
                label="Form ini tidak bisa diedit. Centang untuk melanjutkan."
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>

      </div>
    </div>
  </>);
}