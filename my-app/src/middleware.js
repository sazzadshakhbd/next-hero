import { NextResponse } from 'next/server'
 
const user = true;

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    

    const cookies = request.cookies.get('token');
    const coo = 'next-superhero';
    if (!cookies || cookies.value !== coo) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
matcher: ['/blogs', '/services', '/blogs/specialblogs'],
}