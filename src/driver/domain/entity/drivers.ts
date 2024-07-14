export class Drivers {
   constructor(
       readonly id: string | null,
       readonly kit_id: string,
       readonly name: string,
       readonly last_name: string,
       readonly pin: string,
       readonly image: string
    ) {}   
}