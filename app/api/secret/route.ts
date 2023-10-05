import { NextResponse } from "next/server";

export async function GET(request: Request) {
   try {
      return NextResponse.json({
         pytorch:
            "https://drive.google.com/drive/folders/1M_7Z2wXyCdKfe5k_PgF9oACazyKbPdIn?usp=drive_link",
         tensorflow:
            "https://drive.google.com/drive/folders/1g-wLd-33gdxIxVym4RSGMJLehmAldMuW?usp=drive_link",
      });
   } catch (error) {}
}
