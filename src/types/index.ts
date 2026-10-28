export type Theme = 'dark' | 'light';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'engineering' | 'ai' | 'cloud' | 'growth' | 'design';
  image?: string;
  problem: string;
  solution: string;
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  technologies: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  featured: boolean;
}

export type ProductStatus = 'Live' | 'Demo' | 'In Development' | 'Planned';
export type ProductPlatform = 'Desktop' | 'Web' | 'Mobile' | 'Cross-Platform';
export type ProductCategory = 'Enterprise' | 'Retail' | 'Education' | 'Healthcare' | 'Operations';

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  platform: ProductPlatform;
  category: ProductCategory;
  targetAudience: string;
  iconName?: string;
  image?: string;
  features: string[];
  specs: {
    database?: string;
    stack?: string;
    offlineSupport?: boolean;
    deployment?: string;
  };
  featured: boolean;
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  duration: string;
  feePKR: string;
  shortDescription: string;
  overview: string;
  targetAudience: string;
  prerequisites: string;
  iconName?: string;
  image?: string;
  learningOutcomes: string[];
  curriculum: {
    week: string;
    title: string;
    topics: string[];
  }[];
  enrollmentStatus: 'Open for Enrollment' | 'Upcoming Batch' | 'Confirmation Pending';
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  architecture: string;
  technologies: string[];
  keyHighlights: string[];
  image?: string;
  iconName?: string;
  metrics?: string;
  isInternalShowcase?: boolean;
  featured: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  image?: string;
  iconName?: string;
  content: {
    subheading?: string;
    paragraphs: string[];
    takeaways?: string[];
  }[];
  author: string;
  tags: string[];
}
