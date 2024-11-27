import { NextResponse, type NextRequest } from "next/server";
import z from "zod";
import { env } from "~/env";
import onAbstractDataReceived from "~/server/webhookHandlers/abstract";

const responseTypes = ["abstract", "payment", "manuscript"] as const;

const bodySchema = z.object({
  responseType: z.enum(responseTypes),
  key: z.string(),
});

export async function POST(req: NextRequest) {
  const parsed = bodySchema.safeParse(await req.json());
  if (!parsed.success)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const { responseType, key } = parsed.data;
  if (key !== env.WEBHOOK_KEY)
    return NextResponse.json({ error: "Invalid key" }, { status: 401 });
  switch (responseType) {
    case "abstract":
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwgzXKfICv3eUX6Azd-o61Aip-zDLlMTHxzdtON8vthypq5w4A2iE5BpeKRKW92fkkr/exec?apiKey=pikachubphc",
      );
      try {
        await onAbstractDataReceived(await response.json());
        NextResponse.json({ success: true }, { status: 200 });
      } catch (e) {
        console.error((e as Error).stack);
        return NextResponse.json(
          { error: (e as Error).message },
          { status: 500 },
        );
      }
    case "payment":
      return NextResponse.json({ success: true }, { status: 200 });
    case "manuscript":
      return NextResponse.json({ success: true }, { status: 200 });
  }
}
