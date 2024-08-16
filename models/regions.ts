import client from "../src/database";

export type Region = {
    region_id ?: number,
    name: string
}


export class RegionStore {
    async create(r:Region):Promise<Region>{
        const conn = await client.connect();
        const sql = "INSERT INTO regions(name) VALUES($1) returning *;";
        const result = await conn.query(sql,[r.name])
        conn.release();
        return result.rows[0];
    }
}