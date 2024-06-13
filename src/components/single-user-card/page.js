'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";


const SingleUserCard = ({ user }) => {

    const handleDelete = async (getCurrentUserId) => {
        const result = await deleteUserAction(getCurrentUserId, '/user-management');
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
                <CardDescription>{user?.email}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{user?.address}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
                <Button className='bg-blue-600'>Edit</Button>
                <Button onClick={() => handleDelete(user?._id)}>Delete</Button>
            </CardFooter>
        </Card>
    )
}

export default SingleUserCard
