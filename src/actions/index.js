'use server'

import connectToDb from "@/database"
import User from "@/models/user";
import { revalidatePath } from "next/cache";

//add user action

export async function addNewUserAction(formData, pathToRevalidate) {
    await connectToDb();

    try {
        //validate data using joi or other

        const newlyCreatedUser = await User.create(formData);

        if (newlyCreatedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: 'User added successfully'
            }
        } else {
            return {
                success: false,
                message: 'Some error occured! Please try again!'
            }
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'Some error occured! Please try again!'
        }
    }
}

//fetch users actions
export async function fetchUsersAction() {
    await connectToDb();

    try {
        const listOfUsers = await User.find({});
        if (listOfUsers) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(listOfUsers))
            }
        } else {
            return {
                success: false,
                message: 'Some error occured! Please try again!'
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'Some error occured! Please try again!'
        }
    }
}

//edit user action

//delete user action

export async function deleteUserAction(currentUserId, pathToRevalidate) {
    await connectToDb();

    try {
        const deletedUser = await User.findByIdAndDelete(currentUserId);
        if (deletedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: 'User deleted successfully'
            }
        } else {
            return {
                success: false,
                message: 'Some error occured! Please try again!'
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'Some error occured! Please try again!'
        }
    }
}


export async function editUserAction(currentUserID, formData, pathToRevalidate) {
    await connectToDb();

    try {
        const { firstName, lastName, email, address } = formData;
        const updatedUser = await User.findOneAndUpdate(
            { _id: currentUserID, },
            { firstName, lastName, email, address },
            { new: true });

        if (updatedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: 'User updated successfully'
            }
        } else {
            return {
                success: false,
                message: 'Some error occured! Please try again!'
            }
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'Some error occured! Please try again!'
        }
    }
}