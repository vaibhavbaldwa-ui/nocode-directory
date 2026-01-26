import React from 'react';
import { useRouter } from 'next/router';
import { ArrowLeft, ExternalLink, Star, DollarSign, Users, Calendar } from 'lucide-react';

// Same tools data (copy from index.js)
const TOOLS = [
  {
    id: 1,
    name: "Webflow",
    category: "Website Builder",
    description: "Professional website builder with full design control and CMS capabilities. Build responsive websites visually.",
    pricing: "Free - $212/mo",
    features: ["Visual design", "CMS", "Hosting", "E-commerce", "SEO tools", "Interactions"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/webflow-logo.svg",
    website: "https://webflow.com",
    popularity: 95,
    users: "3.5M+",
    yearLaunched: 2013
  },
  {
    id: 2,
    name: "Framer",
    category: "Website Builder",
    description: "Design and publish responsive websites with interactive animations and modern UI components.",
    pricing: "Free - $30/mo",
    features: ["Design system", "CMS", "Animations", "Responsive", "Collaborations", "Templates"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/framer-logo.svg",
    website: "https://framer.com",
    popularity: 89,
    users: "1M+",
    yearLaunched: 2014
  },
  {
    id: 3,
    name: "Carrd",
    category: "Website Builder",
    description: "Simple, free, responsive one-page sites for anything. Perfect for landing pages and portfolios.",
    pricing: "Free - $49/year",
    features: ["One-page sites", "Custom domains", "Forms", "Analytics", "No coding", "Fast loading"],
    logoUrl: "https://asset.brandfetch.io/idw2ztFWLy/idRPA5THxm.png",
    website: "https://carrd.co",
    popularity: 78,
    users: "2M+",
    yearLaunched: 2016
  },
  {
    id: 4,
    name: "Wix",
    category: "Website Builder",
    description: "All-in-one website builder with AI assistance, templates, and business features for any website type.",
    pricing: "Free - $159/mo",
    features: ["AI builder", "Templates", "E-commerce", "SEO", "Mobile app", "Marketing tools"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/wix-logo.svg",
    website: "https://wix.com",
    popularity: 92,
    users: "200M+",
    yearLaunched: 2006
  },
  {
    id: 5,
    name: "Squarespace",
    category: "Website Builder",
    description: "Beautiful website templates with built-in e-commerce, scheduling, and marketing tools.",
    pricing: "$16 - $65/mo",
    features: ["Templates", "E-commerce", "Scheduling", "Email campaigns", "Analytics", "SEO"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/squarespace-logo.svg",
    website: "https://squarespace.com",
    popularity: 90,
    users: "3.8M+",
    yearLaunched: 2004
  },

  // App Builders
  {
    id: 6,
    name: "Bubble",
    category: "App Builder",
    description: "Build web applications without code using visual programming. Full-stack platform with database and logic.",
    pricing: "Free - $529/mo",
    features: ["Database", "Workflows", "API integration", "Responsive design", "Plugins", "Custom code"],
    logoUrl: "https://asset.brandfetch.io/idL2GKdHSh/idJrhwLQsE.png",
    website: "https://bubble.io",
    popularity: 92,
    users: "3M+",
    yearLaunched: 2012
  },
  {
    id: 7,
    name: "Softr",
    category: "App Builder",
    description: "Build client portals and internal tools from Airtable or Google Sheets in minutes.",
    pricing: "Free - $249/mo",
    features: ["Airtable integration", "User permissions", "Custom domains", "Templates", "Blocks", "White-label"],
    logoUrl: "https://asset.brandfetch.io/idGH-ll0Pm/idYtkNBVhb.png",
    website: "https://softr.io",
    popularity: 81,
    users: "100K+",
    yearLaunched: 2019
  },
  {
    id: 8,
    name: "Adalo",
    category: "App Builder",
    description: "Create mobile and web apps with custom databases, APIs, and native mobile features.",
    pricing: "Free - $250/mo",
    features: ["Mobile apps", "Database", "Native features", "API", "Custom actions", "Publishing"],
    logoUrl: "https://asset.brandfetch.io/idDNoORl7e/idm0E8xc0M.png",
    website: "https://adalo.com",
    popularity: 84,
    users: "500K+",
    yearLaunched: 2018
  },
  {
    id: 9,
    name: "FlutterFlow",
    category: "App Builder",
    description: "Build native mobile apps visually with Flutter. Export clean code and deploy to App Store and Play Store.",
    pricing: "Free - $70/mo",
    features: ["Native apps", "Firebase", "Custom code", "API integration", "Animations", "Export code"],
    logoUrl: "https://asset.brandfetch.io/idGZz8ulGN/idp6cq50QO.png",
    website: "https://flutterflow.io",
    popularity: 87,
    users: "750K+",
    yearLaunched: 2020
  },
  {
    id: 10,
    name: "Thunkable",
    category: "App Builder",
    description: "Drag-and-drop mobile app builder for iOS and Android with real-time testing.",
    pricing: "Free - $50/mo",
    features: ["Cross-platform", "Live testing", "Components", "Data storage", "APIs", "Publishing"],
    logoUrl: "https://asset.brandfetch.io/id_qkfr0cN/idaGgR0gN3.png",
    website: "https://thunkable.com",
    popularity: 79,
    users: "10M+",
    yearLaunched: 2015
  },

  // Database & Spreadsheets
  {
    id: 11,
    name: "Airtable",
    category: "Database",
    description: "Spreadsheet-database hybrid for organizing and collaborating. Build powerful workflows with automations.",
    pricing: "Free - $54/user/mo",
    features: ["Relational database", "Forms", "Automations", "API", "Views", "Integrations"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg",
    website: "https://airtable.com",
    popularity: 88,
    users: "300K+",
    yearLaunched: 2012
  },
  {
    id: 12,
    name: "Notion",
    category: "Database",
    description: "All-in-one workspace for notes, docs, wikis, and databases. Collaborate with your team seamlessly.",
    pricing: "Free - $25/user/mo",
    features: ["Databases", "Wiki", "Docs", "Project management", "AI", "Templates"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg",
    website: "https://notion.so",
    popularity: 96,
    users: "30M+",
    yearLaunched: 2016
  },
  {
    id: 13,
    name: "Coda",
    category: "Database",
    description: "Docs that act like apps. Combine documents, spreadsheets, and apps in one powerful tool.",
    pricing: "Free - $36/user/mo",
    features: ["Docs", "Tables", "Automations", "Packs", "Formulas", "Collaboration"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/coda-2.svg",
    website: "https://coda.io",
    popularity: 83,
    users: "25K+",
    yearLaunched: 2017
  },
  {
    id: 14,
    name: "NocoDB",
    category: "Database",
    description: "Turn your SQL database into a smart spreadsheet. Open-source Airtable alternative.",
    pricing: "Free - $99/mo",
    features: ["SQL databases", "REST APIs", "Spreadsheet UI", "Open source", "Self-hosted", "Automations"],
    logoUrl: "https://asset.brandfetch.io/idv382mII_/idWc_gXVBE.png",
    website: "https://nocodb.com",
    popularity: 76,
    users: "50K+",
    yearLaunched: 2021
  },

  // Automation
  {
    id: 15,
    name: "Zapier",
    category: "Automation",
    description: "Connect and automate workflows between 6000+ apps. No coding required for complex integrations.",
    pricing: "Free - $799/mo",
    features: ["6000+ integrations", "Multi-step workflows", "Filters", "Webhooks", "Paths", "Formatter"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
    website: "https://zapier.com",
    popularity: 94,
    users: "2M+",
    yearLaunched: 2011
  },
  {
    id: 16,
    name: "Make",
    category: "Automation",
    description: "Visual platform to design, build and automate workflows with 1500+ app integrations.",
    pricing: "Free - $299/mo",
    features: ["Visual builder", "1500+ integrations", "Error handling", "Scheduling", "HTTP requests", "Data stores"],
    logoUrl: "https://asset.brandfetch.io/idL0F95IP_/idZnea7kse.png",
    website: "https://make.com",
    popularity: 87,
    users: "500K+",
    yearLaunched: 2012
  },
  {
    id: 17,
    name: "n8n",
    category: "Automation",
    description: "Fair-code workflow automation. Self-hostable alternative to Zapier with technical control.",
    pricing: "Free - $240/mo",
    features: ["400+ integrations", "Self-hosted", "Code nodes", "Webhooks", "Custom nodes", "Fair-code"],
    logoUrl: "https://asset.brandfetch.io/idJf7r6Mv0/idFdo252pJ.png",
    website: "https://n8n.io",
    popularity: 82,
    users: "100K+",
    yearLaunched: 2019
  },

  // E-commerce
  {
    id: 18,
    name: "Shopify",
    category: "E-commerce",
    description: "Complete e-commerce platform for online stores. Sell products, manage inventory, and grow your business.",
    pricing: "$29 - $299/mo",
    features: ["Online store", "Payment processing", "Inventory", "Marketing", "Analytics", "Apps"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    website: "https://shopify.com",
    popularity: 97,
    users: "4.4M+",
    yearLaunched: 2006
  },
  {
    id: 19,
    name: "Gumroad",
    category: "E-commerce",
    description: "Sell digital products directly to your audience. Perfect for creators, no store needed.",
    pricing: "Free (10% fee)",
    features: ["Digital products", "Subscriptions", "Email marketing", "Analytics", "Custom domain", "Affiliates"],
    logoUrl: "https://asset.brandfetch.io/idZH3hiJZI/idWv7K8UYV.png",
    website: "https://gumroad.com",
    popularity: 85,
    users: "100K+",
    yearLaunched: 2011
  },
  {
    id: 20,
    name: "Podia",
    category: "E-commerce",
    description: "Sell online courses, memberships, and digital downloads. All-in-one platform for creators.",
    pricing: "Free - $89/mo",
    features: ["Courses", "Memberships", "Digital downloads", "Email marketing", "Website", "Community"],
    logoUrl: "https://asset.brandfetch.io/idgG5kHbgU/idJdtvT9l9.png",
    website: "https://podia.com",
    popularity: 80,
    users: "50K+",
    yearLaunched: 2014
  },

  // Forms & Surveys
  {
    id: 21,
    name: "Typeform",
    category: "Forms",
    description: "Build beautiful, engaging forms and surveys that people actually want to fill out.",
    pricing: "Free - $99/mo",
    features: ["Conditional logic", "Payment collection", "Integrations", "Analytics", "Custom design", "Video"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/typeform-1.svg",
    website: "https://typeform.com",
    popularity: 85,
    users: "150K+",
    yearLaunched: 2012
  },
  {
    id: 22,
    name: "Tally",
    category: "Forms",
    description: "Free form builder with unlimited forms and responses. Simple like Notion, powerful like Typeform.",
    pricing: "Free - $29/mo",
    features: ["Unlimited forms", "Conditional logic", "Calculations", "Integrations", "Custom design", "No branding"],
    logoUrl: "https://asset.brandfetch.io/id20mQzUbt/id7k9cApxu.png",
    website: "https://tally.so",
    popularity: 79,
    users: "500K+",
    yearLaunched: 2020
  },
  {
    id: 23,
    name: "Fillout",
    category: "Forms",
    description: "Powerful forms connected to your database. Schedule meetings, collect payments, and more.",
    pricing: "Free - $59/mo",
    features: ["Database sync", "Scheduling", "Payments", "Logic", "Multi-step", "Embeds"],
    logoUrl: "https://asset.brandfetch.io/idJ4YwO1wy/idHw3DT6oB.png",
    website: "https://fillout.com",
    popularity: 77,
    users: "100K+",
    yearLaunched: 2022
  },

  // Mobile App Builders
  {
    id: 24,
    name: "Glide",
    category: "Mobile Apps",
    description: "Turn spreadsheets into mobile apps instantly. No coding, just connect your data.",
    pricing: "Free - $249/mo",
    features: ["Google Sheets", "Native apps", "User auth", "Custom actions", "Components", "Publishing"],
    logoUrl: "https://asset.brandfetch.io/idAnLS0jxI/idVStKs_86.png",
    website: "https://glideapps.com",
    popularity: 82,
    users: "400K+",
    yearLaunched: 2018
  },
  {
    id: 25,
    name: "AppSheet",
    category: "Mobile Apps",
    description: "Google's no-code platform to build mobile and web apps from spreadsheets.",
    pricing: "Free - $10/user/mo",
    features: ["Google integration", "Offline mode", "Automation", "Security", "Custom branding", "APIs"],
    logoUrl: "https://asset.brandfetch.io/idhZxIQlYQ/id8xCPHHty.png",
    website: "https://appsheet.com",
    popularity: 80,
    users: "300K+",
    yearLaunched: 2014
  },

  // Design & Prototyping
  {
    id: 26,
    name: "Figma",
    category: "Design",
    description: "Collaborative design tool for creating interfaces, prototypes, and design systems.",
    pricing: "Free - $75/user/mo",
    features: ["Collaborative", "Prototyping", "Design systems", "Plugins", "Dev mode", "FigJam"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/figma-5.svg",
    website: "https://figma.com",
    popularity: 98,
    users: "4M+",
    yearLaunched: 2016
  },
  {
    id: 27,
    name: "Canva",
    category: "Design",
    description: "Design anything visually with templates for social media, presentations, logos, and more.",
    pricing: "Free - $55/user/mo",
    features: ["Templates", "Brand kit", "AI tools", "Video editor", "Presentations", "Social media"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/canva-1.svg",
    website: "https://canva.com",
    popularity: 99,
    users: "135M+",
    yearLaunched: 2012
  },

  // Analytics & Tracking
  {
    id: 28,
    name: "Mixpanel",
    category: "Analytics",
    description: "Product analytics to understand user behavior and improve engagement.",
    pricing: "Free - Custom",
    features: ["Event tracking", "Funnels", "Retention", "A/B testing", "Reports", "Alerts"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/mixpanel.svg",
    website: "https://mixpanel.com",
    popularity: 88,
    users: "8K+",
    yearLaunched: 2009
  },
  {
    id: 29,
    name: "Plausible",
    category: "Analytics",
    description: "Simple, privacy-friendly Google Analytics alternative. Lightweight and open-source.",
    pricing: "$9 - $150/mo",
    features: ["Privacy-first", "Lightweight", "No cookies", "EU-hosted", "Open source", "Simple dashboard"],
    logoUrl: "https://asset.brandfetch.io/idJL9TyPZ5/idzwKjBaOn.png",
    website: "https://plausible.io",
    popularity: 81,
    users: "10K+",
    yearLaunched: 2019
  },

  // Email Marketing
  {
    id: 30,
    name: "Mailchimp",
    category: "Email Marketing",
    description: "All-in-one email marketing platform for growing businesses.",
    pricing: "Free - $350/mo",
    features: ["Email campaigns", "Automation", "Landing pages", "CRM", "Analytics", "A/B testing"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg",
    website: "https://mailchimp.com",
    popularity: 93,
    users: "13M+",
    yearLaunched: 2001
  },
  {
    id: 31,
    name: "ConvertKit",
    category: "Email Marketing",
    description: "Email marketing for creators. Build your audience and monetize your content.",
    pricing: "Free - $79/mo",
    features: ["Email sequences", "Landing pages", "Forms", "Automation", "Creator tools", "Commerce"],
    logoUrl: "https://asset.brandfetch.io/idCeaBRuDY/idHo9r01Ux.png",
    website: "https://convertkit.com",
    popularity: 84,
    users: "500K+",
    yearLaunched: 2013
  },
  {
    id: 32,
    name: "Beehiiv",
    category: "Email Marketing",
    description: "Newsletter platform built for growth. Monetize, analyze, and scale your newsletter.",
    pricing: "Free - $99/mo",
    features: ["Newsletter", "Monetization", "Analytics", "Referrals", "Ad network", "3D analytics"],
    logoUrl: "https://asset.brandfetch.io/idLfruSPR2/iddV50Qmj0.png",
    website: "https://beehiiv.com",
    popularity: 86,
    users: "100K+",
    yearLaunched: 2021
  },

  // Project Management
  {
    id: 33,
    name: "Monday.com",
    category: "Project Management",
    description: "Work OS to run projects, workflows, and processes in one place.",
    pricing: "$8 - $16/user/mo",
    features: ["Boards", "Automations", "Integrations", "Dashboards", "Time tracking", "Forms"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/monday-logo.svg",
    website: "https://monday.com",
    popularity: 91,
    users: "180K+",
    yearLaunched: 2012
  },
  {
    id: 34,
    name: "ClickUp",
    category: "Project Management",
    description: "All-in-one productivity platform. Replace multiple tools with ClickUp.",
    pricing: "Free - $19/user/mo",
    features: ["Tasks", "Docs", "Goals", "Time tracking", "Automations", "Whiteboards"],
    logoUrl: "https://asset.brandfetch.io/idZCYWVf4e/idRwC2tPaN.png",
    website: "https://clickup.com",
    popularity: 90,
    users: "10M+",
    yearLaunched: 2017
  },
  {
    id: 35,
    name: "Asana",
    category: "Project Management",
    description: "Organize work with projects, tasks, and teams. Keep everyone aligned.",
    pricing: "Free - $24.99/user/mo",
    features: ["Projects", "Tasks", "Timeline", "Portfolios", "Goals", "Automations"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg",
    website: "https://asana.com",
    popularity: 89,
    users: "130K+",
    yearLaunched: 2008
  },

  // CRM & Sales
  {
    id: 36,
    name: "HubSpot",
    category: "CRM",
    description: "Complete CRM platform for marketing, sales, and customer service.",
    pricing: "Free - $3,600/mo",
    features: ["CRM", "Marketing", "Sales", "Service", "CMS", "Operations"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/hubspot-2.svg",
    website: "https://hubspot.com",
    popularity: 94,
    users: "184K+",
    yearLaunched: 2006
  },
  {
    id: 37,
    name: "Pipedrive",
    category: "CRM",
    description: "Sales CRM and pipeline management tool designed by salespeople for sales teams.",
    pricing: "$14 - $99/user/mo",
    features: ["Pipeline", "Automation", "Email integration", "Reporting", "Mobile app", "Web forms"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/pipedrive.svg",
    website: "https://pipedrive.com",
    popularity: 87,
    users: "100K+",
    yearLaunched: 2010
  },

  // Community & Social
  {
    id: 38,
    name: "Circle",
    category: "Community",
    description: "Build and grow your online community. Courses, discussions, and members in one place.",
    pricing: "$39 - $219/mo",
    features: ["Community", "Courses", "Events", "Chat", "Integrations", "Custom branding"],
    logoUrl: "https://asset.brandfetch.io/idnT0g-5fb/idnDbNRxdy.png",
    website: "https://circle.so",
    popularity: 83,
    users: "10K+",
    yearLaunched: 2019
  },
  {
    id: 39,
    name: "Discord",
    category: "Community",
    description: "Voice, video, and text chat for communities. Free and easy to use.",
    pricing: "Free - $9.99/mo",
    features: ["Voice chat", "Text channels", "Video", "Screen share", "Bots", "Moderation"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/discord-6.svg",
    website: "https://discord.com",
    popularity: 97,
    users: "150M+",
    yearLaunched: 2015
  },

  // Scheduling & Booking
  {
    id: 40,
    name: "Calendly",
    category: "Scheduling",
    description: "Scheduling automation that eliminates back-and-forth emails.",
    pricing: "Free - $16/user/mo",
    features: ["Meeting scheduling", "Calendar sync", "Reminders", "Integrations", "Custom branding", "Analytics"],
    logoUrl: "https://asset.brandfetch.io/idYp69C2Ci/idMZUBX2vM.png",
    website: "https://calendly.com",
    popularity: 92,
    users: "20M+",
    yearLaunched: 2013
  },
  {
    id: 41,
    name: "Cal.com",
    category: "Scheduling",
    description: "Open-source Calendly alternative. Self-host or use cloud version.",
    pricing: "Free - $25/user/mo",
    features: ["Open source", "Self-hosted", "Meeting scheduler", "Workflows", "Apps", "Teams"],
    logoUrl: "https://asset.brandfetch.io/idV-SRNoSB/id0PQznJa1.png",
    website: "https://cal.com",
    popularity: 81,
    users: "50K+",
    yearLaunched: 2021
  },

  // Video & Content
  {
    id: 42,
    name: "Loom",
    category: "Video",
    description: "Record quick videos of your screen and camera. Share instantly with a link.",
    pricing: "Free - $15/user/mo",
    features: ["Screen recording", "Camera", "Editing", "Transcripts", "Analytics", "Integrations"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/loom-icon.svg",
    website: "https://loom.com",
    popularity: 90,
    users: "25M+",
    yearLaunched: 2016
  },
  {
    id: 43,
    name: "Descript",
    category: "Video",
    description: "Edit videos by editing text. Transcription, screen recording, and AI tools.",
    pricing: "Free - $50/user/mo",
    features: ["Text-based editing", "Transcription", "Screen recording", "Filler word removal", "Studio sound", "AI voices"],
    logoUrl: "https://asset.brandfetch.io/id4N_zBfY0/idKMKi0dD3.png",
    website: "https://descript.com",
    popularity: 88,
    users: "1M+",
    yearLaunched: 2017
  },

  // AI & Chatbots
  {
    id: 44,
    name: "Chatbase",
    category: "AI Tools",
    description: "Build AI chatbots trained on your data. Add to website with no coding.",
    pricing: "Free - $399/mo",
    features: ["Custom training", "Website widget", "Integrations", "Analytics", "Multi-language", "White-label"],
    logoUrl: "https://asset.brandfetch.io/id6EhbjPg4/idahKvE5yQ.png",
    website: "https://chatbase.co",
    popularity: 79,
    users: "100K+",
    yearLaunched: 2023
  },
  {
    id: 45,
    name: "Intercom",
    category: "AI Tools",
    description: "Customer service platform with AI chatbot, live chat, and help center.",
    pricing: "$39 - $139/mo",
    features: ["AI chatbot", "Live chat", "Help center", "Product tours", "Email", "Automation"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg",
    website: "https://intercom.com",
    popularity: 91,
    users: "25K+",
    yearLaunched: 2011
  },

  // Payment Processing
  {
    id: 46,
    name: "Stripe",
    category: "Payments",
    description: "Complete payments platform for internet businesses. Accept payments globally.",
    pricing: "2.9% + $0.30 per transaction",
    features: ["Payment processing", "Subscriptions", "Invoicing", "Terminal", "Connect", "Radar"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    website: "https://stripe.com",
    popularity: 96,
    users: "4M+",
    yearLaunched: 2010
  },
  {
    id: 47,
    name: "Lemon Squeezy",
    category: "Payments",
    description: "Merchant of record for software businesses. Handle payments, taxes, and fraud.",
    pricing: "5% + transaction fees",
    features: ["Merchant of record", "Tax handling", "Subscriptions", "Global payments", "Fraud prevention", "Affiliates"],
    logoUrl: "https://asset.brandfetch.io/idZ_GuJVXH/idMKLi0YI1.png",
    website: "https://lemonsqueezy.com",
    popularity: 82,
    users: "20K+",
    yearLaunched: 2021
  },

  // Documentation & Knowledge Base
  {
    id: 48,
    name: "Gitbook",
    category: "Documentation",
    description: "Modern documentation platform for technical teams. Beautiful docs, easy to maintain.",
    pricing: "Free - $12.50/user/mo",
    features: ["Docs", "Git sync", "API reference", "Integrations", "Search", "Custom domain"],
    logoUrl: "https://asset.brandfetch.io/id3eJxO8oG/idxuUG5OIx.png",
    website: "https://gitbook.com",
    popularity: 85,
    users: "500K+",
    yearLaunched: 2014
  },
  {
    id: 49,
    name: "Notion",
    category: "Documentation",
    description: "Create beautiful docs, wikis, and knowledge bases with databases and collaboration.",
    pricing: "Free - $25/user/mo",
    features: ["Docs", "Wiki", "Databases", "Collaboration", "AI", "Templates"],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg",
    website: "https://notion.so",
    popularity: 96,
    users: "30M+",
    yearLaunched: 2016
  },
  // Internal Tools
  {
    id: 50,
    name: "Retool",
    category: "Internal Tools",
    description: "Build internal tools remarkably fast. Connect to databases and APIs.",
    pricing: "$10 - $50/user/mo",
    features: ["Drag-and-drop", "Database connections", "API integration", "Custom code", "Workflows", "Permissions"],
    logoUrl: "https://asset.brandfetch.io/idGvgCgGbi/idY6PdvWEL.png",
    website: "https://retool.com",
    popularity: 87,
    users: "10K+",
    yearLaunched: 2017
  },
  {
  id: 51,
  name: "Memberstack",
  category: "Website Builder",
  description: "Add user accounts, gated content, and payments to any website without backend code.",
  pricing: "$25 - $95/mo",
  features: ["User authentication", "Memberships", "Gated content", "Payments", "Custom fields", "Webhooks"],
  logoUrl: "https://asset.brandfetch.io/idxSlDE0lr/idFYJYJi57.png",
  website: "https://memberstack.com",
  popularity: 78,
  users: "30K+",
  yearLaunched: 2018
},
{
  id: 52,
  name: "Dorik",
  category: "Website Builder",
  description: "AI-powered website builder with 250+ templates. Create landing pages and portfolios fast.",
  pricing: "Free - $39/mo",
  features: ["AI builder", "Templates", "Custom code", "CMS", "White-label", "SEO tools"],
  logoUrl: "https://asset.brandfetch.io/idw4m_94Ul/idtDt_Z8XC.png",
  website: "https://dorik.com",
  popularity: 74,
  users: "50K+",
  yearLaunched: 2020
},
{
  id: 53,
  name: "Unicorn Platform",
  category: "Website Builder",
  description: "Landing page builder for startups and SaaS. Modern templates with pricing tables and CTAs.",
  pricing: "$8 - $24/mo",
  features: ["Landing pages", "Templates", "Custom domain", "Forms", "Analytics", "A/B testing"],
  logoUrl: "https://asset.brandfetch.io/idj6IU9fqo/idMljHc2-Q.png",
  website: "https://unicornplatform.com",
  popularity: 72,
  users: "25K+",
  yearLaunched: 2018
},
{
  id: 54,
  name: "Draftbit",
  category: "App Builder",
  description: "Build native mobile apps visually with React Native. Export source code.",
  pricing: "$19 - $99/mo",
  features: ["React Native", "Visual builder", "Export code", "APIs", "Custom components", "Publishing"],
  logoUrl: "https://asset.brandfetch.io/idFKdVoDFZ/idJXI5hRsX.png",
  website: "https://draftbit.com",
  popularity: 79,
  users: "100K+",
  yearLaunched: 2018
},
{
  id: 55,
  name: "Bravo Studio",
  category: "App Builder",
  description: "Turn Figma designs into native iOS and Android apps without coding.",
  pricing: "$19 - $119/mo",
  features: ["Figma integration", "Native apps", "API connection", "Real-time sync", "Push notifications", "App publishing"],
  logoUrl: "https://asset.brandfetch.io/idQsLqJNSe/idvuPF0cZ-.png",
  website: "https://bravostudio.app",
  popularity: 76,
  users: "50K+",
  yearLaunched: 2018
},
{
  id: 56,
  name: "Bildr",
  category: "App Builder",
  description: "Build complex web applications with database, logic, and custom interactions.",
  pricing: "$29 - $149/mo",
  features: ["Backend logic", "Database", "API integration", "Custom code", "Responsive design", "Version control"],
  logoUrl: "https://asset.brandfetch.io/idg7PNdkw1/idT2LGPJty.png",
  website: "https://bildr.com",
  popularity: 75,
  users: "40K+",
  yearLaunched: 2019
},
{
  id: 57,
  name: "Baserow",
  category: "Database",
  description: "Open-source no-code database. Alternative to Airtable you can self-host.",
  pricing: "Free - $10/user/mo",
  features: ["Open source", "Self-hosted", "API", "Formulas", "Views", "Webhooks"],
  logoUrl: "https://asset.brandfetch.io/idMwbCu-Fv/idw5AXjgFy.png",
  website: "https://baserow.io",
  popularity: 77,
  users: "100K+",
  yearLaunched: 2020
},
{
  id: 58,
  name: "Rows",
  category: "Database",
  description: "Spreadsheet with superpowers. Integrate data from APIs, automate tasks.",
  pricing: "Free - $59/user/mo",
  features: ["Integrations", "Automations", "API connections", "Sharing", "Templates", "Data sync"],
  logoUrl: "https://asset.brandfetch.io/idOSuu_bG9/idOCZsGZRQ.png",
  website: "https://rows.com",
  popularity: 74,
  users: "50K+",
  yearLaunched: 2016
},
{
  id: 59,
  name: "Smartsuite",
  category: "Database",
  description: "Work management platform to manage projects, processes and teams in one place.",
  pricing: "$10 - $25/user/mo",
  features: ["Databases", "Automations", "Dashboards", "Forms", "Timeline", "Kanban"],
  logoUrl: "https://asset.brandfetch.io/idX5BQFNdF/idZTgCBbYr.png",
  website: "https://smartsuite.com",
  popularity: 73,
  users: "10K+",
  yearLaunched: 2022
},
{
  id: 60,
  name: "Pabbly Connect",
  category: "Automation",
  description: "Affordable automation alternative to Zapier. Connect apps and automate workflows.",
  pricing: "$19 - $199/mo",
  features: ["1400+ integrations", "Multi-step", "Filters", "Router", "Unlimited workflows", "Webhook"],
  logoUrl: "https://asset.brandfetch.io/idWAYYJhRA/idJDr4dUxj.png",
  website: "https://pabbly.com/connect",
  popularity: 78,
  users: "50K+",
  yearLaunched: 2019
},
{
  id: 61,
  name: "Activepieces",
  category: "Automation",
  description: "Open-source business automation tool. Self-host or use cloud.",
  pricing: "Free - $500/mo",
  features: ["Open source", "Self-hosted", "200+ integrations", "Visual builder", "Webhooks", "Custom pieces"],
  logoUrl: "https://asset.brandfetch.io/idJVn09j8r/idPCQBmMHi.png",
  website: "https://activepieces.com",
  popularity: 72,
  users: "30K+",
  yearLaunched: 2022
},
{
  id: 62,
  name: "Integrately",
  category: "Automation",
  description: "One-click automations for 1100+ apps. Simpler than Zapier.",
  pricing: "Free - $99/mo",
  features: ["1100+ apps", "One-click automations", "Multi-step", "Webhooks", "Templates", "Live chat support"],
  logoUrl: "https://asset.brandfetch.io/id0r8ZEaGN/idJj6HVjWN.png",
  website: "https://integrately.com",
  popularity: 76,
  users: "200K+",
  yearLaunched: 2020
},
{
  id: 63,
  name: "WooCommerce",
  category: "E-commerce",
  description: "Open-source e-commerce plugin for WordPress. Flexible and customizable.",
  pricing: "Free (plugin)",
  features: ["WordPress plugin", "Payments", "Inventory", "Extensions", "Themes", "Shipping"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
  website: "https://woocommerce.com",
  popularity: 94,
  users: "5M+",
  yearLaunched: 2011
},
{
  id: 64,
  name: "Big Cartel",
  category: "E-commerce",
  description: "Simple online store for artists and makers. Easy setup, no transaction fees.",
  pricing: "Free - $19.99/mo",
  features: ["Product listings", "Inventory", "Custom domain", "No transaction fees", "Mobile responsive", "Analytics"],
  logoUrl: "https://asset.brandfetch.io/idXXKTIHKx/idOL96hh_e.png",
  website: "https://bigcartel.com",
  popularity: 76,
  users: "500K+",
  yearLaunched: 2005
},
{
  id: 65,
  name: "Sellfy",
  category: "E-commerce",
  description: "Sell digital products, physical goods, and subscriptions from your custom store.",
  pricing: "$29 - $159/mo",
  features: ["Digital products", "Print on demand", "Subscriptions", "Marketing", "Analytics", "Email marketing"],
  logoUrl: "https://asset.brandfetch.io/id_kqJUWtb/idrqvt5sBf.png",
  website: "https://sellfy.com",
  popularity: 74,
  users: "100K+",
  yearLaunched: 2011
},
{
  id: 66,
  name: "JotForm",
  category: "Forms",
  description: "Powerful form builder with 10,000+ templates. Collect payments and data easily.",
  pricing: "Free - $99/mo",
  features: ["10K+ templates", "Conditional logic", "Payments", "E-signatures", "HIPAA compliance", "Integrations"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/jotform-icon.svg",
  website: "https://jotform.com",
  popularity: 87,
  users: "20M+",
  yearLaunched: 2006
},
{
  id: 67,
  name: "Formstack",
  category: "Forms",
  description: "Enterprise-grade forms with advanced workflows and document generation.",
  pricing: "$50 - $250/mo",
  features: ["Advanced workflows", "Document generation", "E-signatures", "HIPAA", "Conditional logic", "Analytics"],
  logoUrl: "https://asset.brandfetch.io/idmpIvgZu0/idTz8QWHCE.png",
  website: "https://formstack.com",
  popularity: 80,
  users: "400K+",
  yearLaunched: 2006
},
{
  id: 68,
  name: "Involve.me",
  category: "Forms",
  description: "Interactive forms, quizzes, and calculators with personalization and logic jumps.",
  pricing: "Free - $99/mo",
  features: ["Interactive forms", "Quizzes", "Calculators", "Logic jumps", "Personalization", "Analytics"],
  logoUrl: "https://asset.brandfetch.io/idQBL77DvF/iddzkMCuIE.png",
  website: "https://involve.me",
  popularity: 75,
  users: "50K+",
  yearLaunched: 2019
},
{
  id: 69,
  name: "Apptivo",
  category: "CRM",
  description: "All-in-one business management suite with CRM, project management, and invoicing.",
  pricing: "$10 - $25/user/mo",
  features: ["CRM", "Project management", "Invoicing", "Inventory", "Time tracking", "Integrations"],
  logoUrl: "https://asset.brandfetch.io/id8JYNfLFf/idJyGVxn6t.png",
  website: "https://apptivo.com",
  popularity: 75,
  users: "100K+",
  yearLaunched: 2009
},
{
  id: 70,
  name: "Zoho CRM",
  category: "CRM",
  description: "Comprehensive CRM with sales automation, analytics, and AI assistant.",
  pricing: "$14 - $52/user/mo",
  features: ["Sales automation", "AI assistant", "Analytics", "Workflows", "Multi-channel", "Mobile app"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/zoho-crm.svg",
  website: "https://zoho.com/crm",
  popularity: 89,
  users: "250K+",
  yearLaunched: 2005
},
{
  id: 71,
  name: "Copper",
  category: "CRM",
  description: "CRM built for Google Workspace. Manage relationships directly from Gmail.",
  pricing: "$23 - $99/user/mo",
  features: ["Google integration", "Pipeline management", "Automation", "Mobile app", "Reports", "Chrome extension"],
  logoUrl: "https://asset.brandfetch.io/idwNJz_nt_/idf25G6cny.png",
  website: "https://copper.com",
  popularity: 81,
  users: "30K+",
  yearLaunched: 2013
},
{
  id: 72,
  name: "Mighty Networks",
  category: "Community",
  description: "Build communities, courses, and memberships under your own brand.",
  pricing: "$39 - $119/mo",
  features: ["Community", "Courses", "Memberships", "Events", "Native apps", "Content"],
  logoUrl: "https://asset.brandfetch.io/idvIq2nMmR/idLH1gHQyu.png",
  website: "https://mightynetworks.com",
  popularity: 80,
  users: "10K+",
  yearLaunched: 2017
},
{
  id: 73,
  name: "Discourse",
  category: "Community",
  description: "Open-source discussion platform for civilized communities.",
  pricing: "Free (self-hosted)",
  features: ["Open source", "Forums", "Moderation", "Badges", "Trust levels", "Mobile responsive"],
  logoUrl: "https://asset.brandfetch.io/idRdP_vN2o/idh-8EBL4O.png",
  website: "https://discourse.org",
  popularity: 82,
  users: "100K+",
  yearLaunched: 2013
},
{
  id: 74,
  name: "TidyCal",
  category: "Scheduling",
  description: "Lifetime deal scheduling tool. Like Calendly but with one-time payment.",
  pricing: "$29 (lifetime)",
  features: ["Unlimited bookings", "Multiple calendars", "Integrations", "Custom branding", "No monthly fees", "Zoom integration"],
  logoUrl: "https://asset.brandfetch.io/idJkKgF-TC/idDqkC9TBB.png",
  website: "https://tidycal.com",
  popularity: 77,
  users: "50K+",
  yearLaunched: 2021
},
{
  id: 75,
  name: "Acuity Scheduling",
  category: "Scheduling",
  description: "Appointment scheduling with payment processing and calendar sync.",
  pricing: "$16 - $61/mo",
  features: ["Appointments", "Payments", "Calendar sync", "Intake forms", "Packages", "Gift certificates"],
  logoUrl: "https://asset.brandfetch.io/id_MuafqL3/idJkF-WmWi.png",
  website: "https://acuityscheduling.com",
  popularity: 83,
  users: "50K+",
  yearLaunched: 2006
},
{
  id: 76,
  name: "Riverside",
  category: "Video",
  description: "Record high-quality podcasts and videos remotely with studio-quality audio and video.",
  pricing: "Free - $24/mo",
  features: ["4K recording", "Local recording", "Live streaming", "Transcriptions", "Editor", "Multi-track"],
  logoUrl: "https://asset.brandfetch.io/idV3PzDM2L/idj_eYm9yv.png",
  website: "https://riverside.fm",
  popularity: 85,
  users: "100K+",
  yearLaunched: 2020
},
{
  id: 77,
  name: "Vimeo",
  category: "Video",
  description: "Professional video hosting, streaming, and collaboration platform.",
  pricing: "$12 - $75/mo",
  features: ["Video hosting", "Live streaming", "Analytics", "Privacy controls", "Video player", "Marketing tools"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/vimeo-icon.svg",
  website: "https://vimeo.com",
  popularity: 88,
  users: "200M+",
  yearLaunched: 2004
},
{
  id: 78,
  name: "Synthesia",
  category: "Video",
  description: "Create AI videos with AI avatars and voiceovers. No cameras or actors needed.",
  pricing: "$22 - $67/mo",
  features: ["AI avatars", "Text to video", "140+ languages", "Templates", "Custom avatars", "Screen recording"],
  logoUrl: "https://asset.brandfetch.io/idZvFt-GoD/idmEgA1cK1.png",
  website: "https://synthesia.io",
  popularity: 84,
  users: "50K+",
  yearLaunched: 2017
},
{
  id: 79,
  name: "Landbot",
  category: "AI Tools",
  description: "No-code chatbot builder for websites, WhatsApp, and Facebook Messenger.",
  pricing: "Free - $400/mo",
  features: ["Chatbot builder", "WhatsApp", "Lead generation", "Integrations", "Analytics", "Templates"],
  logoUrl: "https://asset.brandfetch.io/idFP-T88en/idLNQhohg5.png",
  website: "https://landbot.io",
  popularity: 80,
  users: "30K+",
  yearLaunched: 2017
},
{
  id: 80,
  name: "Voiceflow",
  category: "AI Tools",
  description: "Design, prototype, and build AI agents and voice assistants collaboratively.",
  pricing: "Free - $625/mo",
  features: ["Conversational AI", "Voice apps", "Chatbots", "Team collaboration", "Integrations", "Analytics"],
  logoUrl: "https://asset.brandfetch.io/idw3dD5rPC/idMHpIMd6i.png",
  website: "https://voiceflow.com",
  popularity: 82,
  users: "200K+",
  yearLaunched: 2019
},
{
  id: 81,
  name: "Pickaxe",
  category: "AI Tools",
  description: "Build and embed AI tools powered by your own knowledge base without coding.",
  pricing: "$0 - $199/mo",
  features: ["Custom AI tools", "Knowledge base", "Embedding", "Monetization", "No code", "White-label"],
  logoUrl: "https://asset.brandfetch.io/idJ4XvP-hY/idP1FGvHkH.png",
  website: "https://pickaxeproject.com",
  popularity: 75,
  users: "20K+",
  yearLaunched: 2023
},
{
  id: 82,
  name: "PayPal",
  category: "Payments",
  description: "Global payment platform for online and in-person transactions.",
  pricing: "2.9% + $0.30 per transaction",
  features: ["Payment processing", "Invoicing", "Subscriptions", "Checkout", "International", "Buyer protection"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/paypal-2.svg",
  website: "https://paypal.com",
  popularity: 98,
  users: "400M+",
  yearLaunched: 1998
},
{
  id: 83,
  name: "Paddle",
  category: "Payments",
  description: "Payment infrastructure for SaaS. Handle billing, tax, and subscriptions globally.",
  pricing: "5% + transaction fees",
  features: ["Merchant of record", "Tax handling", "Subscriptions", "Invoicing", "Recovery", "Analytics"],
  logoUrl: "https://asset.brandfetch.io/idJ59uXHM7/idyJ5oYYbW.png",
  website: "https://paddle.com",
  popularity: 84,
  users: "4K+",
  yearLaunched: 2012
},
{
  id: 84,
  name: "Square",
  category: "Payments",
  description: "Payment processing for online and in-person sales with POS hardware.",
  pricing: "2.6% + $0.10 per transaction",
  features: ["Payment processing", "POS system", "Invoicing", "Online store", "Inventory", "Payroll"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/square-logo.svg",
  website: "https://squareup.com",
  popularity: 93,
  users: "4M+",
  yearLaunched: 2009
},
{
  id: 85,
  name: "Readme",
  category: "Documentation",
  description: "Beautiful API documentation that developers love. Interactive references and guides.",
  pricing: "$99 - $399/mo",
  features: ["API docs", "Interactive", "Guides", "Custom branding", "Analytics", "Versioning"],
  logoUrl: "https://asset.brandfetch.io/idKfQrbT_c/idGYCqOsFG.png",
  website: "https://readme.com",
  popularity: 81,
  users: "5K+",
  yearLaunched: 2014
},
{
  id: 86,
  name: "Docusaurus",
  category: "Documentation",
  description: "Build optimized documentation websites with React. Open-source by Meta.",
  pricing: "Free (open source)",
  features: ["React-based", "Markdown", "Versioning", "Search", "i18n", "Open source"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/docusaurus.svg",
  website: "https://docusaurus.io",
  popularity: 86,
  users: "100K+",
  yearLaunched: 2017
},
{
  id: 87,
  name: "Slite",
  category: "Documentation",
  description: "Knowledge base for remote teams. Beautiful docs with AI-powered search.",
  pricing: "$8 - $15/user/mo",
  features: ["Knowledge base", "AI search", "Templates", "Collaboration", "Integrations", "Private docs"],
  logoUrl: "https://asset.brandfetch.io/idW6L-p3g9/idSyNRhXwF.png",
  website: "https://slite.com",
  popularity: 78,
  users: "200K+",
  yearLaunched: 2016
},
{
  id: 88,
  name: "Appsmith",
  category: "Internal Tools",
  description: "Open-source platform to build admin panels, dashboards, and internal tools.",
  pricing: "Free - $40/user/mo",
  features: ["Open source", "Drag-and-drop", "Database connections", "Git sync", "Self-hosted", "Custom widgets"],
  logoUrl: "https://asset.brandfetch.io/idYdo0Ve3V/idvuJhGWRQ.png",
  website: "https://appsmith.com",
  popularity: 83,
  users: "100K+",
  yearLaunched: 2019
},
{
  id: 89,
  name: "Budibase",
  category: "Internal Tools",
  description: "Build business apps and workflows. Self-host or use cloud.",
  pricing: "Free - $50/user/mo",
  features: ["Open source", "Database builder", "Automations", "Self-hosted", "Custom plugins", "RBAC"],
  logoUrl: "https://asset.brandfetch.io/idnRrctTjq/idkLmr1fxP.png",
  website: "https://budibase.com",
  popularity: 80,
  users: "50K+",
  yearLaunched: 2019
},
{
  id: 90,
  name: "Tooljet",
  category: "Internal Tools",
  description: "Open-source low-code platform to build internal tools and dashboards.",
  pricing: "Free - $20/user/mo",
  features: ["Open source", "Visual builder", "Database support", "Self-hosted", "Workflows", "Mobile responsive"],
  logoUrl: "https://asset.brandfetch.io/id8-tVoBRz/idJ1UKIbYw.png",
  website: "https://tooljet.com",
  popularity: 78,
  users: "30K+",
  yearLaunched: 2021
},
{
  id: 91,
  name: "Streak",
  category: "CRM",
  description: "CRM built into Gmail. Manage pipelines directly from your inbox.",
  pricing: "Free - $129/user/mo",
  features: ["Gmail integration", "Pipelines", "Email tracking", "Mail merge", "Workflows", "Mobile app"],
  logoUrl: "https://asset.brandfetch.io/idAJxF3WHG/idLN2sKfXm.png",
  website: "https://streak.com",
  popularity: 79,
  users: "750K+",
  yearLaunched: 2011
},
{
  id: 92,
  name: "Freshsales",
  category: "CRM",
  description: "Sales CRM with AI-powered insights, email, phone, and chat.",
  pricing: "$15 - $69/user/mo",
  features: ["AI insights", "Email", "Phone", "Chat", "Pipeline management", "Reports"],
  logoUrl: "https://asset.brandfetch.io/idNpD8C3R7/idTLiCKdwb.png",
  website: "https://freshsales.com",
  popularity: 82,
  users: "60K+",
  yearLaunched: 2016
},
{
  id: 93,
  name: "Trello",
  category: "Project Management",
  description: "Visual project management with boards, lists, and cards. Simple and flexible.",
  pricing: "Free - $17.50/user/mo",
  features: ["Kanban boards", "Cards", "Power-ups", "Automation", "Templates", "Mobile app"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/trello.svg",
  website: "https://trello.com",
  popularity: 94,
  users: "50M+",
  yearLaunched: 2011
},
{
  id: 94,
  name: "Basecamp",
  category: "Project Management",
  description: "All-in-one project management and team communication tool.",
  pricing: "$15/user/mo",
  features: ["To-dos", "Message boards", "Schedules", "Docs", "Chat", "Storage"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/basecamp-icon.svg",
  website: "https://basecamp.com",
  popularity: 86,
  users: "100K+",
  yearLaunched: 2004
},
{
  id: 95,
  name: "Height",
  category: "Project Management",
  description: "Autonomous project management with AI. Built for modern product teams.",
  pricing: "Free - $12/user/mo",
  features: ["AI automation", "Spreadsheet", "Kanban", "Calendar", "Integrations", "Collaboration"],
  logoUrl: "https://asset.brandfetch.io/idDuBx5nGk/idW-T1vGPn.png",
  website: "https://height.app",
  popularity: 74,
  users: "20K+",
  yearLaunched: 2021
},
{
  id: 96,
  name: "ActiveCampaign",
  category: "Email Marketing",
  description: "Email marketing automation with CRM, sales automation, and messaging.",
  pricing: "$29 - $149/mo",
  features: ["Email automation", "CRM", "Sales automation", "Site tracking", "SMS", "Split testing"],
  logoUrl: "https://asset.brandfetch.io/idN2XfXfNH/idhajqeX9p.png",
  website: "https://activecampaign.com",
  popularity: 88,
  users: "185K+",
  yearLaunched: 2003
},
{
  id: 97,
  name: "Sender",
  category: "Email Marketing",
  description: "Affordable email and SMS marketing with automation and popups.",
  pricing: "Free - $29/mo",
  features: ["Email campaigns", "SMS", "Automation", "Popups", "Segmentation", "Analytics"],
  logoUrl: "https://asset.brandfetch.io/idO9l05Pkd/idQIDTTu8A.png",
  website: "https://sender.net",
  popularity: 76,
  users: "180K+",
  yearLaunched: 2012
},
{
  id: 98,
  name: "Moosend",
  category: "Email Marketing",
  description: "Email marketing and automation platform with landing pages and forms.",
  pricing: "$9 - $14/mo",
  features: ["Email campaigns", "Automation", "Landing pages", "Forms", "Segmentation", "Reports"],
  logoUrl: "https://asset.brandfetch.io/idX5pj0jXc/idOANgP2jg.png",
  website: "https://moosend.com",
  popularity: 77,
  users: "100K+",
  yearLaunched: 2011
},
{
  id: 99,
  name: "Adobe Express",
  category: "Design",
  description: "Quick design tool for social media graphics, videos, and web pages.",
  pricing: "Free - $9.99/mo",
  features: ["Templates", "Social media", "Video editor", "Brand kit", "Animations", "Scheduling"],
  logoUrl: "https://cdn.worldvectorlogo.com/logos/adobe-express-1.svg",
  website: "https://adobe.com/express",
  popularity: 89,
  users: "10M+",
  yearLaunched: 2021
},
{
  id: 100,
  name: "Venngage",
  category: "Design",
  description: "Create infographics, reports, and presentations with professional templates.",
  pricing: "Free - $49/mo",
  features: ["Infographics", "Reports", "Presentations", "Templates", "Charts", "Brand kit"],
  logoUrl: "https://asset.brandfetch.io/idF_rXJbUo/id8rKZBBcv.png",
  website: "https://venngage.com",
  popularity: 78,
  users: "1M+",
  yearLaunched: 2011
}
  // ... ADD ALL YOUR 50 TOOLS HERE (copy from index.js)
];

export default function ToolPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find tool by converting name to slug
  const tool = TOOLS.find(t => 
    t.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '') === slug
  );

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
          <a href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Directory
          </a>
        </div>
      </div>
    );
  }

  // Find related tools (same category)
  const relatedTools = TOOLS.filter(t => 
    t.category === tool.category && t.id !== tool.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Directory
          </a>
          <h1 className="text-3xl font-bold text-gray-900">NoCode Directory</h1>
        </div>
      </header>

      {/* Tool Details */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          {/* Tool Header */}
          <div className="flex items-start gap-6 mb-6">
            <img 
              src={tool.logoUrl} 
              alt={tool.name}
              className="h-20 w-20 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">{tool.popularity}/100</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-4">{tool.description}</p>
              <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {tool.category}
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <DollarSign className="w-6 h-6 text-gray-400 mx-auto mb-1" />
              <p className="text-sm text-gray-600 mb-1">Pricing</p>
              <p className="font-semibold text-gray-900">{tool.pricing}</p>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 text-gray-400 mx-auto mb-1" />
              <p className="text-sm text-gray-600 mb-1">Users</p>
              <p className="font-semibold text-gray-900">{tool.users}</p>
            </div>
            <div className="text-center">
              <Calendar className="w-6 h-6 text-gray-400 mx-auto mb-1" />
              <p className="text-sm text-gray-600 mb-1">Launched</p>
              <p className="font-semibold text-gray-900">{tool.yearLaunched}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {tool.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={`${tool.website}?ref=nocodedir`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 text-white text-center py-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 text-lg font-semibold"
          >
            Visit {tool.name} <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More {tool.category} Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedTools.map(relatedTool => (
                <a
                  key={relatedTool.id}
                  href={`/tools/${relatedTool.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                  className="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <img 
                    src={relatedTool.logoUrl} 
                    alt={relatedTool.name}
                    className="h-10 mb-3"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  <h3 className="font-bold text-gray-900 mb-1">{relatedTool.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{relatedTool.description}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = TOOLS.map(tool => ({
    params: { 
      slug: tool.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')
    }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}