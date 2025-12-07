export interface SectionComponent {
  id: string
  type: 'heading' | 'text' | 'button' | 'link' | 'image' | 'card' | 'grid' | 'terminal' | 'icon'
  props: Record<string, any>
  styles?: Record<string, any>
  children?: SectionComponent[]
  layout?: {
    position?: 'absolute' | 'relative'
    top?: string
    left?: string
    width?: string
    height?: string
  }
}

export interface SectionTemplate {
  id: string
  name: string
  description: string
  category: 'hero' | 'content' | 'marketing' | 'navigation' | 'footer'
  thumbnail?: string
  components: SectionComponent[]
  defaultProps: Record<string, any>
  preview: {
    width: number
    height: number
    backgroundColor: string
  }
}

export const sectionTemplates: SectionTemplate[] = [
  // 1. Full-Screen Hero
  {
    id: 'hero-fullscreen',
    name: 'Full-Screen Hero',
    description: 'Hero section with full-screen height, heading, subheading, CTAs, and optional terminal preview',
    category: 'hero',
    components: [
      {
        id: 'hero-heading',
        type: 'heading',
        props: {
          text: 'Ship Projects in\n5 Seconds.\nNot 5 Weeks.',
          size: '9',
          level: 'h1'
        },
        styles: {
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '1rem'
        }
      },
      {
        id: 'hero-subheading',
        type: 'text',
        props: {
          text: 'Join thousands of developers who are building better projects with DoPlan\'s personalized AI assistance.',
          size: '4'
        },
        styles: {
          color: '#64748b',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }
      },
      {
        id: 'hero-buttons',
        type: 'grid',
        props: {
          columns: 2,
          gap: '1rem'
        },
        children: [
          {
            id: 'cta-primary',
            type: 'button',
            props: {
              text: 'Get Started',
              variant: 'solid',
              size: '3'
            },
            styles: {
              minHeight: '48px'
            }
          },
          {
            id: 'cta-secondary',
            type: 'button',
            props: {
              text: 'View on GitHub',
              variant: 'outline',
              size: '3'
            },
            styles: {
              minHeight: '48px'
            }
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#ffffff',
      padding: 'py-20 md:py-32',
      layout: 'two-column'
    },
    preview: {
      width: 1280,
      height: 800,
      backgroundColor: '#ffffff'
    }
  },

  // 2. Split Hero
  {
    id: 'hero-split',
    name: 'Split Hero',
    description: 'Two-column hero with text on left and image/terminal on right',
    category: 'hero',
    components: [
      {
        id: 'hero-content',
        type: 'grid',
        props: {
          columns: 2,
          gap: '4rem'
        },
        children: [
          {
            id: 'hero-text',
            type: 'grid',
            props: {
              direction: 'column',
              gap: '1rem'
            },
            children: [
              {
                id: 'heading',
                type: 'heading',
                props: {
                  text: 'Build Better Projects',
                  size: '9'
                }
              },
              {
                id: 'subheading',
                type: 'text',
                props: {
                  text: 'The complete toolkit for modern developers',
                  size: '4'
                }
              }
            ]
          },
          {
            id: 'hero-visual',
            type: 'terminal',
            props: {
              lines: [
                '$ npx @doplan-dev/cli',
                '✓ Project created',
                '✓ Ready to code'
              ]
            }
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#ffffff',
      padding: 'py-20 md:py-32'
    },
    preview: {
      width: 1280,
      height: 600,
      backgroundColor: '#ffffff'
    }
  },

  // 3. Stats Cards Section
  {
    id: 'stats-grid',
    name: 'Stats Grid',
    description: 'Grid of stat cards with icons, numbers, and labels',
    category: 'marketing',
    components: [
      {
        id: 'stats-container',
        type: 'grid',
        props: {
          columns: 6,
          gap: '1rem',
          responsive: {
            mobile: { columns: 2 },
            tablet: { columns: 3 },
            desktop: { columns: 6 }
          }
        },
        children: [
          {
            id: 'stat-1',
            type: 'card',
            props: {
              icon: 'Terminal',
              value: '5',
              label: 'Main Commands'
            }
          },
          {
            id: 'stat-2',
            type: 'card',
            props: {
              icon: 'GitBranch',
              value: '15+',
              label: 'Sub-Commands'
            }
          },
          {
            id: 'stat-3',
            type: 'card',
            props: {
              icon: 'Brain',
              value: '18',
              label: 'AI Agents'
            }
          },
          {
            id: 'stat-4',
            type: 'card',
            props: {
              icon: 'Code',
              value: '1000+',
              label: 'Rules Library'
            }
          },
          {
            id: 'stat-5',
            type: 'card',
            props: {
              icon: 'Book',
              value: '52+',
              label: 'Docs Pages'
            }
          },
          {
            id: 'stat-6',
            type: 'card',
            props: {
              icon: 'Download',
              value: '10k+',
              label: 'Downloads'
            }
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#f8fafc',
      padding: 'py-20 md:py-32'
    },
    preview: {
      width: 1280,
      height: 300,
      backgroundColor: '#f8fafc'
    }
  },

  // 4. Feature Cards Grid
  {
    id: 'features-grid',
    name: 'Features Grid',
    description: 'Three-column grid of feature cards with icons, titles, and descriptions',
    category: 'marketing',
    components: [
      {
        id: 'features-container',
        type: 'grid',
        props: {
          columns: 3,
          gap: '2rem'
        },
        children: [
          {
            id: 'feature-1',
            type: 'card',
            props: {
              icon: 'Zap',
              title: 'Lightning Fast',
              description: 'Optimized performance with cached responses and parallel processing',
              items: [
                '<100ms command execution',
                'Cached responses',
                'Parallel processing'
              ]
            }
          },
          {
            id: 'feature-2',
            type: 'card',
            props: {
              icon: 'Code',
              title: 'Language Support',
              description: 'Built for modern development stacks',
              items: [
                'Go, JavaScript, TypeScript',
                'Python, Rust, and more',
                'Framework-specific rules'
              ]
            }
          },
          {
            id: 'feature-3',
            type: 'card',
            props: {
              icon: 'Monitor',
              title: 'Platform Support',
              description: 'Works everywhere you code',
              items: [
                'macOS',
                'Linux',
                'Windows (WSL)'
              ]
            }
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#ffffff',
      padding: 'py-20 md:py-32'
    },
    preview: {
      width: 1280,
      height: 600,
      backgroundColor: '#ffffff'
    }
  },

  // 5. CTA Section
  {
    id: 'cta-centered',
    name: 'Centered CTA',
    description: 'Centered call-to-action with heading, description, and buttons',
    category: 'marketing',
    components: [
      {
        id: 'cta-container',
        type: 'grid',
        props: {
          direction: 'column',
          align: 'center',
          gap: '1.5rem'
        },
        children: [
          {
            id: 'cta-heading',
            type: 'heading',
            props: {
              text: 'Ready to Ship Something?',
              size: '8'
            },
            styles: {
              textAlign: 'center'
            }
          },
          {
            id: 'cta-text',
            type: 'text',
            props: {
              text: 'Choose your path and start building today',
              size: '4'
            },
            styles: {
              textAlign: 'center',
              color: '#64748b'
            }
          },
          {
            id: 'cta-buttons',
            type: 'grid',
            props: {
              columns: 2,
              gap: '1rem'
            },
            children: [
              {
                id: 'cta-primary-btn',
                type: 'button',
                props: {
                  text: 'Get Started',
                  variant: 'solid',
                  size: '3'
                }
              },
              {
                id: 'cta-secondary-btn',
                type: 'button',
                props: {
                  text: 'View Documentation',
                  variant: 'outline',
                  size: '3'
                }
              }
            ]
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#6366f1',
      padding: 'py-20 md:py-32',
      textColor: '#ffffff'
    },
    preview: {
      width: 1280,
      height: 400,
      backgroundColor: '#6366f1'
    }
  },

  // 6. FAQ Accordion
  {
    id: 'faq-accordion',
    name: 'FAQ Accordion',
    description: 'Expandable FAQ section with questions and answers',
    category: 'content',
    components: [
      {
        id: 'faq-container',
        type: 'grid',
        props: {
          direction: 'column',
          gap: '1rem'
        },
        children: [
          {
            id: 'faq-1',
            type: 'card',
            props: {
              question: 'What is DoPlan?',
              answer: 'DoPlan is a CLI tool that helps developers build production-ready applications faster with AI assistance.',
              open: false
            }
          },
          {
            id: 'faq-2',
            type: 'card',
            props: {
              question: 'How do I get started?',
              answer: 'Simply run `npx @doplan-dev/cli` and follow the guided setup.',
              open: false
            }
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#ffffff',
      padding: 'py-20 md:py-32'
    },
    preview: {
      width: 1280,
      height: 600,
      backgroundColor: '#ffffff'
    }
  },

  // 7. Two-Column Content
  {
    id: 'content-two-column',
    name: 'Two-Column Content',
    description: 'Side-by-side content layout with text and image',
    category: 'content',
    components: [
      {
        id: 'content-grid',
        type: 'grid',
        props: {
          columns: 2,
          gap: '4rem',
          align: 'center'
        },
        children: [
          {
            id: 'content-text',
            type: 'grid',
            props: {
              direction: 'column',
              gap: '1rem'
            },
            children: [
              {
                id: 'heading',
                type: 'heading',
                props: {
                  text: 'Powerful Features',
                  size: '8'
                }
              },
              {
                id: 'description',
                type: 'text',
                props: {
                  text: 'Everything you need to build amazing projects.',
                  size: '4'
                }
              }
            ]
          },
          {
            id: 'content-image',
            type: 'image',
            props: {
              src: '',
              alt: 'Feature image',
              width: '100%',
              height: 'auto'
            }
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#ffffff',
      padding: 'py-20 md:py-32'
    },
    preview: {
      width: 1280,
      height: 500,
      backgroundColor: '#ffffff'
    }
  },

  // 8. Workflow/Command Cards
  {
    id: 'workflow-cards',
    name: 'Workflow Cards',
    description: 'Three-column layout showcasing workflow steps with commands',
    category: 'marketing',
    components: [
      {
        id: 'workflow-container',
        type: 'grid',
        props: {
          columns: 3,
          gap: '2rem'
        },
        children: [
          {
            id: 'workflow-1',
            type: 'card',
            props: {
              command: '/do',
              title: 'Capture Your Idea',
              description: 'Start with /do to capture your project idea.',
              number: '1'
            }
          },
          {
            id: 'workflow-2',
            type: 'card',
            props: {
              command: '/plan',
              title: 'Generate Your Plan',
              description: 'Use /plan to transform your idea into a complete project plan.',
              number: '2'
            }
          },
          {
            id: 'workflow-3',
            type: 'card',
            props: {
              command: '/dev',
              title: 'Start Coding',
              description: 'Run /dev to begin development with 18 AI agents.',
              number: '3'
            }
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#ffffff',
      padding: 'py-20 md:py-32'
    },
    preview: {
      width: 1280,
      height: 500,
      backgroundColor: '#ffffff'
    }
  },

  // 9. Problem & Solution Combined
  {
    id: 'problem-solution',
    name: 'Problem & Solution',
    description: 'Side-by-side comparison of problems and solutions',
    category: 'marketing',
    components: [
      {
        id: 'ps-container',
        type: 'grid',
        props: {
          columns: 2,
          gap: '2rem'
        },
        children: [
          {
            id: 'problem-section',
            type: 'card',
            props: {
              title: 'The Problem',
              icon: 'AlertCircle',
              items: [
                'Weeks of planning',
                'Complex setup',
                'Context switching'
              ]
            }
          },
          {
            id: 'solution-section',
            type: 'card',
            props: {
              title: 'The Solution',
              icon: 'CheckCircle',
              items: [
                '5-second setup',
                'Automated planning',
                'Integrated workflow'
              ]
            }
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#ffffff',
      padding: 'py-20 md:py-32'
    },
    preview: {
      width: 1280,
      height: 400,
      backgroundColor: '#ffffff'
    }
  },

  // 10. Testimonials Carousel
  {
    id: 'testimonials-carousel',
    name: 'Testimonials',
    description: 'Customer testimonials with avatars, quotes, and attribution',
    category: 'marketing',
    components: [
      {
        id: 'testimonials-container',
        type: 'grid',
        props: {
          columns: 1,
          gap: '2rem'
        },
        children: [
          {
            id: 'testimonial-1',
            type: 'card',
            props: {
              quote: 'DoPlan transformed how we build projects. The AI agents are incredibly helpful!',
              author: 'Sarah Chen',
              role: 'Senior Developer',
              company: 'Tech Corp'
            }
          }
        ]
      }
    ],
    defaultProps: {
      backgroundColor: '#f8fafc',
      padding: 'py-20 md:py-32'
    },
    preview: {
      width: 1280,
      height: 400,
      backgroundColor: '#f8fafc'
    }
  }
]

export const getTemplateById = (id: string): SectionTemplate | undefined => {
  return sectionTemplates.find(template => template.id === id)
}

export const getTemplatesByCategory = (category: SectionTemplate['category']): SectionTemplate[] => {
  return sectionTemplates.filter(template => template.category === category)
}

