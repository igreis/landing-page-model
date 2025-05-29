import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Clock, MapPin, Phone, Star, Instagram, Facebook, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Pizzaria Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-red-600">Pizzaria Delícia</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-red-600 transition-colors">
              Início
            </Link>
            <Link href="#destaques" className="text-sm font-medium hover:text-red-600 transition-colors">
              Destaques
            </Link>
            <Link href="#cardapio" className="text-sm font-medium hover:text-red-600 transition-colors">
              Cardápio
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-red-600 transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-red-600 transition-colors">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" />
              Ligar Agora
            </Button>
            <Button className="bg-red-600 hover:bg-red-700">Fazer Pedido</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-[70dvh]">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative h-[500px] w-full">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Pizza Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Pizzas Artesanais <span className="text-red-500">Deliciosas</span>
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-gray-200">
              Ingredientes frescos, massa perfeita e sabor inesquecível. Venha experimentar nossas pizzas artesanais
              feitas com amor.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Ver Cardápio
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Fazer Reserva
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto py-12 md:py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Qualidade Premium</h3>
              <p className="mt-2 text-muted-foreground">Ingredientes selecionados e receitas tradicionais italianas.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Entrega Rápida</h3>
              <p className="mt-2 text-muted-foreground">Sua pizza quentinha em até 30 minutos ou a entrega é grátis.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Ambiente Acolhedor</h3>
              <p className="mt-2 text-muted-foreground">
                Visite nossa pizzaria e desfrute de um ambiente familiar e aconchegante.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="destaques" className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Pizzas em Destaque</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Conheça nossas pizzas mais pedidas e amadas pelos clientes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Margherita Especial",
                  description: "Molho de tomate, mussarela fresca, manjericão e azeite extra virgem.",
                  price: "R$ 49,90",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Pepperoni Supreme",
                  description: "Generosa camada de pepperoni, mussarela e orégano.",
                  price: "R$ 59,90",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Quatro Queijos",
                  description: "Mussarela, gorgonzola, parmesão e provolone derretidos.",
                  price: "R$ 54,90",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((pizza, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-[200px]">
                    <Image src={pizza.image || "/placeholder.svg"} alt={pizza.name} fill className="object-cover" />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-medium">
                      Destaque
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{pizza.name}</h3>
                      <span className="font-bold text-red-600">{pizza.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{pizza.description}</p>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Adicionar ao Pedido</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg">
                Ver Cardápio Completo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="cardapio" className="container mx-auto py-12 md:py-16 px-4">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Nosso Cardápio</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Explore nossa variedade de pizzas tradicionais e especiais, além de entradas e bebidas.
            </p>
          </div>

          <Tabs defaultValue="pizzas" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto">
              <TabsTrigger value="pizzas">Pizzas</TabsTrigger>
              <TabsTrigger value="entradas">Entradas</TabsTrigger>
              <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
            </TabsList>
            <TabsContent value="pizzas">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    name: "Margherita",
                    description: "Molho de tomate, mussarela fresca, manjericão e azeite extra virgem.",
                    price: "R$ 49,90",
                  },
                  {
                    name: "Pepperoni",
                    description: "Generosa camada de pepperoni, mussarela e orégano.",
                    price: "R$ 59,90",
                  },
                  {
                    name: "Quatro Queijos",
                    description: "Mussarela, gorgonzola, parmesão e provolone derretidos.",
                    price: "R$ 54,90",
                  },
                  {
                    name: "Calabresa",
                    description: "Calabresa fatiada, cebola, mussarela e orégano.",
                    price: "R$ 49,90",
                  },
                  {
                    name: "Portuguesa",
                    description: "Presunto, ovos, cebola, ervilha, mussarela e orégano.",
                    price: "R$ 54,90",
                  },
                  {
                    name: "Vegetariana",
                    description: "Brócolis, tomate, champignon, pimentão, cebola e mussarela.",
                    price: "R$ 52,90",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-red-600 font-bold whitespace-nowrap ml-4">{item.price}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="entradas">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    name: "Bruschetta",
                    description: "Fatias de pão italiano com tomate, alho, manjericão e azeite.",
                    price: "R$ 29,90",
                  },
                  {
                    name: "Palitos de Alho",
                    description: "Palitos de massa com alho, parmesão e ervas.",
                    price: "R$ 24,90",
                  },
                  {
                    name: "Salada Caprese",
                    description: "Tomate, mussarela de búfala, manjericão e azeite.",
                    price: "R$ 34,90",
                  },
                  {
                    name: "Batata Frita",
                    description: "Porção de batatas fritas crocantes.",
                    price: "R$ 19,90",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-red-600 font-bold whitespace-nowrap ml-4">{item.price}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="bebidas">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    name: "Refrigerante",
                    description: "Lata 350ml (Coca-Cola, Guaraná, Sprite)",
                    price: "R$ 6,90",
                  },
                  {
                    name: "Suco Natural",
                    description: "Copo 300ml (Laranja, Limão, Abacaxi)",
                    price: "R$ 9,90",
                  },
                  {
                    name: "Água Mineral",
                    description: "Garrafa 500ml (com ou sem gás)",
                    price: "R$ 4,90",
                  },
                  {
                    name: "Cerveja",
                    description: "Long neck (Heineken, Stella Artois, Corona)",
                    price: "R$ 12,90",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-red-600 font-bold whitespace-nowrap ml-4">{item.price}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* About */}
        <section id="sobre" className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Nossa Pizzaria" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Nossa História</h2>
                <p className="text-muted-foreground mb-4">
                  Fundada em 2005, a Pizzaria Delícia nasceu da paixão do chef Antonio pela culinária italiana. Após
                  anos de estudo e aperfeiçoamento na Itália, ele retornou ao Brasil com o sonho de criar pizzas
                  autênticas com um toque brasileiro.
                </p>
                <p className="text-muted-foreground mb-4">
                  Nossa missão é proporcionar momentos de felicidade através de pizzas artesanais de alta qualidade,
                  preparadas com ingredientes frescos e técnicas tradicionais.
                </p>
                <p className="text-muted-foreground mb-6">
                  Hoje, somos reconhecidos como uma das melhores pizzarias da cidade, com clientes fiéis que apreciam
                  nosso compromisso com a excelência e o sabor inigualável.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Conheça Nossa Equipe</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto py-12 md:py-16 px-4">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">O Que Nossos Clientes Dizem</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Veja as avaliações de quem já experimentou nossas deliciosas pizzas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Carlos Silva",
                text: "A melhor pizza que já comi! Massa perfeita, ingredientes frescos e entrega rápida. Recomendo a todos!",
                rating: 5,
              },
              {
                name: "Ana Oliveira",
                text: "Ambiente aconchegante e atendimento excelente. A pizza quatro queijos é simplesmente divina!",
                rating: 5,
              },
              {
                name: "Roberto Santos",
                text: "Peço toda semana e nunca me decepciona. Preço justo pela qualidade que oferecem.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                </div>
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact/Location */}
        <section id="contato" className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Contato e Localização</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Visite-nos ou faça seu pedido pelos nossos canais de atendimento.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-3" />
                    <p>Av. Principal, 1234 - Centro, Sua Cidade - Estado</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3" />
                    <p>(11) 99999-9999</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <p>Segunda a Sexta: 18h às 23h</p>
                      <p>Sábados e Domingos: 18h às 00h</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-8 mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mapa da Localização"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-red-600 hover:bg-red-700">Ver no Google Maps</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white py-12">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Faça seu Pedido Agora!</h2>
            <p className="max-w-[600px] mx-auto mb-8">
              Experimente nossas deliciosas pizzas artesanais. Entrega rápida ou venha nos visitar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Phone className="mr-2 h-4 w-4" />
                Ligar Agora
              </Button>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Fazer Pedido Online
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Pizzaria Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-white">Pizzaria Delícia</span>
              </div>
              <p className="text-sm">
                Servindo pizzas artesanais de qualidade desde 2005. Nosso compromisso é com o sabor e a satisfação dos
                nossos clientes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="text-sm hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#cardapio" className="text-sm hover:text-white transition-colors">
                    Cardápio
                  </Link>
                </li>
                <li>
                  <Link href="#sobre" className="text-sm hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="text-sm hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-sm">
                <li>Segunda a Sexta: 18h às 23h</li>
                <li>Sábados e Domingos: 18h às 00h</li>
                <li>Feriados: 18h às 23h</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Inscreva-se para receber nossas promoções e novidades.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-3 py-2 rounded-md text-sm flex-1 text-gray-900"
                />
                <Button className="bg-red-600 hover:bg-red-700">Enviar</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} Pizzaria Delícia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}