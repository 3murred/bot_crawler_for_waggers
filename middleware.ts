import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Verificar se o usuário está autenticado
  const isAuthenticated = request.cookies.has("auth_token");
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");

  // if (!isAuthenticated && !isAuthPage && request.nextUrl.pathname !== "/") {
  //   return NextResponse.redirect(new URL("/auth/login", request.url))
  // }

  // if (isAuthenticated && isAuthPage) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url))
  // }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
