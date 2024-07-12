import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {
    getAllUsers, createNewUserService,
    deleteUserService
} from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter'

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false
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
            console.log(e.message)
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
            console.log(e.message)
        }
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
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
            console.log(e.message)
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
                                    console.log('chek map', item, ' ', index)
                                    return (
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='btn-edit'>
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
