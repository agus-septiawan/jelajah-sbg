import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg"
        >
          <source
            src="https://player.vimeo.com/external/454527102.sd.mp4?s=c602c13a7c9ce06f4f8876604e3044c92b909536&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div
              className="text-white max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Jelajahi Keindahan Sabang
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Temukan pesona alam, kuliner lezat, dan akomodasi terbaik di ujung barat Indonesia
              </p>
              <div className="space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/akomodasi">Booking Sekarang</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/20"
                >
                  <Link href="/destinasi">Lihat Destinasi</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Destinasi Unggulan
            </h2>
            <p className="text-xl text-gray-600">
              Temukan keindahan tersembunyi di setiap sudut Sabang
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pantai Iboih",
                description: "Pantai dengan air jernih dan terumbu karang yang indah",
                image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg"
              },
              {
                title: "Kilometer Nol",
                description: "Monumen bersejarah titik paling barat Indonesia",
                image: "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg"
              },
              {
                title: "Benteng Anoi Itam",
                description: "Peninggalan bersejarah dengan nilai budaya tinggi",
                image: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg"
              }
            ].map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                      <p className="text-gray-200">{destination.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Accommodations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Akomodasi Pilihan
            </h2>
            <p className="text-xl text-gray-600">
              Nikmati kenyamanan menginap dengan pemandangan terbaik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sabang Beach Resort",
                description: "Resort mewah dengan pemandangan laut",
                price: "Rp 500.000",
                image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
              },
              {
                name: "Iboih Inn",
                description: "Penginapan budget dekat pantai",
                price: "Rp 150.000",
                image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
              },
              {
                name: "Kilometer Nol Hotel",
                description: "Hotel modern di pusat kota",
                price: "Rp 300.000",
                image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
              }
            ].map((accommodation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    <img
                      src={accommodation.image}
                      alt={accommodation.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{accommodation.name}</h3>
                    <p className="text-gray-600 mb-4">{accommodation.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">{accommodation.price}/malam</span>
                      <Button asChild>
                        <Link href="/akomodasi">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sabang */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Sabang?
            </h2>
            <p className="text-xl text-gray-600">
              Temukan keunikan dan keistimewaan Sabang
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Lokasi Strategis",
                description: "Terletak di ujung barat Indonesia dengan akses mudah ke berbagai destinasi wisata",
                icon: "🌏"
              },
              {
                title: "Alam yang Memukau",
                description: "Pantai indah, air jernih, dan terumbu karang yang masih alami",
                icon: "🏖️"
              },
              {
                title: "Budaya yang Kaya",
                description: "Nikmati keramahan masyarakat lokal dan kuliner khas Aceh",
                icon: "🏺"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-block p-4 rounded-full bg-blue-100 mb-6">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}