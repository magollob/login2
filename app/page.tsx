"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  BookOpen,
  Users,
  Utensils,
  ShoppingCart,
  DollarSign,
  Star,
  Clock,
  ChefHat,
  Sparkles,
  Gift,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function MorangoDoAmorCurso() {
  const [currentSection, setCurrentSection] = useState(0)

  const sections = [
    "Introdução",
    "Utensílios Essenciais",
    "Ingredientes e Medidas",
    "Passo a Passo Completo",
    "Dicas Técnicas da Fabi",
    "Variações Criativas",
    "Precificação e Lucro",
    "Apresentação e Vendas",
    "Grupo VIP + Bônus",
    "Conclusão",
  ]

  const handleWhatsAppRedirect = () => {
    window.open("https://chat.whatsapp.com/Jl2RNXTjUJLCjORaeyyNKf", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Header com Logo */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <img src="/images/logo-chocolicias.png" alt="Chocolicias da Fabi" className="h-12 w-12 mr-3" />
            <div className="text-center">
              <h1 className="text-lg font-bold text-pink-600">Mini Curso</h1>
              <p className="text-sm text-pink-500">Morango do Amor</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Badge className="bg-pink-500 text-white mb-4 text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              VIRAL NAS REDES SOCIAIS
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 leading-tight">Morango do Amor Viral</h1>
            <p className="text-lg text-pink-600 mb-6 font-medium">Aprenda a Fazer, Encantar e Lucrar</p>
            <p className="text-base text-pink-500 mb-6">
              Mini curso completo com receita, precificação, dicas de venda e bônus criativo 🍓
            </p>

            <div className="relative mb-8">
              <img
                src="/images/morangos-vitrine.webp"
                alt="Morangos do Amor na vitrine"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white/80 rounded-xl">
                <Heart className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-pink-700">Viral</p>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl">
                <DollarSign className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-pink-700">Lucrativo</p>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl">
                <Clock className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-pink-700">Rápido</p>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl">
                <Star className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-pink-700">Fácil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sumário */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-pink-500 mr-3" />
                <h2 className="text-2xl font-bold text-pink-800">📚 Sumário</h2>
              </div>

              <div className="space-y-3">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      currentSection === index
                        ? "bg-pink-100 border-l-4 border-pink-500 text-pink-800"
                        : "bg-gray-50 hover:bg-pink-50 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        {index + 1}. {section}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 1: Introdução */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3" />
                Introdução
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">O doce viral que conquistou as redes</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    O Morango do Amor Viral virou febre nas redes — e quem faz, não dá conta de tantos pedidos.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Com uma casquinha crocante e visual irresistível, esse doce é perfeito para lucrar com algo simples
                    ou para surpreender quem você ama com uma delícia encantadora.
                  </p>

                  <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400 mb-6">
                    <h4 className="font-semibold text-pink-700 mb-3">🎯 Neste mini curso, você vai aprender:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-3" />
                        <span className="text-gray-700">Receita passo a passo</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-3" />
                        <span className="text-gray-700">Técnicas de modelagem profissional</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-3" />
                        <span className="text-gray-700">Precificação realista</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-3" />
                        <span className="text-gray-700">Variações criativas</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-3" />
                        <span className="text-gray-700">Estratégias de venda e apresentação</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-lg">
                    <p className="font-semibold">Vamos transformar morangos em renda (ou em carinho)? 🍓💰</p>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/images/morango-cortado.webp"
                    alt="Morango do Amor cortado mostrando o recheio"
                    className="w-full max-w-sm mx-auto rounded-xl shadow-md"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">Para quem é este mini curso</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Iniciantes na confeitaria</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Quem busca renda extra</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Empreendedores do doce</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Donas de casa criativas</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Confeiteiros experientes</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Quem ama inovar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 2: Utensílios Essenciais */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <Utensils className="w-6 h-6 mr-3" />
                Utensílios Essenciais
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">O que você precisa para começar</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-pink-600 text-lg">🔧 Utensílios básicos:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          <span className="text-gray-700">Panela de fundo grosso</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          <span className="text-gray-700">Espátula de silicone</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          <span className="text-gray-700">Termômetro culinário (opcional)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          <span className="text-gray-700">Palitos de madeira</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-pink-600 text-lg">📦 Para finalização:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          <span className="text-gray-700">Papel manteiga</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          <span className="text-gray-700">Tigelas e colheres</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          <span className="text-gray-700">Luvas (higiene)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          <span className="text-gray-700">Palitos de churrasco</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator className="bg-pink-200" />

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">Dicas para agilizar sua produção</h3>

                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-200">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Star className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          <strong>Organize tudo antes:</strong> Separe todos os utensílios e ingredientes antes de
                          começar. Isso economiza tempo e evita erros.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Star className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          <strong>Prepare em lotes:</strong> Faça o brigadeiro e a calda em quantidades maiores para
                          produzir mais unidades de uma vez.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Star className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          <strong>Use formas de silicone:</strong> Facilitam a desmoldagem e dão acabamento mais
                          profissional.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 3: Ingredientes e Medidas */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <ShoppingCart className="w-6 h-6 mr-3" />
                Ingredientes e Medidas
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🍓 Para os Morangos</h3>
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 p-5 rounded-xl border border-red-200 mb-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-700">Morangos grandes e secos</span>
                        <span className="font-bold text-pink-600">10 unidades</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-700">Palitos de churrasco</span>
                        <span className="font-bold text-pink-600">10 unidades</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🥛 Brigadeiro de Ninho</h3>
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-xl border border-yellow-200 mb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="font-medium text-gray-700">Leite condensado</span>
                          <span className="font-bold text-pink-600">1 lata</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="font-medium text-gray-700">Manteiga</span>
                          <span className="font-bold text-pink-600">1 colher (sopa)</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="font-medium text-gray-700">Leite em pó</span>
                          <span className="font-bold text-pink-600">4 colheres (sopa)</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="font-medium text-gray-700">Creme de leite (opcional)</span>
                          <span className="font-bold text-pink-600">1/2 caixinha</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🍯 Calda Caramelizada</h3>
                  <div className="bg-gradient-to-r from-amber-50 to-red-50 p-5 rounded-xl border border-amber-200">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="font-medium text-gray-700">Açúcar cristal</span>
                          <span className="font-bold text-pink-600">300g</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="font-medium text-gray-700">Água</span>
                          <span className="font-bold text-pink-600">150ml</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="font-medium text-gray-700">Vinagre branco</span>
                          <span className="font-bold text-pink-600">15ml</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="font-medium text-gray-700">Corante vermelho em gel</span>
                          <span className="font-bold text-pink-600">Algumas gotas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">✨ Variações e sugestões extras</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
                      <div className="text-2xl mb-2">🍓</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Tradicional</h4>
                      <p className="text-sm text-gray-600">Morango + brigadeiro branco + calda vermelha</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
                      <div className="text-2xl mb-2">🍇</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Uva do Amor</h4>
                      <p className="text-sm text-gray-600">Uva + brigadeiro + calda roxa</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
                      <div className="text-2xl mb-2">🥥</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Coco</h4>
                      <p className="text-sm text-gray-600">Morango + brigadeiro de coco + calda</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/images/morangos-embalados.jpeg"
                    alt="Morangos do Amor embalados"
                    className="w-full max-w-md mx-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 4: Passo a Passo Completo */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <ChefHat className="w-6 h-6 mr-3" />
                Passo a Passo Completo
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🍓 Preparando o morango</h3>

                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-2">Preparação dos morangos</h4>
                        <p className="text-gray-700">
                          Lave e seque bem os morangos. Espete os palitos pela base e reserve.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Brigadeiro de Ninho</h4>
                        <p className="text-gray-700">
                          Faça o brigadeiro: leve todos os ingredientes ao fogo baixo, mexendo até o ponto de enrolar.
                          Deixe esfriar.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Modelagem</h4>
                        <p className="text-gray-700">Modele os morangos com brigadeiro, usando a fruta como molde.</p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-amber-50 rounded-lg">
                      <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-700 mb-2">Calda caramelizada</h4>
                        <p className="text-gray-700">
                          Faça a calda: junte todos os ingredientes, leve ao fogo médio até atingir 145–150°C (ou até
                          formar fios duros ao pingar em água fria).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Banho final</h4>
                        <p className="text-gray-700">
                          Mergulhe os morangos na calda quente, girando para formar a casquinha. Deixe secar sobre papel
                          manteiga.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-pink-200" />

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🍫 Fazendo o brigadeiro</h3>

                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Derretendo o chocolate</h4>
                        <p className="text-gray-700">
                          Derreta o chocolate branco em banho-maria ou microondas, mexendo a cada 30 segundos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Misturando os ingredientes</h4>
                        <p className="text-gray-700">
                          Em uma panela, misture o leite condensado, creme de leite, manteiga e o chocolate derretido.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Cozinhando no ponto</h4>
                        <p className="text-gray-700">
                          Cozinhe em fogo baixo, mexendo sempre, até que desgrude do fundo da panela (cerca de 15-20
                          minutos).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-pink-200" />

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4"> Montagem e banho na calda</h3>

                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-amber-50 rounded-lg">
                      <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-700 mb-2">Modelando o brigadeiro</h4>
                        <p className="text-gray-700">
                          Com as mãos untadas, envolva cada morango com o brigadeiro, deixando apenas a pontinha
                          aparecendo.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-amber-50 rounded-lg">
                      <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-700 mb-2">Preparando a calda</h4>
                        <p className="text-gray-700">
                          Faça a calda caramelizada até o ponto de fio (120°C). Adicione o corante vermelho.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-amber-50 rounded-lg">
                      <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-700 mb-2">Banho final</h4>
                        <p className="text-gray-700">
                          Mergulhe cada morango na calda quente e coloque em forminhas. Deixe esfriar completamente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🎯 Ponto certo do caramelo</h3>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-xl border border-red-200">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                        <p className="text-gray-700">
                          <strong>Temperatura ideal:</strong> 120°C a 125°C
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                        <p className="text-gray-700">
                          <strong>Teste do fio:</strong> A calda deve formar um fio quando levantada com a colher
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                        <p className="text-gray-700">
                          <strong>Cor perfeita:</strong> Dourado claro, transparente e brilhante
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">{"🎥 Vídeo tutorial da Thais Martins"}</h3>

                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-5 rounded-xl border border-pink-200">
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-pink-700 mb-2">📺 A calda mais fácil da vida!</h4>
                      <p className="text-gray-600 text-sm">
                        Assista ao vídeo completo da Fabi ensinando o passo a passo
                      </p>
                    </div>

                    <div className="relative w-full max-w-2xl mx-auto">
                      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src="https://www.youtube.com/embed/U6_ih2eEwTw?si=UjKPrInvgE_YR2II"
                          title="MORANGO DO AMOR com a calda mais fácil do mundo! Só 1 ingrediente!"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-pink-600 font-medium text-sm">
                        💡 Dica: Assista quantas vezes precisar para dominar a técnica!
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-pink-200" />

                <div className="relative">
                  <img
                    src="/images/morango-mao.jpeg"
                    alt="Morango do Amor sendo segurado"
                    className="w-full max-w-sm mx-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 5: Dicas Técnicas da Fabi */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-3" />
                Dicas Técnicas da Fabi
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">✨ Segredos da calda que brilha</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-semibold text-amber-700 mb-2">🔥 Controle do fogo</h4>
                        <p className="text-gray-700 text-sm">
                          Mantenha sempre em fogo médio-baixo. Fogo alto queima o açúcar e deixa a calda amarga.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-semibold text-amber-700 mb-2">💧 Glucose é essencial</h4>
                        <p className="text-gray-700 text-sm">
                          A glucose evita que a calda cristalize e garante o brilho perfeito.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-semibold text-amber-700 mb-2">🌡️ Termômetro é seu amigo</h4>
                        <p className="text-gray-700 text-sm">
                          Use sempre termômetro culinário para garantir o ponto exato da calda.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-semibold text-amber-700 mb-2">🎨 Corante na medida</h4>
                        <p className="text-gray-700 text-sm">
                          Adicione o corante aos poucos até atingir a cor desejada.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-pink-200" />

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">❄️ Como evitar que derreta</h3>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-1">Resfriamento gradual</h4>
                          <p className="text-gray-700 text-sm">
                            Deixe esfriar em temperatura ambiente antes de refrigerar.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-1">Armazenamento correto</h4>
                          <p className="text-gray-700 text-sm">
                            Guarde em recipiente hermético na geladeira por até 3 dias.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-1">Transporte seguro</h4>
                          <p className="text-gray-700 text-sm">
                            Use caixas térmicas com gelo seco para entregas em dias quentes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🎨 Modelagem perfeita do morango</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="text-3xl mb-2">👐</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Mãos untadas</h4>
                      <p className="text-sm text-gray-600">Use manteiga ou óleo nas mãos para não grudar</p>
                    </div>

                    <div className="text-center p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="text-3xl mb-2">🔄</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Movimento circular</h4>
                      <p className="text-sm text-gray-600">Gire o morango enquanto aplica o brigadeiro</p>
                    </div>

                    <div className="text-center p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="text-3xl mb-2">⚖️</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Camada uniforme</h4>
                      <p className="text-sm text-gray-600">Mantenha espessura igual em toda superfície</p>
                    </div>
                  </div>
                </div>

                <div className="text-center"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 6: Variações Criativas */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <Gift className="w-6 h-6 mr-3" />
                Variações Criativas
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🍇 Uva do Amor</h3>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-3">Ingredientes especiais:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                            <span className="text-gray-700">Uvas grandes sem sementes</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                            <span className="text-gray-700">Corante roxo para a calda</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                            <span className="text-gray-700">Brigadeiro tradicional</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-3">Dica especial:</h4>
                        <p className="text-gray-700 text-sm bg-white p-3 rounded-lg">
                          As uvas devem estar bem firmes e secas. O processo é idêntico ao morango, mas a calda roxa
                          fica ainda mais impactante visualmente!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🌈 Recheios diferentes</h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
                      <div className="text-2xl mb-2">🍇</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Uva do Amor</h4>
                      <p className="text-sm text-gray-600">Mesma técnica com uvas grandes</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
                      <div className="text-2xl mb-2">🍫</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Morango Recheado</h4>
                      <p className="text-sm text-gray-600">Com Nutella ou doce de leite</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
                      <div className="text-2xl mb-2">🥄</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Versão no Pote</h4>
                      <p className="text-sm text-gray-600">Brigadeiro + morango + calda por cima</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-pink-200 text-center">
                      <div className="text-2xl mb-2">🌈</div>
                      <h4 className="font-semibold text-pink-600 mb-2">Brigadeiros Variados</h4>
                      <p className="text-sm text-gray-600">Chocolate, maracujá ou coco</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🥄 Versões no pote e mini trios</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-3">🥄 Morango do Amor no Pote</h4>
                      <div className="space-y-2">
                        <p className="text-gray-700 text-sm">• Corte o morango em pedaços</p>
                        <p className="text-gray-700 text-sm">• Intercale com brigadeiro em potinhos</p>
                        <p className="text-gray-700 text-sm">• Finalize com calda por cima</p>
                        <p className="text-gray-700 text-sm">• Ideal para delivery!</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-xl border border-orange-200">
                      <h4 className="font-semibold text-orange-700 mb-3">🎁 Mini Trios</h4>
                      <div className="space-y-2">
                        <p className="text-gray-700 text-sm">• 3 mini morangos por embalagem</p>
                        <p className="text-gray-700 text-sm">• Sabores diferentes em cada um</p>
                        <p className="text-gray-700 text-sm">• Preço mais acessível</p>
                        <p className="text-gray-700 text-sm">• Perfeito para degustação!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/images/morangos-prato.webp"
                    alt="Morangos do Amor em prato elegante"
                    className="w-full max-w-md mx-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 7: Precificação e Lucro */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3" />
                Precificação e Lucro
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">💰 Cálculo por unidade</h3>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-3">💰 Cálculo por unidade:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Morango</span>
                        <span className="font-semibold text-green-600">R$ 0,70</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Brigadeiro</span>
                        <span className="font-semibold text-green-600">R$ 0,50</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Calda</span>
                        <span className="font-semibold text-green-600">R$ 0,30</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-gray-700">Embalagem</span>
                        <span className="font-semibold text-green-600">R$ 0,30</span>
                      </div>
                      <Separator className="bg-green-200" />
                      <div className="flex justify-between items-center p-2 bg-green-100 rounded font-bold">
                        <span className="text-green-800">CUSTO TOTAL</span>
                        <span className="text-green-800">R$ 1,80</span>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                      <div className="text-center space-y-2">
                        <p className="text-lg font-bold text-green-700">💰 Venda sugerida: R$ 8 a R$ 12</p>
                        <p className="text-lg font-bold text-purple-700">📈 Lucro estimado: até 500% por unidade</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">📋 Tabela de custos e sugestão de preços</h3>

                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg border border-pink-200 shadow-sm">
                      <thead className="bg-pink-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-pink-800">Produto</th>
                          <th className="p-3 text-center font-semibold text-pink-800">Custo</th>
                          <th className="p-3 text-center font-semibold text-pink-800">Preço Sugerido</th>
                          <th className="p-3 text-center font-semibold text-pink-800">Lucro</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-pink-100">
                          <td className="p-3 text-gray-700">Morango do Amor Tradicional</td>
                          <td className="p-3 text-center font-semibold text-green-600">R$ 5,00</td>
                          <td className="p-3 text-center font-semibold text-blue-600">R$ 12,00</td>
                          <td className="p-3 text-center font-semibold text-purple-600">R$ 7,00</td>
                        </tr>
                        <tr className="border-t border-pink-100 bg-pink-25">
                          <td className="p-3 text-gray-700">Uva do Amor</td>
                          <td className="p-3 text-center font-semibold text-green-600">R$ 4,50</td>
                          <td className="p-3 text-center font-semibold text-blue-600">R$ 10,00</td>
                          <td className="p-3 text-center font-semibold text-purple-600">R$ 5,50</td>
                        </tr>
                        <tr className="border-t border-pink-100">
                          <td className="p-3 text-gray-700">Mini Trio</td>
                          <td className="p-3 text-center font-semibold text-green-600">R$ 12,00</td>
                          <td className="p-3 text-center font-semibold text-blue-600">R$ 25,00</td>
                          <td className="p-3 text-center font-semibold text-purple-600">R$ 13,00</td>
                        </tr>
                        <tr className="border-t border-pink-100 bg-pink-25">
                          <td className="p-3 text-gray-700">Morango no Pote</td>
                          <td className="p-3 text-center font-semibold text-green-600">R$ 6,00</td>
                          <td className="p-3 text-center font-semibold text-blue-600">R$ 15,00</td>
                          <td className="p-3 text-center font-semibold text-purple-600">R$ 9,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 text-sm">
                    <strong>⚠️ Importante:</strong> Os custos podem variar conforme seu estado, época do ano e o tamanho
                    dos morangos. Sempre recalcule seus preços baseado na realidade local.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🌍 Observações sobre variações regionais</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700 mb-2">🏙️ Grandes Centros</h4>
                      <p className="text-sm text-gray-700 mb-2">Preços 20-30% mais altos</p>
                      <p className="text-xs text-gray-600">São Paulo, Rio, Brasília</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-2">🌆 Cidades Médias</h4>
                      <p className="text-sm text-gray-700 mb-2">Preços padrão sugeridos</p>
                      <p className="text-xs text-gray-600">Interior desenvolvido</p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-700 mb-2">🏘️ Cidades Pequenas</h4>
                      <p className="text-sm text-gray-700 mb-2">Ajustar 10-15% para baixo</p>
                      <p className="text-xs text-gray-600">Considerar poder aquisitivo</p>
                    </div>
                  </div>
                </div>

                <div className="text-center"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 8: Apresentação e Vendas */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <Star className="w-6 h-6 mr-3" />
                Apresentação e Vendas
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">📦 Embalagens que vendem sozinhas</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-700 mb-2">🎁 Embalagem Individual</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Forminhas de papel coloridas</li>
                          <li>• Saquinhos transparentes com lacinho</li>
                          <li>• Caixinhas personalizadas</li>
                          <li>• Adesivos com sua marca</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 mb-2">📱 Para Delivery</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Caixas térmicas pequenas</li>
                          <li>• Papel filme para proteção</li>
                          <li>• Gelo seco para transporte</li>
                          <li>• Etiquetas de identificação</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-700 mb-2">🎉 Kits e Combos</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Caixas para 6 ou 12 unidades</li>
                          <li>• Divisórias internas</li>
                          <li>• Laços e fitas decorativas</li>
                          <li>• Cartões personalizados</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-700 mb-2">💝 Datas Especiais</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Embalagens temáticas</li>
                          <li>• Cores sazonais</li>
                          <li>• Mensagens personalizadas</li>
                          <li>• Preços premium</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">📱 Como criar desejo nas redes sociais</h3>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-200">
                      <h4 className="font-semibold text-pink-700 mb-3">📸 Fotografia que vende</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="text-gray-700 text-sm">
                            • <strong>Luz natural:</strong> Fotografe próximo à janela
                          </p>
                          <p className="text-gray-700 text-sm">
                            • <strong>Ângulos variados:</strong> De cima, lateral e close
                          </p>
                          <p className="text-gray-700 text-sm">
                            • <strong>Fundo limpo:</strong> Use superfícies neutras
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-gray-700 text-sm">
                            • <strong>Destaque o brilho:</strong> A calda deve reluzir
                          </p>
                          <p className="text-gray-700 text-sm">
                            • <strong>Mostre o interior:</strong> Corte um ao meio
                          </p>
                          <p className="text-gray-700 text-sm">
                            • <strong>Stories em tempo real:</strong> Processo de preparo
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg border border-pink-200">
                        <div className="text-2xl mb-2">📱</div>
                        <h4 className="font-semibold text-pink-600 mb-2">Instagram</h4>
                        <p className="text-sm text-gray-600">Posts, Stories e Reels mostrando o processo</p>
                      </div>

                      <div className="text-center p-4 bg-white rounded-lg border border-pink-200">
                        <div className="text-2xl mb-2">🎵</div>
                        <h4 className="font-semibold text-pink-600 mb-2">TikTok</h4>
                        <p className="text-sm text-gray-600">Vídeos rápidos do preparo e resultado final</p>
                      </div>

                      <div className="text-center p-4 bg-white rounded-lg border border-pink-200">
                        <div className="text-2xl mb-2">💬</div>
                        <h4 className="font-semibold text-pink-600 mb-2">WhatsApp</h4>
                        <p className="text-sm text-gray-600">Status e grupos para divulgação direta</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">
                    🎯 Estratégias de combos e pronta entrega
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-5 rounded-xl border border-yellow-200">
                      <h4 className="font-semibold text-amber-700 mb-3">🔥 Combos Irresistíveis</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg">
                          <p className="font-semibold text-amber-600 text-sm">Combo Casal</p>
                          <p className="text-xs text-gray-600">2 Morangos + 1 Uva = R$ 30 (ao invés de R$ 34)</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <p className="font-semibold text-amber-600 text-sm">Combo Família</p>
                          <p className="text-xs text-gray-600">6 Morangos + 3 Uvas = R$ 95 (ao invés de R$ 102)</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <p className="font-semibold text-amber-600 text-sm">Combo Festa</p>
                          <p className="text-xs text-gray-600">12 unidades variadas = R$ 130 (ao invés de R$ 144)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-3">⚡ Pronta Entrega</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-700">Tenha sempre 20-30 unidades prontas</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-700">Divulgue nos stories: "Disponível agora!"</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-700">Ofereça desconto para retirada imediata</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-700">Crie senso de urgência: "Últimas unidades!"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/images/morangos-calda.webp"
                    alt="Morangos do Amor com calda brilhante"
                    className="w-full max-w-md mx-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 9: Grupo VIP + Bônus */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-pink-300 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3" />
                Grupo VIP + Bônus Exclusivo
              </h2>

              <div className="space-y-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold mb-2">🎁 Faça parte do nosso grupo gratuito</h3>
                    <p className="text-lg mb-4">E receba:</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <p>• Receitas semanais</p>
                        <p>• Vídeos de passo a passo</p>
                      </div>
                      <div className="space-y-2">
                        <p>• Dicas de vendas</p>
                        <p>• Bônus surpresa exclusivo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🌟 Como entrar e o que você recebe</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-pink-200">
                        <h4 className="font-semibold text-pink-600 mb-2 flex items-center">
                          <Gift className="w-4 h-4 mr-2" />
                          Receitas Exclusivas
                        </h4>
                        <p className="text-sm text-gray-700">Novas receitas toda semana, antes de todo mundo!</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-pink-200">
                        <h4 className="font-semibold text-pink-600 mb-2 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Comunidade Ativa
                        </h4>
                        <p className="text-sm text-gray-700">Troque experiências com outros empreendedores do doce</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-pink-200">
                        <h4 className="font-semibold text-pink-600 mb-2 flex items-center">
                          <Star className="w-4 h-4 mr-2" />
                          Dicas de Vendas
                        </h4>
                        <p className="text-sm text-gray-700">Estratégias comprovadas para aumentar suas vendas</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-pink-200">
                        <h4 className="font-semibold text-pink-600 mb-2 flex items-center">
                          <ChefHat className="w-4 h-4 mr-2" />
                          Suporte da Fabi
                        </h4>
                        <p className="text-sm text-gray-700">Tire suas dúvidas diretamente com a especialista</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-pink-200">
                        <h4 className="font-semibold text-pink-600 mb-2 flex items-center">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Tendências
                        </h4>
                        <p className="text-sm text-gray-700">Fique por dentro dos doces que estão bombando</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-pink-200">
                        <h4 className="font-semibold text-pink-600 mb-2 flex items-center">
                          <DollarSign className="w-4 h-4 mr-2" />
                          Planilhas Grátis
                        </h4>
                        <p className="text-sm text-gray-700">Controle de custos e precificação automatizada</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-3">📱 Link direto para o grupo WhatsApp</h4>
                    <Button
                      onClick={handleWhatsAppRedirect}
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg rounded-full"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      ENTRAR NO GRUPO VIP
                    </Button>
                    <p className="text-sm text-gray-600 mt-3">
                      Clique no botão acima e seja redirecionado automaticamente
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-xl border border-yellow-200">
                  <div className="flex items-start">
                    <div className="bg-yellow-500 text-white rounded-full p-2 mr-4 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-2">⏰ Oferta por tempo limitado!</h4>
                      <p className="text-gray-700 text-sm">
                        O acesso ao grupo VIP é normalmente pago, mas por tempo limitado está
                        <strong className="text-yellow-700"> GRATUITO</strong> para quem adquirir este mini curso. Não
                        perca essa oportunidade única!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 10: Conclusão */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3" />
                Conclusão e Incentivo Final
              </h2>

              <div className="space-y-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-2xl mb-8">
                    <h3 className="text-2xl font-bold mb-4">🎉 Parabéns!</h3>
                    <p className="text-lg mb-2">Você chegou ao final do mini curso</p>
                    <p className="text-sm opacity-90">Agora é hora de colocar a mão na massa e começar a lucrar!</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">🚀 Próximos passos</h3>

                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-1">Faça sua primeira fornada</h4>
                        <p className="text-gray-700 text-sm">
                          Comece com 12 unidades para testar a receita e o mercado local
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-1">Fotografe e divulgue</h4>
                        <p className="text-gray-700 text-sm">
                          Use as dicas de fotografia para criar conteúdo irresistível
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-1">Entre no grupo VIP</h4>
                        <p className="text-gray-700 text-sm">Conecte-se com a comunidade e continue aprendendo</p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-1">Escale seu negócio</h4>
                        <p className="text-gray-700 text-sm">
                          Aumente gradualmente a produção conforme a demanda cresce
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">💼 Como transformar doces em negócio</h3>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-purple-700 mb-3">📈 Crescimento Sustentável</h4>
                        <div className="space-y-2">
                          <p className="text-gray-700 text-sm">• Comece pequeno e vá crescendo</p>
                          <p className="text-gray-700 text-sm">• Reinvista parte do lucro em equipamentos</p>
                          <p className="text-gray-700 text-sm">• Mantenha sempre a qualidade</p>
                          <p className="text-gray-700 text-sm">• Diversifique os sabores gradualmente</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-purple-700 mb-3">🎯 Foco no Cliente</h4>
                        <div className="space-y-2">
                          <p className="text-gray-700 text-sm">• Ouça o feedback dos clientes</p>
                          <p className="text-gray-700 text-sm">• Crie relacionamento, não apenas vendas</p>
                          <p className="text-gray-700 text-sm">• Ofereça experiências memoráveis</p>
                          <p className="text-gray-700 text-sm">• Seja consistente na entrega</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl border border-pink-200">
                    <h4 className="text-2xl font-bold text-pink-800 mb-4">🍓 Mensagem Final</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Agora você tem tudo nas mãos para criar morangos que encantam, brilham e vendem muito.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Coloque em prática, tire fotos, divulgue e surpreenda seus clientes — ou seus familiares.
                    </p>
                    <p className="text-pink-600 font-bold text-lg text-center">🍓 Boa produção e ótimas vendas!</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full shadow-lg">
                    <Heart className="w-5 h-5 mr-2" />
                    COMEÇAR AGORA MESMO!
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/images/logo-chocolicias.png" alt="Chocolicias da Fabi" className="h-12 w-12 mr-3 opacity-90" />
            <div>
              <h3 className="text-xl font-bold">Chocolicias da Fabi</h3>
              <p className="text-sm opacity-90">Transformando sonhos em doces realidades</p>
            </div>
          </div>

          <div className="space-y-2 text-sm opacity-90">
            <p>© 2024 Chocolicias da Fabi - Todos os direitos reservados</p>
            <p>Mini Curso: Morango do Amor - O doce viral que virou renda extra</p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-pink-600 bg-transparent"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-pink-600 bg-transparent"
            >
              <Star className="w-4 h-4 mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </footer>

      {/* Marca d'água fixa */}
      <div className="fixed bottom-4 right-4 opacity-20 pointer-events-none z-50">
        <img src="/images/marca-dagua.png" alt="Marca d'água Chocolicias" className="h-16 w-16" />
      </div>
    </div>
  )
}
