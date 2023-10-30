import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "@components/ui/button";
import { NewsletterFormArea } from "./style";

const NewsletterForm = () => {
    return (
        <NewsletterFormArea>
            <form
                className="volunteer-form-wrapper"
                id="contact-form"
                action="#"
                method="post"
            >
                <Row className="row-gutter-20">
                    <Col md={12}>
                        <div className="form-group" htmlFor="blogs_name">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="form-group" htmlFor="blogs_email">
                            <input
                                className="form-control"
                                type="Email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="form-group mb-0">
                            <Button type="submit" color="gradient">
                                Subscribe
                            </Button>
                        </div>
                    </Col>
                </Row>
            </form>
        </NewsletterFormArea>
    );
};

export default NewsletterForm;
