import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, TrendingUp, Star, DollarSign, Users, Zap, Code, Layout, Database, Smartphone, Globe, ShoppingCart, Mail, BarChart, Image, Video, MessageSquare, Calendar, FileText, PieChart, Briefcase, Award } from 'lucide-react';

// Comprehensive seed data - 49 no-code tools (removed duplicate Notion)
const INITIAL_TOOLS = [
  // Website Builders
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

  // Internal Tools
  {
    id: 49,
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
  }
];

const CATEGORIES = [
  { name: "All Tools", icon: Globe },
  { name: "Website Builder", icon: Layout },
  { name: "App Builder", icon: Smartphone },
  { name: "Database", icon: Database },
  { name: "Automation", icon: Zap },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Forms", icon: Mail },
  { name: "Mobile Apps", icon: Smartphone },
  { name: "Design", icon: Image },
  { name: "Analytics", icon: BarChart },
  { name: "Email Marketing", icon: Mail },
  { name: "Project Management", icon: Briefcase },
  { name: "CRM", icon: Users },
  { name: "Community", icon: MessageSquare },
  { name: "Scheduling", icon: Calendar },
  { name: "Video", icon: Video },
  { name: "AI Tools", icon: Zap },
  { name: "Payments", icon: DollarSign },
  { name: "Documentation", icon: FileText },
  { name: "Internal Tools", icon: Code }
];

