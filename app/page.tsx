"use client" // This component needs to be a Client Component for scroll functionality

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Clock,
  Mail,
  CreditCard,
  Shield,
  PenTool,
  Brain,
  Target,
  Lightbulb,
  Smile,
  Briefcase,
  Flame,
  Bell,
  Lamp,
} from "lucide-react"
import { Carousel } from "@/components/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" // Import Accordion components

export default function CaligrafiaFacilLanding() {
  const carouselImages = [
    { src: "/images/exercise-1.png", alt: "Página de exercício de caligrafia 1" },
    { src: "/images/exercise-2.png", alt: "Página de exercício de caligrafia 2" },
    { src: "/images/exercise-3.png", alt: "Página de exercício de caligrafia 3" },
    { src: "/images/exercise-4.png", alt: "Página de exercício de caligrafia 4" },
    { src: "/images/exercise-5.png", alt: "Página de exercício de caligrafia 5" },
  ]

  const testimonialImages = [
    { src: "https://cdn.xquiz.co/images/a4e02cdf-12ef-429c-b61a-1e150e8478aa", alt: "Depoimento de aluno 1" },
    { src: "https://cdn.xquiz.co/images/dccb3027-cc18-449d-a0c2-90748a66bc42", alt: "Depoimento de aluno 2" },
    { src: "https://cdn.xquiz.co/images/09b80650-80c3-4e55-a2ea-c71167282ec3", alt: "Depoimento de aluno 3" },
    { src: "https://cdn.xquiz.co/images/5f60deea-223e-4329-8831-682d7b7c9753", alt: "Depoimento de aluno 4" },
    { src: "https://cdn.xquiz.co/images/3937a27a-8630-470e-ad84-e89e643e9b2c", alt: "Depoimento de aluno 5" },
  ]

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center lg:text-left w-full">
              <div className="text-blue-500 font-dancing-script text-4xl sm:text-3xl lg:text-4xl">Caligrafia Fácil</div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-red-600 leading-tight break-words">
                TRANSFORME SUA CALIGRAFIA EM APENAS 2 SEMANAS!
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Se você quer escrever melhor, mais bonito e com mais agilidade, o Método Caligrafia Fácil é pra você!
                Para adultos e crianças!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-base sm:text-lg">+300 exercícios para melhorar sua escrita</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-base sm:text-lg">Resultados visíveis em até 2 semanas</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-base sm:text-lg">Método prático e divertido</span>
                </div>
              </div>
              {/* Removed the button and added a spacing div */}
              <div className="h-12 sm:h-16 lg:h-20" aria-hidden="true" />
            </div>

            {/* Desktop comparison - hidden on mobile */}
            <div className="hidden lg:flex justify-center w-full">
              <div className="relative w-full max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-white text-red-600 px-4 py-2 rounded-t-lg font-bold border border-gray-200">
                      ANTES
                    </div>
                    <div className="bg-white p-4 border border-gray-200 rounded-b-lg">
                      <Image
                        src="https://cdn.xquiz.co/images/5f8da06f-b89b-4e3d-b73e-c121aa502ae6"
                        alt="Caligrafia antes - escrita desorganizada"
                        width={200}
                        height={200}
                        className="w-full h-auto rounded max-w-[180px] mx-auto"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white text-green-600 px-4 py-2 rounded-t-lg font-bold border border-gray-200">
                      DEPOIS
                    </div>
                    <div className="bg-white p-4 border border-gray-200 rounded-b-lg">
                      <Image
                        src="https://cdn.xquiz.co/images/fb05578a-60d6-4078-9db6-57a781422384"
                        alt="Caligrafia depois - escrita organizada e bonita"
                        width={200}
                        height={200}
                        className="w-full h-auto rounded max-w-[180px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile comparison - shown only on mobile */}
          <div className="lg:hidden mt-8 w-full">
            <div className="bg-white rounded-2xl shadow-lg p-4 mx-auto max-w-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-red-600 font-bold text-lg mb-2">ANTES</div>
                  <Image
                    src="https://cdn.xquiz.co/images/5f8da06f-b89b-4e3d-b73e-c121aa502ae6"
                    alt="Caligrafia antes - escrita desorganizada"
                    width={150}
                    height={200}
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-bold text-lg mb-2">DEPOIS</div>
                  <Image
                    src="https://cdn.xquiz.co/images/fb05578a-60d6-4078-9db6-57a781422384"
                    alt="Caligrafia depois - escrita organizada e bonita"
                    width={150}
                    height={200}
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 sm:py-16 w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-500 mb-12 px-4">
              Benefícios que você terá já na primeira semana:
            </h2>

            {/* Mobile Layout - Stacked Cards */}
            <div className="lg:hidden space-y-6 max-w-sm mx-auto">
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <PenTool className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Escrita mais rápida e bonita</h3>
                  <p className="text-gray-600 text-sm">
                    Aprenda técnicas para tornar sua escrita mais ágil e esteticamente agradável.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Brain className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Aumento da concentração</h3>
                  <p className="text-gray-600 text-sm">
                    Os exercícios de caligrafia ajudam a melhorar o foco e a concentração.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Target className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Coordenação motora aprimorada</h3>
                  <p className="text-gray-600 text-sm">
                    Desenvolva habilidades motoras finas essenciais para muitas atividades cotidianas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Aumento da capacidade de raciocínio</h3>
                  <p className="text-gray-600 text-sm">
                    Estimule conexões cerebrais importantes durante o processo de aprendizagem da caligrafia.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Smile className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Melhoria na comunicação e autoestima</h3>
                  <p className="text-gray-600 text-sm">
                    Ganhe confiança com uma escrita mais clara e comunicação aprimorada.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Desktop Layout - Grid */}
            <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <PenTool className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Escrita mais rápida e bonita</h3>
                  <p className="text-gray-600">
                    Aprenda técnicas para tornar sua escrita mais ágil e esteticamente agradável.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Aumento da concentração</h3>
                  <p className="text-gray-600">
                    Os exercícios de caligrafia ajudam a melhorar o foco e a concentração.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Coordenação motora aprimorada</h3>
                  <p className="text-gray-600">
                    Desenvolva habilidades motoras finas essenciais para muitas atividades cotidianas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow md:col-start-1 lg:col-start-2">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Aumento da capacidade de raciocínio</h3>
                  <p className="text-gray-600">
                    Estimule conexões cerebrais importantes durante o processo de aprendizagem da caligrafia.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow md:col-start-2 lg:col-start-3">
                <CardContent className="p-6 text-center">
                  <Smile className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Melhoria na comunicação e autoestima</h3>
                  <p className="text-gray-600">Ganhe confiança com uma escrita mais clara e comunicação aprimorada.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Children Section - Mobile specific */}
      <section className="lg:hidden py-12 bg-white w-full">
        <div className="w-full px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-500 mb-6">
              PREPARE SEU FILHO PARA UM FUTURO BRILHANTE! ✨
            </h2>
            <p className="text-gray-700 text-center leading-relaxed mb-8 text-sm">
              O método é ideal tanto para adultos quanto para crianças que estão na fase de alfabetização e aprendendo a
              escrever, faça seu filho se destacar estimulando a escrita com diversão e confiança!
            </p>
            <div className="w-full">
              <Image
                src="/images/children-section-image.png"
                alt="Criança escrevendo em um caderno"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exercises Section */}
      <section className="py-12 sm:py-16 bg-white lg:bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 mb-6">
              Veja como são os exercícios:
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              São 5 módulos com mais de 300 páginas para melhorar o desempenho cognitivo e a escrita!
            </p>
            <div className="max-w-2xl mx-auto mb-8">
              <Carousel images={carouselImages} />
            </div>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full text-sm sm:text-base"
              onClick={scrollToPricing}
            >
              QUERO COMEÇAR AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 sm:py-16 w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-500 mb-12">
              O que você vai aprender com o Método Caligrafia Fácil?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold mb-2">🎯 Exercícios para coordenação motora</h3>
                      <p className="text-gray-700 text-sm">
                        Atividades especialmente desenvolvidas para aprimorar suas habilidades motoras finas,
                        fundamentais para uma boa caligrafia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-pink-50 border-pink-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PenTool className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold mb-2">✏️ Caligrafia prática com treino diário</h3>
                      <p className="text-gray-700 text-sm">
                        Rotinas de treino progressivas que garantem evolução constante na sua escrita, com exercícios
                        simples e eficazes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded text-green-500 flex items-center justify-center text-xs font-bold">
                        9
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold mb-2">📚 9 tipos de alfabetos para treino</h3>
                      <p className="text-gray-700 text-sm">
                        Aprenda diferentes estilos de escrita, desde o básico até estilos artísticos, ampliando seu
                        repertório caligráfico.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PenTool className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold mb-2">✍️ Técnicas de lettering</h3>
                      <p className="text-gray-700 text-sm">
                        Domine técnicas de lettering para transformar sua escrita em verdadeiras obras de arte, com
                        técnicas acessíveis para todos os níveis.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full text-sm sm:text-base"
                onClick={scrollToPricing}
              >
                QUERO COMPRAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-500 mb-12">
              Veja o que nossos alunos estão dizendo:
            </h2>
            <div className="flex justify-center items-center max-w-2xl mx-auto">
              <Carousel images={testimonialImages} interval={4000} />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Shorts Section */}
      <section className="py-12 sm:py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 mb-8">
              Assista a um de nossos Shorts:
            </h2>
            <div className="flex justify-center">
              <div className="max-w-xs mx-auto w-full">
                {/* Limit width for Shorts format */}
                <div className="relative" style={{ paddingBottom: "177.77%" }}>
                  {/* 9:16 aspect ratio */}
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/orB0GUwa-2s?controls=0&modestbranding=1&rel=0"
                    title="Depoimentos (Caligrafia Fácil)"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-blue-50 py-12 sm:py-16 w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6">
              <span className="text-red-600">Comprando HOJE:</span>{" "}
              <span className="text-blue-500">Você ganha um Bônus Exclusivo e totalmente de graça!</span>
            </h2>
            <div className="text-center mb-8">
              <Image
                src="https://i.imgur.com/q9ULC7x_d.webp?maxwidth=760&fidelity=grand"
                alt="Ebook de bônus com dicas e plano de treino"
                width={200}
                height={300}
                className="mx-auto mb-6 max-w-[150px] sm:max-w-[200px]"
              />
            </div>
            <p className="text-gray-700 text-center leading-relaxed mb-8 text-sm sm:text-base">
              Ao adquirir o Método Caligrafia Fácil, você recebe GRATUITAMENTE um Ebook completo com dicas práticas de
              como melhorar sua caligrafia, técnicas avançadas e dicas de materiais de boa qualidade (Canetas, papéis,
              etc...) e um mega plano de treino diário com duração de 8 SEMANAS para você aprimorar sua escrita de forma
              mais rápida e eficaz.
            </p>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-full text-sm sm:text-base"
              >
                🚨 OFERTA DISPONÍVEL SOMENTE HOJE!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-12 sm:py-16 bg-white w-full">
        {/* Added id here */}
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-12">
              Escolha seu pacote ideal:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Basic Package */}
              <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Briefcase className="w-6 h-6 text-amber-600" />
                      <h3 className="text-xl font-bold">Pacote Básico</h3>
                    </div>
                    <Image
                      src="https://i.imgur.com/hMRbwDB_d.webp?maxwidth=760&fidelity=grand"
                      alt="Método Caligrafia Fácil"
                      width={120}
                      height={150}
                      className="mx-auto mb-4"
                    />
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Combo +300 atividades caligrafia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Módulo de coordenação motora</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Módulo de alfabeto cursivo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Módulo de lettering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm">Bônus exclusivo!</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-500 line-through text-sm mb-1">De R$97</div>
                    <div className="text-4xl font-bold text-green-600 mb-4">R$14,90</div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm sm:text-base"
                      onClick={() => (window.location.href = "https://go.paradisepagbr.com/210d3")}
                    >
                      EU QUERO O PACOTE BÁSICO
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Package */}
              <Card className="border-2 border-purple-300 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white px-3 py-0.5 rounded-full text-xs">MAIS VENDIDO</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Flame className="w-6 h-6 text-orange-500" />
                      <h3 className="text-xl font-bold">Pacote Premium</h3>
                    </div>
                    <div className="relative">
                      <Image
                        src="https://i.imgur.com/BVhpKdk_d.webp?maxwidth=760&fidelity=grand"
                        alt="Método Caligrafia Fácil Premium"
                        width={120}
                        height={150}
                        className="mx-auto mb-4"
                      />
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                        PREMIUM
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Tudo do pacote básico</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">+250 exercícios caligrafia bônus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Mega pack atividades infantis (+350 páginas)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Apostila relaxa para crianças</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Alfabeto letra de forma</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Alfabeto letra itálica</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Alfabeto letra medieval</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Alfabeto letra justa cores + vídeo</span>
                    </div>
                    <div className="flex items-center gap-2 bg-yellow-50 p-2 rounded">
                      <Lamp className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm font-semibold">
                        Benefício Exclusivo: Acesso vitalício + Atualizações mensais
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-500 line-through text-sm mb-1">De R$197</div>
                    <div className="text-4xl font-bold text-green-600 mb-4">R$29,90</div>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-sm sm:text-base"
                      onClick={() => (window.location.href = "https://go.paradisepagbr.com/itlsxnt6pg")}
                    >
                      EU QUERO O PACOTE PREMIUM AGORA
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-gray-50 py-12 sm:py-16 w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-500 mb-12">
              Compra 100% Segura
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Garantia de 7 dias</h3>
                  <p className="text-gray-600 text-sm">Satisfação garantida ou seu dinheiro de volta em até 7 dias.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Acesso imediato via e-mail</h3>
                  <p className="text-gray-600 text-sm">
                    Após a compra, você receberá acesso imediato ao conteúdo digital.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <CreditCard className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Pagamento por Pix ou cartão</h3>
                  <p className="text-gray-600 text-sm">Escolha a forma de pagamento que for mais conveniente.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Compra protegida com total segurança</h3>
                  <p className="text-gray-600 text-sm">Seus dados estão protegidos por criptografia avançada.</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-4 text-sm sm:text-lg rounded-full"
                onClick={scrollToPricing}
              >
                QUERO COMEÇAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 mb-12">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="item-1" className="mb-4 border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  1️⃣ O que é o Caligrafia Fácil?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 mt-2 leading-relaxed">
                  Um material 100% digital para crianças, jovens e adultos aprenderem a escrever bonito de forma prática
                  e divertida.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="mb-4 border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  2️⃣ Como recebo o material?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 mt-2 leading-relaxed">
                  Você recebe tudo por e-mail e WhatsApp logo após a confirmação do pagamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="mb-4 border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  3️⃣ Pra quem é indicado?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 mt-2 leading-relaxed">
                  Serve para todas as idades — desde crianças em fase de alfabetização até adultos que querem melhorar a
                  caligrafia.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="mb-4 border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  4️⃣ Preciso pagar frete?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 mt-2 leading-relaxed">
                  Não! É totalmente digital, basta imprimir em casa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="mb-4 border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  5️⃣ Tem garantia?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 mt-2 leading-relaxed">
                  Sim! Você tem 7 dias de garantia incondicional para pedir reembolso se não gostar.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4A00B0] to-[#8A2BE2] text-white py-12 sm:py-16 w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-4xl sm:text-5xl font-dancing-script mb-4">Caligrafia Fácil</div>
            <div className="text-sm mb-4">© 2025</div>
            <p className="text-sm opacity-90 max-w-3xl mx-auto leading-relaxed mb-6">
              Todos os direitos reservados - Este material é protegido por direitos autorais com registro no INPI e
              Biblioteca Nacional. Qualquer reprodução, distribuição ou comercialização não autorizada constitui
              violação dos direitos autorais e está sujeita às medidas cíveis e criminais previstas na Lei nº 9.610/98
            </p>
            <p className="text-sm opacity-90">Feito com {"<3"} para ajudar você a melhorar sua escrita</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
