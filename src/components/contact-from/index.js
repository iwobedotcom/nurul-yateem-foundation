import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "@components/ui/button";
import {
    ContactFormArea,
    Form,
    SectionTitle,
    Subtitle,
    Title,
    SectionDec,
    FormGroup,
    Input,
    Textarea,
} from "./style";

const ContactForm = () => {
    return (
        <ContactFormArea>
            <Row>
                <Col lg={12}>
                    <SectionTitle>
                        <Subtitle>Contact Now</Subtitle>
                        <Title>Get In Touch.</Title>
                        <SectionDec>
                            At Nurul Yateem Foundation, we value your input and
                            are ready to assist you. If you have any questions
                            or would like to connect with us, don't hesitate to
                            get in touch. Your inquiries are important, and
                            we're here to help. Join us in making a positive
                            impact in the lives of those we serve. Contact us
                            today and be part of our mission to create a better
                            world.
                        </SectionDec>
                    </SectionTitle>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Form action="#" method="post">
                        <Row className="row-gutter-20">
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="text"
                                        name="con_name"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="email"
                                        name="con_email"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="text"
                                        name="con_phone"
                                        placeholder="Phone"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Textarea
                                        name="con_message"
                                        placeholder="Message"
                                    ></Textarea>
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Button type="submit" color="gradient">
                                        Submit Now
                                    </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </ContactFormArea>
    );
};

export default ContactForm;
