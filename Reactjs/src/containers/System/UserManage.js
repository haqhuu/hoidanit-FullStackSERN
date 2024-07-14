import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {
    getAllUsers, createNewUserService,
    deleteUserService, editUserService
} from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser'
import { emitter } from '../../utils/emitter'

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact()
    }

    /** Life cycle
     *  Run component:
     *  1. Run constructor->init state
     *  2. Run Did mount (seState)
     *  3. Render
     * 
     */

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }

    doEditUser = async (user) => {
        try {
            let response = await editUserService(user)

            if (response && response.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
            } else {
                alert(response.message)
            }
            await this.getAllUsersFromReact()
        } catch (e) {
            console.log(e)
        }
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)

            if (response && response.errCode !== 0) {
                alert(response.message)
            } else {
                await this.getAllUsersFromReact()
                this.setState({
                    isOpenModalUser: false
                })
            }
            emitter.emit("EVENT_CLEAR_MODAL_DATA")
        } catch (e) {
            console.log(e)
        }
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');

        try {
            if (response && response.errCode === 0) {
                this.setState({
                    arrUsers: response.users
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    deleteUser = async (user) => {
        try {
            let response = await deleteUserService(user.id)

            if (response && response.errCode === 0) {
                await this.getAllUsersFromReact()
            } else {
                alert(response.message)
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleEditUserModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }

                <div className="title text-center">Manage users</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3' onClick={
                        () => this.handleAddNewUser()}>
                        <i className="fa fa-plus" aria-hidden="true"></i>Add new user
                    </button>
                </div>
                <div className="users-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='btn-edit'
                                                    onClick={() => { this.handleEditUser(item) }}>
                                                    <i className="fa fa-file" aria-hidden="true"></i></button>
                                                <button className='btn-delete'
                                                    onClick={() => { this.deleteUser(item) }} >
                                                    <i className="fa fa-trash">
                                                    </i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
