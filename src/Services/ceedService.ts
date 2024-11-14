import MissileModel from '../models/MissileModel';
import OrganizasionModel from '../models/OrganizasionModel';
import org  from '../DB/organizations.json'
import msl from '../DB/missiles.json'


export const ceed = async () => {
    try {
        org.map(async (or) => {
            const newOrg = new OrganizasionModel(or);
            await newOrg.save();
        });
        msl.map(async (ms) => {
            const newMsl = new MissileModel(ms);
            await newMsl.save();
        });
    } catch (error) {
        console.log("error in ceed")
    }
}
 