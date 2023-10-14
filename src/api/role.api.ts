import { Role } from "../types"
import client from "./AxiosClient"

export const getRoles = async () => {
    const response = await client.get('/roles')
    return response.data as Role[]
}

export const getRole = async (roleId: string) => {
    const response = await client.get(`/roles/${roleId}`)
    return response.data as Role
}