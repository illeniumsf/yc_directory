import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Improved font loading: single import, all weights/styles
const workSans = localFont({
  src: [
    { path: './fonts/WorkSans-Black.ttf', weight: '900', style: 'normal' },
    { path: './fonts/WorkSans-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './fonts/WorkSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/WorkSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/WorkSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/WorkSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/WorkSans-Light.ttf', weight: '300', style: 'normal' },
  ],
  variable: '--font-work-sans',
  display: 'swap',
})

// Metadata for SEO & accessibility
