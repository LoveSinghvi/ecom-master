import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Banarasi Silk Weaving',
      excerpt: 'Discover the ancient techniques and intricate patterns that make Banarasi silk so special.',
      category: 'Textile Trends',
      image: '/images/Banarasi-saare.png',
      date: 'April 5, 2025',
      author: 'Priya Sharma',
    },
    {
      id: 2,
      title: 'Sustainable Practices in Indian Jewellery Making',
      excerpt: 'How traditional artisans are embracing eco-friendly methods without compromising on beauty.',
      category: 'Jewellery Care',
      image: '/images/making.png',
      date: 'March 22, 2025',
      author: 'Rahul Verma',
    },
    {
      id: 3,
      title: 'Export Documentation: A Complete Guide',
      excerpt: 'Navigate the complex world of export documentation with our step-by-step guide.',
      category: 'Export Process',
      image: '/images/abc.png',
      date: 'March 15, 2025',
      author: 'Ananya Gupta',
    },
    {
      id: 4,
      title: 'The Global Appeal of Pashmina Shawls',
      excerpt: 'Why these luxury items continue to be in high demand across international markets.',
      category: 'Textile Trends',
      image: '/images/Pashmina-Shawl.png',
      date: 'March 8, 2025',
      author: 'Vikram Singh',
    },
    {
      id: 5,
      title: 'Color Trends in Fashion Accessories 2025',
      excerpt: "The palette that's dominating this year's accessories market worldwide.",
      category: 'Fashion Trends',
      image: '/images/bbb.png',
      date: 'February 28, 2025',
      author: 'Meera Kapoor',
    },
    {
      id: 6,
      title: 'The Revival of Meenakari Techniques',
      excerpt: 'How this traditional enameling craft is finding new admirers in contemporary markets.',
      category: 'Jewellery Care',
      image: '/images/ccc.png',
      date: 'February 20, 2025',
      author: 'Arjun Mehta',
    },
  ];

  const categories = ['All', 'Textile Trends', 'Jewellery Care', 'Export Process', 'Fashion Trends'];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 dark:bg-[hsl(var(--category-bg))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6 text-primary">Our Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights, trends, and stories from the world of textiles, jewellery, and export business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input 
                      placeholder="Search articles..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <Tabs defaultValue="All">
                  <TabsList className="flex-wrap">
                    {categories.map((category) => (
                      <TabsTrigger key={category} value={category}>
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {categories.map((category) => (
                    <TabsContent key={category} value={category}>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {(category === 'All' ? filteredPosts : filteredPosts.filter(post => post.category === category))
                          .map((post) => (
                            <BlogPostCard key={post.id} post={post} />
                          ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {categories.slice(1).map((category) => (
                        <li key={category}>
                          <Link to={`/blog/category/${category.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {category} ({blogPosts.filter(post => post.category === category).length})
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <li key={post.id} className="border-b pb-3 last:border-b-0 last:pb-0">
                          <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                            <h4 className="font-medium line-clamp-2">{post.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest blog posts delivered directly to your inbox
                    </p>
                    <form>
                      <Input 
                        type="email" 
                        placeholder="Your email" 
                        className="mb-3" 
                        required
                      />
                      <Button className="w-full">Subscribe</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogPostCard = ({ post }: { post: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-0 left-0 bg-primary text-primary-foreground text-xs px-3 py-1 m-3 rounded">
            {post.category}
          </div>
        </div>

        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">
            <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h3>
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center text-sm text-muted-foreground space-x-4 mt-auto">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User size={14} className="mr-1.5" />
              <span>{post.author}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
          <Button variant="link" asChild className="p-0 text-sm sm:text-base">
            <Link to={`/blog/${post.id}`} state={{ post: post }} className="flex items-center hover:underline">
              Read More <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Blog;
