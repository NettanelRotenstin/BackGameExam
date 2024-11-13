export const login = async(req:Request,res:Response) =>{
    try {
        const result = await loginService(req.body)
        res.status(200).json(
            result
        )
    } catch (error) {
        res.json({msg:"not ok"})
    }
}

export const register = async(req:Request,res:Response) =>{
    try {
        const newUser = await registerService(req.body)
        res.status(201).json({
            newUser
        })
    } catch (error) {
        res.status(500).json({})
    }
}