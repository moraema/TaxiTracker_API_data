import { Kits } from "../entity/kits";

export interface KitsRepository {
    getKitsByUserId(user_id : string): Promise<Kits[] | null>;
    deleteByIdKits(kits_id: string): Promise<string>;
    addKits(kits: Kits): Promise<Kits>;
    getKitsId(kit_id: string): Promise<Kits[] | null>;
    updateKits(kit_id: string, unit_code: string, name: string): Promise<boolean>;
    updateKistUserId(kit_id: string, user_id: string): Promise<boolean>;
}