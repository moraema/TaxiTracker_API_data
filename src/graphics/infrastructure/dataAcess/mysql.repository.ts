import { query } from "../../../database/config";
import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import { Graphics } from "../../domain/entity/graphics";

export class MysqlGraphics implements GraphicsRepository {
    //obtener grafica de calificaciones por dia
    GetDailyRatingsByDriverAndDate(
        kit_id: string
    ): Promise<Graphics | null> {
        const sql = "CALL AverageStarsByKitId(?)";

        return query(sql, [kit_id]).then((result: any) => {
            return result[0][0] as Graphics;
        });
    }

    //grafica de distancia promedio por horas en una semana (microservicio)
    GetTravelsByDriverDistance(
        kit_id: string,
        date: string
    ): Promise<Graphics | null> {
        const sql = "CALL GetDistanceTravlesByDateRange(?, ?)";

        return query(sql, [kit_id, date]).then((result: any) => {
            return result[0][0] as Graphics;
        });
    }

    //grafica de duracion de viajes por horas en una semana (microservicio)
    durationTravelsbyDay(
        kit_id: string,
        date: string
    ): Promise<Graphics | null> {
        const sql = "CALL GetDurationTravlesByDateRange(?, ?)";

        return query(sql, [kit_id, date]).then((result: any) => {
            return result[0][0] as Graphics;
        });
    }

    //grafica de cantidad de viajes en una semana
    travelsbyweek(kit_id: string): Promise<Graphics | null> {
        const sql = "CALL CountWeekTravelsByKitId(?)";

        return query(sql, [kit_id]).then((result: any) => {
            return result[0][0] as Graphics;
        });
    }

    // grafica de pastel de distribucion de cuadrantes (microservicio)
    travelsbyquadrant(kit_id: string): Promise<Graphics | null> {
        const sql = "CALL GetAllTravelsDataWithCoordinatesByKitId(?)";

        return query(sql, [kit_id]).then((result: any) => {
            return result[0][0] as Graphics;
        });
    }

    //grafica de tiempo de actividad por dia de la semana (microservicio)
    activityTime(kit_id: string): Promise<Graphics | null> {
        const sql = "CALL GetActivityTime(?)";

        return query(sql, [kit_id]).then((result: any) => {
            return result[0][0] as Graphics;
        });
    }
}