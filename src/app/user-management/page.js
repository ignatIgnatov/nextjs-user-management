import { fetchUsersAction } from '@/actions'
import AddNewUser from '@/components/add-new-user'
import SingleUserCard from '@/components/single-user-card/page';
import React from 'react'

const UserManagement = async () => {

    const getListOfUsers = await fetchUsersAction();

    console.log(getListOfUsers);

    return (
        <div className='p-20 max-w-6xl'>
            <div className='flex justify-between'>
                <h1>User Management</h1>
                <AddNewUser />
            </div>
            <div className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
                {
                    getListOfUsers && getListOfUsers.data && getListOfUsers.data.length > 0 ?
                        getListOfUsers.data.map(userItem => <SingleUserCard user={userItem} />)
                        : <h3>No users found. Please create one</h3>
                }
            </div>
        </div>
    )
}

export default UserManagement
