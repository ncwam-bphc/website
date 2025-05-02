import { NextResponse, type NextRequest } from "next/server";
import z from "zod";
import { auth, generateSignInLink } from "~/server/auth";

const bodySchema = z.object({
  email: z.string().trim().nonempty().email(),
});

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });
  if (session?.user.email !== "f20230740@hyderabad.bits-pilani.ac.in")
    return new NextResponse("Unauthorized", { status: 401 });
  const parsed = bodySchema.safeParse(await req.json());
  if (!parsed.success)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const { email } = parsed.data;
  const link = await generateSignInLink(email);
  return new NextResponse(JSON.stringify({ link }), { status: 200 });
}
