import data from "@/data/equipments.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
   try {
      const { origin } = new URL(req.url);
      const response = {
         numberOfEquipments: data.length,
         data: [
            ...data.map((equipment) => {
               equipment.imageUrl = origin + equipment.imageUrl;
               return equipment;
            }),
         ],
      };
      return NextResponse.json(response);
   } catch (error) {
      console.log("[EQUIPMENTS_GET]", error);
      return new NextResponse("Something went wrong", { status: 500 });
   }
}
