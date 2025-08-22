"use server"

import { createProduct, incrementLikes } from "@/lib/db/products"
import { State } from "@/types/product-types"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const isUserAuthenticated = () => {
    return true
}

const formSchema = z.object({
    name: z.string().min(4, "Name should have at least 4 characters").max(100, "Name should have at most 100 characters"),
    quantity: z.coerce.number().min(1, "Quantity should be at least 1")
})

export const createProductAction = async (prevState: State, formData: FormData) => {
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

    const { name, quantity } = validatedFields.data

    try {
        await createProduct({ name, quantity })
    } catch (error) {
        console.error(`Error ${error}`)
        return {
            type: "error",
            message: "Failed to create inventory item"
        }
    }

    redirect("/products")
}

export const incrementLikesAction = async ({ id }: { id: string }) => {
    if (!isUserAuthenticated()) {
        return {
            type: "error",
            message: "You must be logged in to increment likes"
        }
    }
    try {
        await incrementLikes({ id })
        revalidatePath("/products")
    } catch (error) {
        console.error(`Error occurred in incrementing likes ${error}`)
        return {
            type: "error",
            message: "Error: Failed to increment likes",
            error: error
        }
    }
}