import { query } from "../../../database/config";
import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import { Graphics } from "../../domain/entity/graphics";


export class MysqlGraphics implements GraphicsRepository {
   
    GetDailyRatingsByDriverAndDate(kit_id: string, date: string): Promise<Graphics | null> {
        const sql = 'CALL GetDailyRatingsByKitAndDate (?, ?)';

        return query(sql, [kit_id, date])
           .then((result: any) => {
            return result[0][0] as Graphics;
           })
    }

    GetTravelsByDriverDistance(kit_id: string, date: string): Promise<Graphics | null> {
        const sql = 'CALL GetTravelDataByKitId (?, ?)';

        return query(sql, [
            kit_id,
            date])
          .then((result: any) => {
            return result[0][0] as Graphics;
          })
    }

   durationTravelsbyDay(kit_id: string, date: string): Promise<Graphics | null> {
       const sql = 'CALL GetDurationTravlesByDayAndDate(?, ?)';

       return query(sql, [
        kit_id,
        date
       ])
       .then((result: any) => {
        return result[0][0] as Graphics;
       })
   }


   travelsbyweek(kit_id: string): Promise<Graphics | null> {
       const sql = 'CALL GetLastWeekTravelDataByKitId(?)';

       return query(sql, [
        kit_id
       ])
       .then((result: any) => {
        return result[0][0] as Graphics;
       })
   }

   travelsbyquadrant(kit_id: string): Promise<Graphics | null> {
       const sql = 'CALL GetLastWeekTravelDataWithCoordinatesByKitId(?)';

       return query(sql, [
        kit_id
       ])
       .then((result: any) => {
        return result[0][0] as Graphics;
       })
   }

   activityTime(kit_id: string): Promise<Graphics | null> {
       const sql = 'CALL GetActivityTime(?)';

       return query(sql, [
        kit_id
       ])
       .then((result: any) => {
        return result[0][0] as Graphics;
       })
   }
}