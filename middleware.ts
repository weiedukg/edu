import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "ky"]
const defaultLocale = "en"

export function middleware(request: NextRequest) {
  // 检查路径名中是否有任何支持的区域设置
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // 如果没有区域设置，则重定向
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale

    // 例如，传入的请求是 /products
    // 新的 URL 现在是 /en/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // 跳过所有内部路径 (_next) 和静态文件 (带有点号 . 的路径)
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
}
