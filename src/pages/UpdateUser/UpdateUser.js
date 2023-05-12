import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../components/utils/useLocalStorage';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { Button, Col, Container, Form } from 'react-bootstrap';
import ajax from '../../components/utils/FetchService';

const UpdateUser = () => {
    let navigate = useNavigate();
    const [jwt, setJwt] = useLocalStorage('', 'jwt');
    const { userId } = useParams();
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        fullName: '',
        age: '',
        roleIds: [],
        roles: [],
    });

    useEffect(() => {
        ajax(`/admin/user/${userId}`, 'GET', jwt).then((responses) => {
            const roleIds = [];
            for (let role of responses.objUser.roles) {
                roleIds.push(role.id);
            }
            setUser({ ...responses.objUser, roleIds: [...roleIds] });
        });
    }, []);

    const updateUser = (key, value) => {
        const newUser = { ...user };
        newUser[key] = value;
        setUser(newUser);
    };

    const handleCheck = (id) => {
        const isChecked = user.roleIds.includes(id);
        user.roleIds = isChecked
            ? updateUser(
                  'roleIds',
                  user.roleIds.filter((roleId) => roleId !== id),
              )
            : updateUser('roleIds', [...user.roleIds, id]);
    };

    const handleUpdateUser = (e) => {
        e.preventDefault();
        ajax(`/admin/user/${userId}`, 'PUT', jwt, user).then((data) => {
            navigate('/dashboard', { state: { message: 'Update user successfully' } });
        });
    };

    return (
        <>
            <NavBar />
            <Container className="d-flex justify-content-center">
                <Col className="bg-light mt-5 py-5 rounded mb-5" sm="9" md="5">
                    <h1 className="text-center text-theme">Update User</h1>
                    <Form onSubmit={handleUpdateUser}>
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
                                    value={user.username}
                                    readOnly
                                    onChange={(e) => updateUser('username', e.target.value)}
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
                                    autoComplete="true"
                                    className="p-2"
                                    onChange={(e) => updateUser('password', e.target.value)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="fullName" className="fw-bold text-theme">
                                    Full name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter full name"
                                    id="fullName"
                                    className="p-2"
                                    value={user.fullName}
                                    onChange={(e) => updateUser('fullName', e.target.value)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="email" className="fw-bold text-theme">
                                    Email
                                </Form.Label>
                                <Form.Control
                                    placeholder="Enter Email"
                                    type="text"
                                    id="email"
                                    className="p-2"
                                    value={user.email}
                                    onChange={(e) => updateUser('email', e.target.value)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="age" className="fw-bold text-theme">
                                    Age
                                </Form.Label>
                                <Form.Control
                                    placeholder="Enter age"
                                    type="number"
                                    id="age"
                                    className="p-2"
                                    value={user.age}
                                    onChange={(e) => updateUser('age', e.target.value)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <Form.Label htmlFor="roles" className="fw-bold text-theme">
                                    Roles
                                </Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    id="admin-checkbox"
                                    label="ADMIN"
                                    checked={user.roleIds.includes(1)}
                                    value="1"
                                    onChange={(e) => {
                                        handleCheck(parseInt(e.target.value));
                                    }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="student-checkbox"
                                    label="STUDENT"
                                    checked={user.roleIds.includes(2)}
                                    value="2"
                                    onChange={(e) => {
                                        handleCheck(parseInt(e.target.value));
                                    }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="teacher-checkbox"
                                    label="TEACHER"
                                    checked={user.roleIds.includes(3)}
                                    value="3"
                                    onChange={(e) => {
                                        handleCheck(parseInt(e.target.value));
                                    }}
                                />
                            </div>
                        </Form.Group>
                        <Col className="text-center">
                            <Button type="submit" size="lg" variant="success" className="mb-4">
                                UPDATE
                            </Button>
                        </Col>
                    </Form>
                </Col>
            </Container>
        </>
    );
};

export default UpdateUser;
