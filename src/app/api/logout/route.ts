import AuthService from "@/modules/auth/services/auth-services";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    AuthService.destroySessions();

    return NextResponse.redirect(new URL('/portal/login', req.url))
}