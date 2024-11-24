import { NextResponse } from 'next/server'
 
const user = false;

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    
    if (!user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
matcher: ['/blogs', '/services', '/blogs/specialblogs'],
}