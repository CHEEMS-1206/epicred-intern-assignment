import './globals.css';

import Header from '../components/Header';

export const metadata = {
  title: "My Next.js App",
  description: "A sample Next.js app with Tailwind CSS and Material-UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
