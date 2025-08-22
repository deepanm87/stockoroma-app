import { prisma } from "."
import { createProductType } from "@/types/product-types"

export const createProduct = async ({
    name, quantity
}: createProductType) => {
    try {
        await prisma.product.create({
            data: {
                name, 
                quantity,
                likes: 0
            }
        })
    } catch (error) {
        console.error(`Error creating product ${error}`)
        throw error
    }
}