import { Kits } from "../entity/kits";

export interface KitsRepository {
    getAllKits(): Promise<Kits[]>;
    deleteByIdKits(kits_id: string): Promise<string>;
    addKits(kits: Kits): Promise<Kits>;
}