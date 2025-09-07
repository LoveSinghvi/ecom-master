import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';


const About = () => {
  const achievements = [
    { value: '10+', label: 'Years of Experience' },
    { value: '100+', label: 'Global Clients' },
    { value: '1000+', label: 'Products Exported' },
    { value: '30+', label: 'Countries Served' },
  ];

  const certifications = [
    { name: 'Import Export Code (IEC)', description: 'Licensed export business' },
    { name: 'GST Registration', description: 'Compliant with tax regulations' },
    { name: 'ISO 9001:2015', description: 'Quality management systems' },
    { name: 'APEDA', description: 'Agricultural and Processed Food Products Export' },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = 'https://awdheshkumar.in/public/assets/img/placeholder-rect.jpg';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 dark:bg-[hsl(var(--category-bg))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6 text-primary">Our Story</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Global Exports began with a passion for showcasing India's rich cultural heritage and exquisite craftsmanship to the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To showcase the rich craftsmanship of Indian textiles, jewellery, and accessories to a global audience, promoting sustainable and ethical fashion while ensuring fair compensation for artisans and maintaining the highest standards of quality and customer satisfaction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground">
                    Empowering artisans by connecting their exceptional handmade products with international markets, preserving traditional crafts while embracing innovation, and becoming the most trusted name in Indian handicraft exports, known for authenticity, quality, and ethical business practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-muted/30 dark:bg-[hsl(var(--category-bg))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted global exporter
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-primary/30 pl-8 ml-4 space-y-12">
              <TimelineItem year="2010" title="The Beginning">
                Started as a small initiative to promote handloom sarees from West Bengal to select international clients.
              </TimelineItem>
              <TimelineItem year="2014" title="Expanding Horizons">
                Added jewellery and accessories to our product range and established our first international office.
              </TimelineItem>
              <TimelineItem year="2018" title="Digital Transformation">
                Launched our e-commerce platform to reach more customers and streamline the export process.
              </TimelineItem>
              <TimelineItem year="2022" title="Global Recognition">
                Recognized as one of the leading exporters of Indian handicrafts with clients across 30+ countries.
              </TimelineItem>
              <TimelineItem year="2025" title="Future Vision">
                Expanding our artisan network and introducing sustainable practices across our supply chain.
              </TimelineItem>
            </div>
          </div>
        </div>
      </section>

       {/* Raising Rajasthan Section (Added New) */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 border border-primary rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-hidden">
              <img
                src="/images/raising.png"
                alt="Awdhesh Kumar promo"
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                onError={handleImageError}
              />
            </div>
            <div className="p-6 text-muted-foreground">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Awdhesh Kumar in Raising Rajasthan
              </h2>
              <p className="mb-4 ">
                We are proud to have participated in Rising Rajasthan 2024, where we had the chance to showcase the beautiful craft of block printing. It was a special moment for us to stand alongside my father, Shri Awdhesh Kumar Pandey, and share this traditional art form with the Honorable Prime Minister, Shri Narendra Modi ji.
              </p>
              <p className="mb-4">
                Block printing is more than just a craft — it is a part of our heritage, passed down through generations. My father has dedicated his life to preserving this art, and it was an honor to represent his efforts and the work of skilled artisans who keep this tradition alive.
              </p>
              <p>
                Our aim is to celebrate and promote the rich culture of Rajasthan through our hand block printed designs. This opportunity inspires us to continue sharing this unique art with the world while supporting the talented hands behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      
<section className="mb-8 px-4 md:px-6 lg:px-12 ">
  <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-md dark:bg-[hsl(var(--category-bg))]">
    
    {/* Our Story */}
    <div className="mb-10 ">
      <h2 className="text-3xl sm:text-3xl font-bold text-center">Our Story</h2>
      <hr className="my-3 border-gray-300" />
      <p className="text-justify text-base text-[15px] leading-relaxed">
        The world famous Sanganeri print known for its exquisite Hand Block print fabrics and azo free and
        natural dyes. We belong to traditional hand block printing community. In 1940's Shri Harnath ji and their
        son Shri Balchand ji Pandey started hand block printing and sell products like dupattas and Fadat (fabric)
        in local road side 'Hatwara' (local market) in Jaipur and to community people by the name of "Balji
        Harnath Hala" by putting their name on each piece for uniqueness and authenticity of their products.
        Their Son Shri Ram Kishore ji Pandey started the company "Ram Kishore Awdhesh Kumar" in 1971 to
        sell our products to government emporium and other companies. After that, their son Awdhesh Pandey
        continued their legacy and expanded by starting "A.K. International" for export query and "A.K.Textiles"
        for domestic query, in 1994, then in the continuation Awdhesh Pandey's younger son Khushiram Pandey
        started the brand <b>"Awdhesh Kumar"</b> in 2012 after his design studies, to expand in retail business.
        <br /><br />
        We chose to revive and revitalize our Ancestral work by our innovative approach and the inherited skill in
        hand block printing and vegetable Dyeing.
        <br />
        We are working with different printing and dyeing techniques such as Syahi Beggar Printing, Dabu
        Printing, Indigo Sol Printing, Pigment Printing, Acid Printing and Natural Dyeing.
      </p>
    </div>

    {/* Our Team */}
    <div className="mb-10">
      <h2 className="text-3xl sm:text-3xl font-bold text-center">Our Team</h2>
      <hr className="my-3 border-gray-300" />
      <p className="text-justify text-base  text-[15px]  leading-relaxed">
        We are producing exclusive and skilfully handcrafted textile and home furnishings in cotton, linen and silk
        using specialized skills of our block printing artisans. Our vision and mission is to sustain the traditional
        skills by exploring new opportunities. We work with about 100 artisans and provide them work on
        fair trade basis. Our infrastructure includes a 14-table printing unit and 50 sewing machine fabrication
        unit and a 10,000 block range in traditional and contemporary designs.
      </p>
    </div>

    {/* About Founders */}
    <div className="mb-4">
      <h2 className="text-3xl sm:text-3xl font-bold text-center">About Founders</h2>
      <hr className="my-3 border-gray-300" />
      <p className="text-justify text-base text-[15px] leading-relaxed">
        <b>Awdhesh Pandey</b> is a fourth generation block printing master artisan from the Chhipa community. He is a
        block printer, craft revivalist, and expert in the natural dyeing process. He has taught students from around
        the world in block and hand block printing—nearly 2000 students of textiles have learned Natural
        Dyeing & Printing from him since 1990. He has taught as a visiting textile faculty at institutions such as:
        NIFT Delhi, IICD Jaipur, Pearl Academy Jaipur, Vanasthali Vidyapeeth, Women Polytechnic College Jaipur,
        and the Indian Institute of Handloom Technology, Jodhpur.
      </p>

      <p className="text-justify text-base text-[15px] leading-relaxed mt-4">
        Awdhesh Pandey is currently the Managing Director of AK Group and manages social initiatives under
        "Rangaichapai Kala Prakosth" for hand block printing artisans.
      </p>

      <p className="text-justify text-base text-[15px] leading-relaxed mt-4">
        <b>Achievements by Awdhesh Pandey:</b><br />
        - National Award (President) – 2009, Govt. of India<br />
        - National Merit Award – 2008, Govt. of India<br />
        - State Award – 1986, Govt. of Rajasthan<br />
        - Utkristh Shilpi Award – 1996, Govt. of Uttar Pradesh<br />
        - Jaipur Ratna Award – 1997, Govt. of Rajasthan<br />
        - Kala Shri Award – 2001, Govt. of Haryana<br />
        - Kala Nidhi Award – 2006, Surajkund Craft Samiti
      </p>

      <p className="text-justify text-base text-[15px] leading-relaxed mt-6">
        <b>Khushiram Pandey</b> is a fifth generation block printing artisan and designer from the Chhipa community,
        Sanganer. An alumnus of IICD Jaipur, he focused on textile product design. His final year project was with
        the City Palace Museum of Jaipur, where he created a collection inspired by regional architecture.
      </p>

      <p className="text-justify text-base text-[15px] leading-relaxed mt-4">
        He is currently the Creative Director of AK Group and runs the brand <b>"Awdhesh Kumar"</b>, which exports,
        wholesales, and retails block-printed textiles. His vision is to sustain the ancient art of block printing while
        introducing modern design innovations.
      </p>
    </div>
  </div>
</section>

      
    </div>
  );
};

// TimelineItem component
const TimelineItem = ({
  year,
  title,
  children,
}: {
  year: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <div className="absolute -left-12 mt-1 h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
      <div>
        <span className="text-sm font-semibold text-primary">{year}</span>
        <h3 className="text-xl font-semibold mt-1">{title}</h3>
        <p className="mt-2 text-muted-foreground">{children}</p>
      </div>
    </div>
  );
};

export default About;
