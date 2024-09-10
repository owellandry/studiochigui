// app/data/politica-cookie/page.tsx

"use client"

import { Breadcrumbs, BreadcrumbItem, Link } from "@nextui-org/react";
import { MdCookie } from "react-icons/md";
import { RiHomeSmile2Line } from "react-icons/ri";

export default function CookiePage() {
  return (
    <div className="min-h-screen w-full h-full flex flex-col bg-gray-900 text-gray-100 transition-colors duration-300">
      {/* Breadcrumb Navigation */}
      <div className="py-8 px-7 w-full">
        <Breadcrumbs separator=">" className="text-gray-300">
          <BreadcrumbItem startContent={<Link href="/"><RiHomeSmile2Line className="text-gray-300 w-6 h-6" /></Link>}>
            <Link href="/" className="hover:text-gray-200 transition duration-200">Inicio</Link>
          </BreadcrumbItem>
          <BreadcrumbItem startContent={<MdCookie className="text-gray-300 w-6 h-6" />}>
            <span className="font-semibold text-gray-300">Política de Cookies</span>
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>

      {/* Main Content - Full Width & Height */}
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-gray-800 shadow-2xl rounded-2xl max-w-3xl w-full p-8 m-6 transform transition hover:scale-105 duration-500 ease-in-out">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-6 text-center">Política de Cookies</h1>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Aquí explicamos qué son las cookies, cómo las utilizamos en nuestro sitio, y cómo puedes gestionarlas.
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {/* ¿Qué son las cookies? */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-200 mb-4">¿Qué son las cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web.
                Se utilizan para recordar tus preferencias y mejorar tu experiencia de navegación.
              </p>
            </section>

            {/* ¿Cómo usamos las cookies? */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-200 mb-4">¿Cómo usamos las cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos cookies para proporcionar funcionalidades básicas, analizar el tráfico del sitio, y personalizar
                el contenido según tus preferencias. Puedes aceptar o rechazar las cookies en cualquier momento.
              </p>
            </section>

            {/* Cookies obligatorias */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-200 mb-4">Cookies obligatorias</h2>
              <p className="text-gray-300 leading-relaxed">
                Estas cookies son esenciales para el funcionamiento de nuestro sitio web. No pueden desactivarse en nuestro sistema,
                ya que sin ellas ciertas partes del sitio no funcionarán correctamente.
              </p>
            </section>

            {/* Cookies de terceros */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-200 mb-4">Cookies de terceros</h2>
              <p className="text-gray-300 leading-relaxed">
                Nuestro sitio utiliza servicios externos que pueden almacenar cookies en tu navegador para rastrear tu actividad y mejorar la experiencia.
                Esto incluye análisis y publicidad personalizada.
              </p>
            </section>

            {/* Gestión de cookies */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-200 mb-4">¿Cómo puedes gestionar las cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Puedes configurar tu navegador para que te notifique cuando se envíen cookies, o directamente para bloquearlas.
                Sin embargo, al bloquear algunas cookies, la funcionalidad de nuestro sitio web podría verse afectada.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
