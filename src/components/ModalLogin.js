import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function ModalExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='login-button'>
                <span className="fa fa-sign-in fa-lg "></span>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng Nhập</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Nhớ mật khẩu" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                {/* <a href="url" className='mr-auto'>Quên Mật Khẩu</a> */}
                    <Button variant="secondary" onClick={handleClose}>
                        Đăng Kí
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Đăng Nhập
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalExample;