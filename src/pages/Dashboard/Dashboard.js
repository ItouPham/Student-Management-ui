import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../components/utils/useLocalStorage';
import NavBar from '../../components/NavBar/NavBar';
import { Alert, Button, Container, Modal, OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaEdit, FaPlusSquare, FaTrash } from 'react-icons/fa';
import ajax from '../../components/utils/FetchService';

const Dashboard = () => {
    const [jwt, setJwt] = useLocalStorage('', 'jwt');
    const [users, setUsers] = useState([]);
    const location = useLocation(null);

    const [showModal, setShowModal] = useState({ status: false, userId: '' });

    const handleCloseModal = () => setShowModal({ status: false, userId: '' });

    const handleShowModal = (id) => setShowModal({ status: true, userId: id });

    const getListUser = () => {
        ajax('admin/user', 'GET', jwt).then((data) => {
            setUsers(data.listUser);
        });
    };

    useEffect(() => {
        getListUser();
    }, []);

    const handleDeleteUser = (id) => {
        ajax(`admin/user/${id}`, 'DELETE', jwt).then((data) => {
            handleCloseModal();
            getListUser();
            location.state = { message: 'Delete user successfully' };
        });
    };
    return (
        <>
            <NavBar />
            <Container className='mt-5'>
                <h1 className='text-center'>User List</h1>
                {location.state ? (
                    <Alert variant="success" dismissible>
                        {location.state.message}
                    </Alert>
                ) : (
                    <></>
                )}
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip>Add New User</Tooltip>}
                >
                    <Link to={'/add-user'}>
                        <FaPlusSquare className="text-primary theme-hover" size="2rem" />
                    </Link>
                </OverlayTrigger>
                <Table hover size="sm" className="shadow-lg mt-2">
                    <thead className="bg-success text-white">
                        <tr>
                            <th className="text-center">#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Full name</th>
                            <th>Age</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="align-middle">
                                <td className="text-center">{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.fullName}</td>
                                <td>{user.age}</td>
                                <td className="d-flex justify-content-evenly">
                                    <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip>Edit User</Tooltip>}
                                    >
                                        <Link to={`/edit-user/${user.id}`}>
                                            <FaEdit className="text-primary theme-hover my-2" size="2rem" />
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip>Delete User</Tooltip>}
                                    >
                                        <Link onClick={() => handleShowModal(user.id)}>
                                            <FaTrash className="text-danger theme-hover my-2" size="2rem" />
                                        </Link>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal show={showModal.status} onHide={handleCloseModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you sure want to delete the user with id is {showModal.userId}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => handleDeleteUser(showModal.userId)}>
                            Yes
                        </Button>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
};

export default Dashboard;
