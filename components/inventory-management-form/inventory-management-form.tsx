"use client"

import { createProductAction } from "@/actions/product-actions"
import { useActionState } from "react"

export default function InventoryManagementForm() {
    const initialState = {
        message: "",
        errors: {},
        type: ""
    }

    const [state, formAction] = useActionState(createProductAction, initialState)

    return (
        <form className="space-y-4" action={formAction}>
            <label htmlFor="product-name">Product name</label>
            <input 
                type="text"
                placeholder="Product name"
                name="product-name"
                id="product-name"
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