import Image from "next/image"
import Link from "next/link"
import { Camera, Mail, Phone, MapPin, Instagram, MessageCircle, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function PhotographyPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white">Onpoint Photography Ug</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#gallery" className="text-gray-300 hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit border-primary text-primary">
                Professional Photographer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                Capturing Life's
                <span className="text-primary block">Beautiful Moments</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg">
                Professional photography studio specializing in wedding, portrait, and event photography. Creating
                timeless memories that tell your unique story with artistic vision and professional excellence.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="#gallery">View Portfolio</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl"></div>
              <Image
                src="/images/portrait-3.jpg"
                alt="Professional photographer at work"
                width={500}
                height={600}
                className="rounded-2xl object-cover border-2 border-primary/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Portfolio Gallery</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A curated selection of our recent work showcasing various photography styles and moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Images */}
            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-lg border-2 border-gray-800 hover:border-primary transition-colors duration-300">
                <Image
                  src="/images/wedding-bride.jpg"
                  alt="Beautiful bride in wedding dress"
                  width={300}
                  height={400}
                  className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold bg-black/50 px-2 py-1 rounded">Wedding Photography</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg border-2 border-gray-800 hover:border-primary transition-colors duration-300">
                <Image
                  src="/images/_ONP6886 - Copy.jpg"
                  alt="Professional studio portrait session"
                  width={300}
                  height={300}
                  className="object-cover object-[center_20%] w-full h-60 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold bg-black/50 px-2 py-1 rounded">Studio Portrait</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-lg border-2 border-gray-800 hover:border-primary transition-colors duration-300">
                <Image
                  src="/images/outdoor-portrait-new.jpg"
                  alt="Outdoor portrait in traditional attire"
                  width={300}
                  height={300}
                  className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold bg-black/50 px-2 py-1 rounded">Outdoor Portrait</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg border-2 border-gray-800 hover:border-primary transition-colors duration-300">
                <Image
                  src="/images/couples-portrait.jpg"
                  alt="Elegant couples portrait with bouquet"
                  width={300}
                  height={400}
                  className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold bg-black/50 px-2 py-1 rounded">Couples Portrait</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-lg border-2 border-gray-800 hover:border-primary transition-colors duration-300">
                <Image
                  src="/images/birthday-shoot.jpg"
                  alt="Birthday photoshoot with cupcake and candle"
                  width={300}
                  height={400}
                  className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold bg-black/50 px-2 py-1 rounded">Birthday Shoots</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg border-2 border-gray-800 hover:border-primary transition-colors duration-300">
                <Image
                  src="/images/elegant-bw.jpg"
                  alt="Black and white portrait"
                  width={300}
                  height={300}
                  className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold bg-black/50 px-2 py-1 rounded">Black & White Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Photography Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional photography packages tailored to capture your special moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding Package */}
            <Card className="relative overflow-hidden bg-gray-900 border-gray-800 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  Wedding Photography
                  <Badge className="bg-primary text-white">Popular</Badge>
                </CardTitle>
                <CardDescription className="text-gray-400">Complete wedding day coverage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">UGX 1M</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 8-10 hours of coverage</li>
                  <li>• 100 edited high-resolution photos</li>
                  <li>• Online gallery for sharing</li>
                  <li>• Photo Album</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link
                    href="https://wa.link/ij7cqz?text=Hello%20Onpoint%20Photography!%20I'm%20interested%20in%20your%20Wedding%20Photography%20package%20(UGX%201M).%20I'd%20like%20to%20inquire%20more%20about:%0A%0A-%20Available%20dates%0A-%20Package%20details%0A-%20Booking%20process%0A%0APlease%20let%20me%20know%20more%20information."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Inquire More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Portrait Package */}
            <Card className="bg-gray-900 border-gray-800 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white">Portrait Session</CardTitle>
                <CardDescription className="text-gray-400">Individual, couple, or family portraits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">UGX 50,000</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 1-2 hour session</li>
                  <li>• 5 edited photos</li>
                  <li>• Multiple outfit changes</li>
                  <li>• Around Studio</li>
                  <li>• Online gallery access</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link
                    href="https://wa.link/ij7cqz?text=Hello%20Onpoint%20Photography!%20I'm%20interested%20in%20booking%20a%20Portrait%20Session%20(UGX%2050,000).%20I'd%20like%20to%20book:%0A%0A-%20Individual/Couple/Family%20portrait%0A-%20Preferred%20date%20and%20time%0A-%20Any%20special%20requirements%0A%0APlease%20confirm%20availability."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Book Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Event Package */}
            <Card className="bg-gray-900 border-gray-800 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white">Event Photography</CardTitle>
                <CardDescription className="text-gray-400">Corporate events, parties, celebrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">UGX 100,000</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Flexible hourly rates</li>
                  <li>• Professional event coverage</li>
                  <li>• Quick turnaround (48 hours)</li>
                  <li>• High-resolution images</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link
                    href="https://wa.link/ij7cqz?text=Hello%20Onpoint%20Photography!%20I'm%20interested%20in%20getting%20a%20quote%20for%20Event%20Photography%20(UGX%20100,000).%20Please%20provide%20a%20quote%20for:%0A%0A-%20Event%20type:%20%0A-%20Event%20date:%20%0A-%20Event%20duration:%20%0A-%20Location:%20%0A-%20Special%20requirements:%20%0A%0AThank%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Get Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to capture your special moments? Let's discuss your photography needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-black border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-300">
                    Service Interested In
                  </label>
                  <Input
                    id="service"
                    placeholder="Wedding, Portrait, Event, etc."
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your photography needs..."
                    rows={4}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link
                    href="https://wa.link/ij7cqz?text=Hello%20Onpoint%20Photography!%20I'm%20interested%20in%20your%20photography%20services.%20Here%20are%20my%20details:%0A%0AName:%20%0AEmail:%20%0AService%20Needed:%20%0AMessage:%20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send via WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-gray-300">onpointphotography3@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-gray-300">+256 774 216 000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-gray-300">Gulu University Lane, Laroo Village</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Follow My Work</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <Link href="https://www.instagram.com/onpointphotograhy" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <Link href="https://wa.link/ij7cqz" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <Link href="https://www.tiktok.com/@onpoint.shots" target="_blank" rel="noopener noreferrer">
                      <Music className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              <span className="font-semibold text-white">Onpoint Photography Ug</span>
            </div>
            <p className="text-sm text-gray-400">© 2022 Onpoint Photography Ug. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
