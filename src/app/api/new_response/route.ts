import { NextResponse, type NextRequest } from "next/server";
import z from "zod";
import { env } from "~/env";
import onAbstractDataReceived from "~/server/webhookHandlers/abstract";
import onManuscriptDataReceived from "~/server/webhookHandlers/manuscript";

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
      const abstractResponse = await fetch(env.ABSTRACT_URL);
      try {
        await onAbstractDataReceived(await abstractResponse.json());
        return NextResponse.json({ success: true }, { status: 200 });
      } catch (e) {
        console.error((e as Error).stack);
        return NextResponse.json(
          { error: (e as Error).message },
          { status: 500 },
        );
      }
      break;
    case "payment":
      return NextResponse.json({ success: true }, { status: 200 });
    case "manuscript":
      const manuscriptResponse = await fetch(env.MANUSCRIPT_URL);
      try {
        await onManuscriptDataReceived(await manuscriptResponse.json());
        return NextResponse.json({ success: true }, { status: 200 });
      } catch (e) {
        console.error((e as Error).stack);
        return NextResponse.json(
          { error: (e as Error).message },
          { status: 500 },
        );
      }
      break;
  }
}
