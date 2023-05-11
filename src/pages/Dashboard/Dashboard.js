import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../components/utils/useLocalStorage';
import NavBar from '../../components/NavBar/NavBar';
import { Button, Container, OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEdit, FaPlusSquare, FaTrash } from 'react-icons/fa';

const Dashboard = () => {
    const [jwt, setJwt] = useLocalStorage('', 'jwt');
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('admin/user', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        })
            .then((response) => {
                if (response.status === 200) return response.json();
            })
            .then((data) => {
                setUsers(data.listUser);
            });
    }, []);
    return (
        <>
            <NavBar />
            <Container>
                <h1>User List</h1>
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
                            <tr key={user.id}>
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
                                            <FaEdit className="text-primary theme-hover" size="2rem" />
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip>Delete User</Tooltip>}
                                    >
                                        <Link>
                                            <FaTrash className="text-danger theme-hover" size="2rem" />
                                        </Link>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Dashboard;