export default function Home() {
  const [tools, setTools] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Tools");
  const [searchQuery, setSearchQuery] = useState("");
  const [compareMode, setCompareMode] = useState(false);
  const [compareTools, setCompareTools] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");

  useEffect(() => {
    const loadTools = async () => {
      try {
        const stored = await window.storage.get('nocode-tools');
        if (stored && stored.value) {
          setTools(JSON.parse(stored.value));
        } else {
          setTools(INITIAL_TOOLS);
          await window.storage.set('nocode-tools', JSON.stringify(INITIAL_TOOLS));
        }
      } catch (error) {
        setTools(INITIAL_TOOLS);
      }
    };
    loadTools();
  }, []);

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === "All Tools" || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "popularity") return b.popularity - a.popularity;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const categoryCounts = CATEGORIES.map(cat => ({
    ...cat,
    count: cat.name === "All Tools" ? tools.length : tools.filter(t => t.category === cat.name).length
  }));

  const toggleCompare = (tool) => {
    if (compareTools.find(t => t.id === tool.id)) {
      setCompareTools(compareTools.filter(t => t.id !== tool.id));
    } else if (compareTools.length < 3) {
      setCompareTools([...compareTools, tool]);
    }
  };

  // FIX #2: Support 3 tools comparison
  const generateComparison = () => {
    if (compareTools.length < 2) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto p-6 my-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {compareTools.length === 2 
                ? `${compareTools[0].name} vs ${compareTools[1].name}`
                : `Comparing ${compareTools.length} Tools`
              }
            </h2>
            <button 
              onClick={() => setCompareMode(false)}
              className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
            >×</button>
          </div>
          
          <div className={`grid gap-6 ${compareTools.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
            {compareTools.map(tool => (
              <div key={tool.id} className="border rounded-lg p-4">
                <img 
                  src={tool.logoUrl} 
                  alt={tool.name} 
                  className="h-12 mb-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <h3 className="font-bold text-xl mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                
                <div className="space-y-3 text-sm">
                  <div><span className="font-semibold">Category:</span> {tool.category}</div>
                  <div><span className="font-semibold">Pricing:</span> {tool.pricing}</div>
                  <div><span className="font-semibold">Popularity:</span> {tool.popularity}/100</div>
                  <div><span className="font-semibold">Users:</span> {tool.users}</div>
                  <div>
                    <span className="font-semibold">Key Features:</span>
                    <ul className="list-disc list-inside mt-1">
                      {tool.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                </div>
                
                <a 
                  href={tool.website + "?ref=nocodedir"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
                >
                  Visit {tool.name}
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">Quick Summary</h3>
            <div className="text-sm space-y-2">
              <p><strong>Most popular:</strong> {[...compareTools].sort((a, b) => b.popularity - a.popularity)[0].name} ({[...compareTools].sort((a, b) => b.popularity - a.popularity)[0].popularity}/100)</p>
              <p><strong>Largest user base:</strong> {[...compareTools].sort((a, b) => parseInt(b.users) - parseInt(a.users))[0].name} ({[...compareTools].sort((a, b) => parseInt(b.users) - parseInt(a.users))[0].users})</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">NoCode Directory</h1>
              <p className="text-gray-600 text-sm mt-1">Discover {tools.length}+ best no-code tools to build without coding</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">
                <TrendingUp className="inline w-4 h-4 mr-1" />
                {tools.length} tools • 20+ categories
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools, categories, features..."
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select 
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity">Most Popular</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-4 md:sticky md:top-24">
              <h3 className="font-bold mb-4 text-gray-900">Categories</h3>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                {categoryCounts.map(cat => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition ${
                        selectedCategory === cat.name 
                          ? 'bg-blue-50 text-blue-700 font-semibold' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{cat.name}</span>
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{cat.count}</span>
                    </button>
                  );
                })}
              </div>
              
              {compareTools.length > 0 && (
                <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-900">Compare ({compareTools.length})</span>
                    <button 
                      onClick={() => setCompareTools([])}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >Clear</button>
                  </div>
                  {compareTools.map(t => (
                    <div key={t.id} className="text-xs text-blue-800 mb-1">{t.name}</div>
                  ))}
                  {compareTools.length >= 2 && (
                    <button 
                      onClick={() => setCompareMode(true)}
                      className="mt-2 w-full bg-blue-600 text-white text-xs py-1.5 rounded hover:bg-blue-700"
                    >
                      Compare Now
                    </button>
                  )}
                </div>
              )}
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedCategory === "All Tools" ? "All No-Code Tools" : selectedCategory}
                <span className="ml-2 text-gray-500 font-normal text-base">({filteredTools.length} tools)</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <div key={tool.id} className="bg-white rounded-lg border hover:shadow-lg transition p-5">
                  <div className="flex items-start justify-between mb-3">
                    {/* FIX #1: Handle broken logos with proper encoding */}
                    <img 
                      src={tool.logoUrl} 
                      alt={tool.name} 
                      className="h-10 w-auto"
                      onError={(e) => {
                        e.target.onerror = null;
                        const letter = tool.name.charAt(0);
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%234F46E5'/%3E%3Ctext x='50' y='55' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${letter}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-semibold">{tool.popularity}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{tool.description}</p>
                  
                  <div className="space-y-2 mb-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span>{tool.pricing}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{tool.users} users</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tool.features.slice(0, 4).map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {tool.features.length > 4 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{tool.features.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    
                      href={tool.website + "?ref=nocodedir"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white text-sm text-center py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-1"
                    >
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => toggleCompare(tool)}
                      className={`px-3 py-2 rounded text-sm border ${
                        compareTools.find(t => t.id === tool.id)
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {compareTools.find(t => t.id === tool.id) ? '✓' : '+'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500">No tools found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All Tools"); }}
                  className="mt-4 text-blue-600 hover:text-blue-700"
                >
                  Clear filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {compareMode && generateComparison()}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-700 text-sm mb-2 font-semibold">Advertisement Space</p>
          <p className="text-xs text-gray-500">Google AdSense Display Ad (728x90 Leaderboard)</p>
          <p className="text-xs text-gray-400 mt-2">This space will generate $3-7 per 1000 visitors</p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Popular Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={() => {
                const webflow = tools.find(t => t.name === "Webflow");
                const bubble = tools.find(t => t.name === "Bubble");
                if (webflow && bubble) {
                  setCompareTools([webflow, bubble]);
                  setCompareMode(true);
                }
              }}
              className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition text-left"
            >
              <div>
                <h3 className="font-semibold text-gray-900">Webflow vs Bubble</h3>
                <p className="text-sm text-gray-600">Website vs App Builder</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>
            
            <button 
              onClick={() => {
                const notion = tools.find(t => t.name === "Notion");
                const airtable = tools.find(t => t.name === "Airtable");
                if (notion && airtable) {
                  setCompareTools([notion, airtable]);
                  setCompareMode(true);
                }
              }}
              className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition text-left"
            >
              <div>
                <h3 className="font-semibold text-gray-900">Notion vs Airtable</h3>
                <p className="text-sm text-gray-600">Database</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>

            <button 
              onClick={() => {
                const zapier = tools.find(t => t.name === "Zapier");
                const make = tools.find(t => t.name === "Make");
                if (zapier && make) {
                  setCompareTools([zapier, make]);
                  setCompareMode(true);
                }
              }}
              className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition text-left"
            >
              <div>
                <h3 className="font-semibold text-gray-900">Zapier vs Make</h3>
                <p className="text-sm text-gray-600">Automation</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>

            <button 
              onClick={() => {
                const shopify = tools.find(t => t.name === "Shopify");
                const gumroad = tools.find(t => t.name === "Gumroad");
                if (shopify && gumroad) {
                  setCompareTools([shopify, gumroad]);
                  setCompareMode(true);
                }
              }}
              className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition text-left"
            >
              <div>
                <h3 className="font-semibold text-gray-900">Shopify vs Gumroad</h3>
                <p className="text-sm text-gray-600">E-commerce</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* FIX #3 & #4: Working footer links */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-3">About NoCode Directory</h4>
              <p className="text-sm text-gray-600">Your comprehensive directory for discovering and comparing {tools.length}+ no-code tools across 20+ categories.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Popular Comparisons</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      const webflow = tools.find(t => t.name === "Webflow");
                      const bubble = tools.find(t => t.name === "Bubble");
                      if (webflow && bubble) {
                        setCompareTools([webflow, bubble]);
                        setCompareMode(true);
                      }
                    }}
                    className="hover:text-blue-600 text-left"
                  >
                    Webflow vs Bubble
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const zapier = tools.find(t => t.name === "Zapier");
                      const make = tools.find(t => t.name === "Make");
                      if (zapier && make) {
                        setCompareTools([zapier, make]);
                        setCompareMode(true);
                      }
                    }}
                    className="hover:text-blue-600 text-left"
                  >
                    Zapier vs Make
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const notion = tools.find(t => t.name === "Notion");
                      const airtable = tools.find(t => t.name === "Airtable");
                      if (notion && airtable) {
                        setCompareTools([notion, airtable]);
                        setCompareMode(true);
                      }
                    }}
                    className="hover:text-blue-600 text-left"
                  >
                    Notion vs Airtable
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const shopify = tools.find(t => t.name === "Shopify");
                      const gumroad = tools.find(t => t.name === "Gumroad");
                      if (shopify && gumroad) {
                        setCompareTools([shopify, gumroad]);
                        setCompareMode(true);
                      }
                    }}
                    className="hover:text-blue-600 text-left"
                  >
                    Shopify vs Gumroad
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Top Categories</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <button 
                    onClick={() => setSelectedCategory("Website Builder")}
                    className="hover:text-blue-600 text-left"
                  >
                    Website Builders
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setSelectedCategory("App Builder")}
                    className="hover:text-blue-600 text-left"
                  >
                    App Builders
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setSelectedCategory("Automation")}
                    className="hover:text-blue-600 text-left"
                  >
                    Automation Tools
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setSelectedCategory("E-commerce")}
                    className="hover:text-blue-600 text-left"
                  >
                    E-commerce Platforms
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Resources</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
                <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
                <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="mailto:contact@nocodedirectory.live" className="hover:text-blue-600">Submit a Tool</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
            © 2026 NoCode Directory. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}