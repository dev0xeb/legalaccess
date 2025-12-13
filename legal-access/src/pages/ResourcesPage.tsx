import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { LinkButton } from '../components/Button';
import { FileText } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-r from-primary-dark to-primary text-white pt-20">
        <motion.h1 {...fadeInUp} className="text-5xl font-bold mb-6">
          Legal Resources & Education
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="text-xl text-white text-opacity-90 max-w-2xl"
        >
          Free guides, articles, and educational materials to help you understand Nigerian law.
        </motion.p>
      </Section>

      {/* Resource Categories */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-light to-primary rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">{category.description}</p>
              <a href={category.href} className="inline-block font-semibold hover:underline">
                Explore →
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Blog Articles */}
      <Section className="bg-gray-50">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Latest Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest legal insights and practical guides.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-primary-light to-accent-yellow flex items-center justify-center">
                <span className="text-6xl">{article.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <a href="#article" className="text-primary font-semibold hover:text-primary-dark">
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Free Guides */}
      <Section className="bg-white">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Free Legal Guides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download comprehensive guides on various legal topics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start gap-4">
                <FileText className="text-primary flex-shrink-0" size={28} />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-dark mb-2">{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  <a href="#guide" className="text-primary font-semibold text-sm hover:underline">
                    Download PDF →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Video Library */}
      <Section className="bg-gray-50">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Video Tutorials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our expert lawyers explain complex legal concepts in simple terms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-dark to-primary">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                    <span className="text-3xl">▶</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.duration}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-gradient-to-r from-primary to-primary-dark text-white">
        <motion.div className="max-w-2xl mx-auto text-center" {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-white text-opacity-90 text-lg mb-8">
            Subscribe to our newsletter for weekly legal tips and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section className="bg-white text-center">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-primary-dark mb-6">
          Need Expert Legal Help?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
        >
          Our resources are great for learning, but for personalized legal advice, connect with an expert.
        </motion.p>
        <LinkButton href="/services" size="lg">
          Connect with a Legal Expert
        </LinkButton>
      </Section>
    </div>
  );
}

const resourceCategories = [
  {
    icon: '📚',
    title: 'Blog & Articles',
    description: 'In-depth articles on legal topics',
    href: '#articles',
  },
  {
    icon: '📄',
    title: 'Guides & Templates',
    description: 'Free downloadable legal guides',
    href: '#guides',
  },
  {
    icon: '🎥',
    title: 'Video Tutorials',
    description: 'Learn from expert lawyers',
    href: '#videos',
  },
  {
    icon: '❓',
    title: 'FAQ & Support',
    description: 'Common questions answered',
    href: '#faq',
  },
];

const articles = [
  {
    emoji: '⚖️',
    category: 'Business Law',
    date: 'Nov 15, 2024',
    title: 'Guide to Business Registration in Nigeria',
    excerpt: 'Learn the step-by-step process of registering your business in Nigeria and the legal requirements.',
  },
  {
    emoji: '🏠',
    category: 'Property Law',
    date: 'Nov 12, 2024',
    title: 'Understanding Property Rights in Nigeria',
    excerpt: 'A comprehensive guide to property ownership, inheritance, and dispute resolution in Nigeria.',
  },
  {
    emoji: '👨‍⚖️',
    category: 'Employment Law',
    date: 'Nov 10, 2024',
    title: 'Employee Rights and Responsibilities',
    excerpt: 'Know your rights as an employee in Nigeria and understand employment contracts.',
  },
  {
    emoji: '⚠️',
    category: 'Personal Law',
    date: 'Nov 8, 2024',
    title: 'Understanding Divorce Laws in Nigeria',
    excerpt: 'A guide to divorce procedures, custody laws, and spousal rights in Nigeria.',
  },
  {
    emoji: '💼',
    category: 'Contract Law',
    date: 'Nov 5, 2024',
    title: 'Essential Clauses for Contracts',
    excerpt: 'Learn about important contract clauses and how to protect yourself in agreements.',
  },
  {
    emoji: '🔒',
    category: 'Intellectual Property',
    date: 'Nov 1, 2024',
    title: 'Protecting Your Intellectual Property',
    excerpt: 'Guide to copyrights, trademarks, and patents in Nigeria.',
  },
];

const guides = [
  {
    title: 'Small Business Legal Checklist',
    description: 'Essential legal steps every small business owner should take.',
  },
  {
    title: 'Tenancy Rights & Responsibilities',
    description: 'A comprehensive guide to landlord-tenant relationships in Nigeria.',
  },
  {
    title: 'Personal Will & Estate Planning',
    description: 'Protect your family with proper estate planning.',
  },
  {
    title: 'Consumer Rights Protection',
    description: 'Know your rights as a consumer and how to seek redress.',
  },
  {
    title: 'Contract Review Checklist',
    description: 'Important things to check before signing any contract.',
  },
  {
    title: 'Starting an NGO in Nigeria',
    description: 'Legal requirements and procedures for registering an NGO.',
  },
];

const videos = [
  {
    title: 'Business Registration Process Explained',
    duration: '12 minutes',
  },
  {
    title: 'Understanding Your Employment Rights',
    duration: '15 minutes',
  },
  {
    title: 'How to Draft a Simple Contract',
    duration: '10 minutes',
  },
  {
    title: 'Property Disputes: How to Resolve',
    duration: '18 minutes',
  },
];
