import { Kits } from "../entity/kits";

export interface KitsRepository {
    getKitsByUserId(user_id : string): Promise<Kits[] | null>;
    deleteByIdKits(kits_id: string): Promise<string>;
    addKits(kits: Kits): Promise<Kits>;
}