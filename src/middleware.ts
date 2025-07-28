import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
    console.log("Going through middleware")
    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"],
}