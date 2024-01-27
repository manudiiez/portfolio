import Footer from '@/components/Footer'
import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Manuel Díez - Desarrollador de Software',
  description: '¡Hola! Soy Manuel Diez de Oñate, un apasionado desarrollador de software con experiencia en construir soluciones web y móviles innovadoras. Mi enfoque se centra en crear aplicaciones robustas, eficientes y fáciles de usar. Explora mi portfolio para descubrir proyectos emocionantes y aprender más sobre mis habilidades en tecnologías como JavaScript, React, Node.js y más.',
  // image: '/preview.jpg',
  // keywords: [
  //   'desarrollador de software',
  //   'programador web',
  //   'desarrollo de aplicaciones',
  //   'JavaScript',
  //   'React',
  //   'Node.js',
  //   'Next.js',
  //   'MongoDB',
  //   'programación de interfaces de usuario',
  //   'aplicaciones móviles',
  //   'desarrollo web frontend',
  //   'desarrollo web backend',
  //   'tecnologías web modernas',
  //   'soluciones innovadoras',
  //   'experiencia en desarrollo full-stack'
  // ],
  // author: 'Manuel Diez de Oñate',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <Navbar />
          <Sidebar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
