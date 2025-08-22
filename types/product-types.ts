export type State = {
    message?: string | null
    type?: string
    errors?: {
        name?: string[]
        quantity?: string[]
    }
}

export type createProductType = {
    name: string
    quantity: number
}