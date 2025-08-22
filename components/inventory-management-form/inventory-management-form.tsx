"use client"

import { createProductAction } from "@/actions/product-actions"
import { State } from "@/types/product-types"
import { useActionState } from "react"
import { InputField } from "../form-fields/input-field"

export default function InventoryManagementForm() {
    const initialState: State = {
        message: "",
        errors: {},
        type: ""
    }

    const [state, formAction] = useActionState(createProductAction, initialState)

    return (
        <form className="space-y-4" action={formAction}>
            <label htmlFor="product-name">Product name</label>
            <InputField 
                label="Product name"
                name="product-name"
                error={state?.errors?.name}
            />
            <InputField 
                label="Quantity"
                name="quantity"
                error={state?.errors?.quantity}
            />

            <label htmlFor="quantity">Quantity</label>
            <input 
                type="number"
                placeholder="Quantity"
                name="quantity"
                id="quantity"
            />
            <button type="submit" className="submit-button">
                Add
            </button>
        </form>
    )
}