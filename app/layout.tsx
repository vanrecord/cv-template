import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HUM SOPHA - Softwaore Developer CV',
  description: 'Professional CV of HUM SOPHA, Web Developer with 4+ years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @page {
            size: A4;
            margin: 12mm 15mm; /* Further reduced margins */
          }
          
          @media print {
            html, body {
              width: 210mm;
              height: 297mm;
              margin: 0;
              padding: 0;
            }
            
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            /* Improved spacing control */
            .print\\:compress-space {
              margin-bottom: 0.5rem !important;
              padding-bottom: 0.5rem !important;
            }
            
            /* Tighter section spacing */
            section {
              margin-bottom: 0.5rem !important;
              padding-bottom: 0 !important;
            }
            
            /* Reduce gaps between elements */
            .space-y-4 > * {
              margin-top: 0.5rem !important;
              margin-bottom: 0.5rem !important;
            }
            
            /* Keep headings with content */
            h1, h2, h3 {
              margin-bottom: 0.5rem !important;
            }
            
            /* Enhanced break control */
            .print\\:keep-together {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            .print\\:break-before {
              page-break-before: always !important;
              break-before: page !important;
            }
            
            .print\\:break-after {
              page-break-after: always !important;
              break-after: page !important;
            }
            
            /* Keep headings with their content */
            h1, h2, h3, h4, h5, h6 {
              page-break-after: avoid !important;
              break-after: avoid !important;
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            /* Keep lists together */
            ul, ol, dl {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            /* Keep list items together */
            li {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            /* Keep sections together */
            section {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            /* Keep work experience entries together */
            .work-experience {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
              margin-bottom: 0.75rem !important;
              padding: 0 !important;
            }
            
            /* Orphan and widow control */
            p, h1, h2, h3, h4, h5, h6 {
              orphans: 3;
              widows: 3;
            }
            
            /* Tighter overall spacing */
            .print\\:p-0 {
              padding: 0 !important;
            }
            
            .print\\:mt-1 {
              margin-top: 0.25rem !important;
            }
            
            /* Tighter list spacing */
            .space-y-2 > * + * {
              margin-top: 0.25rem !important;
            }
            
            /* Compress skill categories */
            .print\\:gap-2 {
              gap: 0.25rem !important;
            }
            
            /* Adjust text sizes for better space usage */
            .print\\:text-[16px] {
              font-size: 13.5px !important; /* Slightly smaller font */
            }
            
            .print\\:leading-[1.3] {
              line-height: 1.15 !important;
            }
            
            /* Header area compression */
            .print\\:p-3 {
              padding: 0.5rem !important;
            }
            
            .print\\:gap-4 {
              gap: 0.5rem !important;
            }

            /* Improved text flow */
            p {
              text-align: justify !important;
              max-width: 100% !important;
              overflow-wrap: break-word !important;
              word-wrap: break-word !important;
              orphans: 4 !important;
              widows: 4 !important;
              margin-bottom: 0.5rem !important;
              display: block !important;
              height: auto !important;
              min-height: 0 !important;
            }
            
            /* Prevent unwanted breaks within paragraphs */
            .print\\:keep-text-together {
              page-break-inside: avoid !important;
              break-inside: avoid-page !important;
              display: inline-block !important;
              width: 100% !important;
            }
            
            /* Force text to fill available space */
            .print\\:fill-space {
              min-height: 0 !important;
              height: auto !important;
              display: block !important;
            }

            /* Add these new styles */
            .text-base.print\\:text-\\[16px\\].text-gray-700.leading-relaxed.print\\:leading-\\[1\\.3\\] {
              display: block !important;
              column-fill: balance !important;
              break-inside: avoid-column !important;
              text-align-last: justify !important;
              margin-bottom: 0 !important;
              min-height: 0 !important;
              height: auto !important;
              position: relative !important;
            }

            /* Prevent orphaned text at page breaks */
            section {
              break-inside: avoid-page !important;
            }

            /* Better spacing control for text blocks */
            .print\\:compress-space {
              margin-bottom: 0.25rem !important;
              padding-bottom: 0.25rem !important;
            }

            /* Optimize space usage */
            .print\\:optimize-space {
              min-height: 0 !important;
              height: auto !important;
              overflow: hidden !important;
            }

            /* Adjust Professional Summary section spacing */
            section:first-of-type {
              margin-top: 0.5rem !important;
              padding-top: 0 !important;
            }

            /* Optimize first page layout */
            .print\\:optimize-first-page {
              margin-top: 0 !important;
              padding-top: 0 !important;
            }

            /* Improve vertical space utilization */
            .print\\:fill-vertical-space {
              display: flex !important;
              flex-direction: column !important;
              justify-content: flex-start !important;
              height: auto !important;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

