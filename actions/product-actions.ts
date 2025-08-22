"use server"

import { State } from "@/types/product-types"
import { z } from "zod"

const isUserAuthenticated = () => {
    return true
}

const formSchema = z.object({
    name: z.string().min(4, "Name should have at least 4 characters").max(100, "Name should have at most 100 characters"),
    quantity: z.number().min(1, "Quantity should be at least 1")
})

export const createProductAction = async (prevState: State,formData: FormData) => {
    if(!isUserAuthenticated()) {
        return {
            type: "error",
            message: "You must be logged in to add products"
        }
    }
    const productName = formData.get("product-name")
    const formDataQuantity = formData.get("quantity")

    const validatedFields = formSchema.safeParse({
        name: productName,
        quantity: formDataQuantity
    })

    if (!validatedFields.success) {
        return {
            type: "error",
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing fields, failed to create inventory item"
        }
    }
}