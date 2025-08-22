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

export const incrementLikes = async ({ id }: { id: string }) => {
    try {
        await prisma.product.update({
            where: { id },
            data: { likes: { increment: 1 }}
        })
    } catch (error) {
        console.error(`Error: Failed to increment product likes ${error}`)
        throw error
    }
}