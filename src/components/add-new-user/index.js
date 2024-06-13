'use client'

import { addNewUserAction } from "@/actions"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addNewUserFormControls, addNewUserFromInitialState } from "@/utils"
import { useState } from "react";


const formControls = [];


const AddNewUser = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserFromInitialState);


    const handleSaveButtonValid = () => {
        return Object.keys(addNewUserFormData).every(
            key => addNewUserFormData[key].trim() !== ''
        )
    }

    const handleAddNewUserAction = async () => {
        const result = await addNewUserAction(addNewUserFormData, '/user-management');
        console.log(result);
        setOpenPopup(false);
        setAddNewUserFormData(addNewUserFromInitialState);
    }

    return (
        <div>
            <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
            <Dialog open={openPopup} onOpenChange={() => {
                setOpenPopup(false);
                setAddNewUserFormData(addNewUserFromInitialState);
            }}>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add new user</DialogTitle>
                    </DialogHeader>
                    <form action={handleAddNewUserAction} className="grid gap-4 py-4">
                        <div>
                            {
                                addNewUserFormControls.map(controlItem =>
                                    <div className="mb-5" key={controlItem.name}>
                                        <Label htmlFor={controlItem.name} className="text-right">
                                            {controlItem.label}
                                        </Label>
                                        <Input
                                            id={controlItem.name}
                                            name={controlItem.name}
                                            placeholder={controlItem.placeholder}
                                            className="col-span-3"
                                            type={controlItem.type}
                                            value={addNewUserFormData[controlItem.name]}
                                            onChange={(event) => setAddNewUserFormData({
                                                ...addNewUserFormData,
                                                [controlItem.name]: event.target.value
                                            })}
                                        />
                                    </div>
                                )
                            }
                        </div>
                        <DialogFooter>
                            <Button disabled={!handleSaveButtonValid()} type="submit">Save</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewUser