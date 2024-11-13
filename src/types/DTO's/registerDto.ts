import { areaEnum } from "../Area"
import { organizasionsEnum } from "../Organizations"

export interface RegisterDTO {
    username:string
    password:string
    organizasion:organizasionsEnum
    area:areaEnum
}