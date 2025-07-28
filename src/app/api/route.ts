import sendEmail from "@/utils/email-service";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    // validation to be done by middleware
    const data = await request.json();
    const { name, email, message } = data?.data;
    const status = await sendEmail( name, email, message )
    return new Response(`Data recieved with status ${status.success}`, {
        status: 200
    });
}