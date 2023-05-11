import React, { useEffect, useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useParams } from 'react-router-dom';
import { useLocalStorage } from '../../components/utils/useLocalStorage';

const SaveUser = () => {
    const username = useRef();
    const password = useRef();
    const fullName = useRef();
    const email = useRef();
    const age = useRef();
    const roleIds = useRef([]);
    const [jwt, setJwt] = useLocalStorage('', 'jwt');
    // const { userId } = useParams();
    // const isAddPage = window.location.href.includes('add-user') ? true : false;

    const user = {
        username: username.current ,
        password,
        fullName,
        email,
        age,
        roleIds,
    };

    // useEffect(() => {
    //     if (!isAddPage) {
    //         fetch(`/admin/user/${userId}`, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${jwt}`,
    //             },
    //             method: 'GET',
    //         })
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 user.current = { ...data.objUser };
    //                 console.log(user.current);
    //             });
    //     }
    // }, []);

    const handleCheck = (id) => {
        const isChecked = roleIds.current.includes(id);
        roleIds.current = isChecked ? roleIds.current.filter((roleId) => roleId !== id) : [...roleIds.current, id];
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        console.log(user);
        // fetch('admin/user', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${jwt}`,
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(user),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //     });
    };

    return (
        <>
            <NavBar />
            <Container className="d-flex justify-content-center">
                <Col className="bg-light mt-5 py-5 rounded mb-5" sm="9" md="5">
                    <h1 className="text-center text-theme">Add User</h1>
                    <Form onSubmit={handleAddUser}>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="username" className="fw-bold text-theme">
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    id="username"
                                    className="p-2"
                                    ref={username}
                                    // disabled={!isAddPage}
                                    onChange={(e) => (username.current = e.target.value)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="password" className="fw-bold text-theme">
                                    Password
                                </Form.Label>
                                <Form.Control
                                    placeholder="Enter password"
                                    type="password"
                                    id="password"
                                    className="p-2"
                                    ref={password}
                                    onChange={(e) => (password.current = e.target.value)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="username" className="fw-bold text-theme">
                                    Full name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter full name"
                                    id="fullName"
                                    className="p-2"
                                    ref={fullName}
                                    onChange={(e) => (fullName.current = e.target.value)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="password" className="fw-bold text-theme">
                                    Email
                                </Form.Label>
                                <Form.Control
                                    placeholder="Enter Email"
                                    type="email"
                                    id="email"
                                    className="p-2"
                                    ref={email}
                                    onChange={(e) => (email.current = e.target.value)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="password" className="fw-bold text-theme">
                                    Age
                                </Form.Label>
                                <Form.Control
                                    placeholder="Enter age"
                                    type="number"
                                    id="age"
                                    className="p-2"
                                    ref={age}
                                    onChange={(e) => (age.current = e.target.value)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="password" className="fw-bold text-theme">
                                    Roles
                                </Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    id="admin-checkbox"
                                    label="ADMIN"
                                    value="1"
                                    onChange={(e) => {
                                        handleCheck(parseInt(e.target.value));
                                    }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="teacher-checkbox"
                                    label="TEACHER"
                                    value="2"
                                    onChange={(e) => {
                                        handleCheck(parseInt(e.target.value));
                                    }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="student-checkbox"
                                    label="STUDENT"
                                    value="3"
                                    onChange={(e) => {
                                        handleCheck(parseInt(e.target.value));
                                    }}
                                />
                            </div>
                        </Form.Group>
                        <Col className="text-center">
                            <Button type="submit" size="lg" variant="success" className="mb-4">
                                ADD
                            </Button>
                        </Col>
                    </Form>
                </Col>
            </Container>
        </>
    );
};

export default SaveUser;
