import { compare, hash } from "bcrypt"
import { LoginDto } from "../types/DTO's/loginDTO"
import { RegisterDTO } from "../types/DTO's/registerDto"
import UserModel from "../models/UserModel"
import { sign } from "jsonwebtoken"
import OrganizasionModel from "../models/OrganizasionModel"

export const registerService = async (user: RegisterDTO) => {
    try {
        const encPass = await hash(user.password, 10)
        const { username, area, organizasion } = user
        const org = await OrganizasionModel.findOne({ name: organizasion })
        const dbUser = new UserModel({ username, password: encPass, area, organizasion, resources: org?.resources })
        return await dbUser.save()
    } catch (error) {
        console.log(`can't register`)
    }
}



export const loginService = async (user: LoginDto) => {
    try {
        const userFromDB = await UserModel.findOne({ username: user.username }).lean()
        if (!userFromDB) throw new Error(`user not found`)
        const match = await compare(user.password, userFromDB.password)
        if (!match) throw new Error('incorrect details')
        const token = await sign({
            userId: userFromDB._id,
            password: userFromDB.password,
            organization: userFromDB.organization
        }, process.env.SECRET_KEY!)
        return { ...userFromDB, token, password: "****" }
    } catch (error) {
        console.log(`error in login`)
    }
}