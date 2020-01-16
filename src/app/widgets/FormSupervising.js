import React, { useState } from "react";
import { Button, Form, InputGroup, Col, Row } from "react-bootstrap";
import { Editor } from '@tinymce/tinymce-react'; 

export default function FormSupervising () {
    
    const [validate, setValidate] = useState(false);

    const handleEditorChange = (e) => {
        console.log(
          'Content was updated:',
          e.target.getContent()
        );
      }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidate(true);
    }

    return (<>
        <Form
        noValidate
        validated={validate}
        onSubmit={e => this.handleSubmit(e)}
        >
            <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Topic</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Topik Bimbingan"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Dosen Wali</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name" 
              disabled={true}
              defaultValue="Otto"
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
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Zip</Form.Label>
            <Editor
                apiKey="tba26vbdl9s38g1qsgqzuwhn4n313wr38fm43xacypr39i78"
                initialValue="<p>Initial content</p>"
                init={{
                height: 40,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help'
                }}
                onChange={handleEditorChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Zip</Form.Label>
            <Editor
                initialValue="<p>Initial content</p>"
                apiKey="tba26vbdl9s38g1qsgqzuwhn4n313wr38fm43xacypr39i78"
                init={{
                height: "40px",
                menubar: false,
                plugins: [
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help'
                }}
                onChange={handleEditorChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </>);
}