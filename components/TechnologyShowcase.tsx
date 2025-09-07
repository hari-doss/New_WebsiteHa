import { Badge } from "./ui/badge";
import { useState } from "react";
import React from 'react';
import Flutter from "../assets/flutter.svg";
import swift from "../assets/swift.svg";
import reactnative from "../assets/reactnative.svg";
import android from "../assets/android.svg";
import Cloud from "../assets/cloud.svg";
import dotnet from "../assets/dotnet.svg";
import Angular from "../assets/Angular.svg";
import ReactJs from "../assets/ReactJs.svg";
import Vue from "../assets/vue.svg";
import Next from "../assets/Next.svg";
import NodeJS from "../assets/Nodejs.svg";
import Java from "../assets/java.svg";
import PHP from "../assets/php.svg";
import Golang from "../assets/golang.svg";
import aiml from "../assets/aiml.svg";
import fullstackdevelopment from "../assets/fullstackdevelopment.svg";
import qualityassurance from "../assets/qualityassurance.svg"; 
import devops from "../assets/devops.svg"; 
import ApplicationModernization from "../assets/Application Modernization.svg";

interface TechnologyCard {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  tags: string[];
  icon: string;
  iconBg: string;
}

const technologies: TechnologyCard[] = [
  {
    id: "dotnet",
    name: ".NET (C#)",
    type: "Backend - web",
    category: "web",
    description:
      "A Microsoft-powered framework that supports fast, secure, and high-performing enterprise-grade applications.",
    tags: [
      "Banking platforms",
      "Insurance systems",
      "Enterprise ERPs",
      "Government portals",
    ],
    icon: dotnet,
    iconBg: "bg-purple-500",
  },
  {
    id: "nodejs",
    name: "Node.JS",
    type: "Backend - web",
    category: "web",
    description:
      "Built on Chrome's V8 JavaScript engine, Node.js uses an event-driven, non-blocking architecture, making it excellent for high-speed, real-time applications.",
    tags: [
      "Streaming platforms",
      "collaborative tools",
      "Real-time dashboards",
      "chat apps",
    ],
    icon: NodeJS ,
    iconBg: "bg-green-500",
  },
  {
    id: "java",
    name: "Java",
    type: "Backend - web",
    category: "web",
    description:
      "A platform-independent, object-oriented language widely trusted by large-scale industries for its reliability and security.",
    tags: [
      "Core banking systems",
      "Enterprise CRM",
      "Telecom Platforms",
      "Cloud-native APIs",
    ],
    icon: Java,
    iconBg: "bg-orange-500",
  },
  {
    id: "php",
    name: "PHP",
    type: "Backend - web",
    category: "web",
    description:
      "A flexible server-side scripting language used extensively in content-rich websites and web applications.",
    tags: ["E-Commerce stores", "CMS platforms", "Market Place", "Portals"],
    icon: PHP,
    iconBg: "bg-blue-500",
  },
  {
    id: "golang",
    name: "Golang (Go)",
    type: "Backend - web",
    category: "web",
    description:
      "Designed by Google for speed and simplicity, Go excels at concurrency and low-latency systems.",
    tags: [
      "Containerized backends",
      "High-volume APIs",
      "Cloud microservices",
      "Distributed systems",
    ],
    icon: Golang,
    iconBg: "bg-cyan-500",
  },
  {
    id: "angular",
    name: "Angular",
    type: "Frontend - web",
    category: "web",
    description:
      "Google's TypeScript-based framework designed for large-scale, modular, and maintainable frontends.",
    tags: [
      "Admin panels",
      "Enterprise dashboards",
      "Complex B2B portals",
      
    ],
    icon: Angular,
    iconBg: "bg-red-500",
  },
  {
    id: "react",
    name: "React.JS",
    type: "Frontend - web",
    category: "web",
    description:
      "A highly flexible library by Meta (Facebook) used to build dynamic, high-performance UIs with reusable components.",
    tags: [
      "Single Page Applications (SPAs)",
      "E-commerce UI",
      "SaaS platforms",
     
    ],
    icon: ReactJs,
    iconBg: "bg-blue-600",
  },
  {
    id: "vue",
    name: "Vue.js",
    type: "Frontend - web",
    category: "web",
    description:
      "A lightweight, progressive JavaScript framework that's easy to integrate and perfect for quick deployment.",
    tags: [
      "MVPs",
      "Interactive websites",
     "modular components for existing apps",
    ],
    icon: Vue,
    iconBg: "bg-green-400",
  },
  {
    id: "nextjs",
    name: "Next.js",
    type: "Frontend - web",
    category: "web",
    description:
      "Built on React, Next.js supports server-side rendering and static site generation for fast, SEO-optimized applications.",
    tags: ["Marketing websites", "High-speed blogs", "Storefronts with SEO needs"],
    icon: Next,
    iconBg: "bg-black",
  },
  {
    id: "aws",
    name: "AWS, Azure, Google Cloud",
    type: "Cloud Technologies",
    category: "cloud", // ✅ cloud now has matching category
    description:
      "We design and deploy solutions across leading cloud providers, offering full support for multi-cloud and hybrid cloud strategies.",
    tags: ["Cloud architecture", "Migration", "Scalability", "Cost Optimization"],
    icon: Cloud,
    iconBg: "bg-orange-500",
  },
  {
    id: "react-native",
    name: "React Native",
    type: "Mobile - cross-platform",
    category: "mobile",
    description:
      "A JavaScript framework for building apps on both Android and iOS with shared codebase, speeding up time to market.",
    tags: ["Social Apps", "Fintech Apps", "Internal Tools", "E-commerce platforms"],
    icon: reactnative,
    iconBg: "bg-purple-500",
  },
  {
    id: "kotlin",
    name: "Android (Kotlin)",
    type: "Mobile - android",
    category: "mobile",
    description:
      "Kotlin is Google’s modern programming language for Android: expressive, safe, and interoperable.",
    tags: ["Offline mode", "Deep device integration", "Performance-heavy apps"],
    icon: android,
    iconBg: "bg-green-500",
  },
  {
    id: "flutter",
    name: "Flutter",
    type: "Mobile - cross-platform",
    category: "mobile",
    description:
      "Google's UI toolkit that uses Dart to create natively compiled, beautiful mobile apps across platforms.",
    tags: ["Custom UI", "Animations", "Rapid Prototyping Needs"],
    icon: Flutter,
    iconBg: "bg-blue-400",
  },
  {
    id: "swift",
    name: "iOS (Swift)",
    type: "Mobile - ios",
    category: "mobile",
    description:
      "Apple’s official language for building modern, fast, and secure iOS applications with deep access to ecosystem.",
    tags: ["Apps using ARKit", "Apple Pay", "Siri", "Needing to the Apple ecosystem"],
    icon: swift,
    iconBg: "bg-red-400",
  },
  {
    id: "ai-ml",
    name: "AI/ML & IoT",
    type: "Backend - web",
    category: "other",
    description:
      "We build AI-driven and IoT-integrated applications that automate processes, deliver real-time insights, and connect devices seamlessly.",
    tags: ["Predictive analytics", "Retail automation", "Smart home systems", "Industrial IoT"],
    icon: aiml,
    iconBg: "bg-indigo-500",
  },
  {
    id: "fullstack",
    name: "Full Stack Development",
    type: "Backend - web",
    category: "other",
    description:
      "Our full-stack teams handle every layer of development — frontend to backend — ensuring cohesive architecture and faster delivery.",
    tags: ["End-to-end product development", "MVPs", "Complex integrations", "Startups"],
    icon: fullstackdevelopment,
    iconBg: "bg-teal-500",
  },
  {
    id: "qa",
    name: "Quality Assurance (QA)",
    type: "Backend - web",
    category: "other",
    description:
      "We provide manual and automated testing to ensure your product is secure, user-friendly, and performance-optimized.",
    tags: ["Functional testing", "API testing", "Load testing", "UI/UX testing"],
    icon: qualityassurance,
    iconBg: "bg-blue-500",
  },
  {
    id: "devops",
    name: "DevOps",
    type: "Backend - web",
    category: "other",
    description:
      "Our DevOps practices streamline deployment cycles, improve reliability, and reduce operational risk through automation.",
    tags: ["CI/CD pipelines", "Container orchestration", "Version-controlled infrastructure"],
    icon: devops,
    iconBg: "bg-gray-500",
  },
  {
    id: "modernization",
    name: "Application Modernization",
    type: "UI/UX Design",
    category: "other",
    description:
      "We help businesses modernize legacy applications by refactoring into microservices, updating UI/UX, and enabling API-first design.",
    tags: ["Improved performance", "Lower maintenance", "Enhanced agility and Integration"],
    icon: ApplicationModernization,
    iconBg: "bg-yellow-500",
  },
];


const categories = [
  { id: "web", name: "Web Technologies", active: true },
  { id: "cloud", name: "Cloud Technologies", active: false },
  { id: "mobile", name: "Mobile Technologies", active: false },
  { id: "other", name: "Other Technologies & Services", active: false },
];

export function TechnologyShowcase() {
  const [activeCategory, setActiveCategory] = useState("web");

  // ✅ dynamic filter (no hardcoding)
  const filteredTechnologies = technologies.filter(
    (tech) => tech.category === activeCategory
  );

  return (
    <section className="w-full py-16" style={{ backgroundColor: "#F7F9FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors relative ${
                    activeCategory === category.id
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="font-medium text-sm">{category.name}</div>
                  {activeCategory === category.id && (
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
                      <div className="w-0 h-0 border-l-[8px] border-l-orange-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Technology Grid */}
            {filteredTechnologies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTechnologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Header */}
                    <div className="flex items-start mb-4">
                      <div  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mr-3 flex-shrink-0"
                       
                      >
                        {/* <span className="text-lg">{tech.icon}</span> */}
                     <img
          src={tech.icon}
          alt="Hero Left Banner"
          // className="absolute top-1/2 left-0 transform -translate-y-1/2 h-80 w-auto hidden md:block"
        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {tech.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">{tech.type}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {tech.description}
                    </p>

                    {/* Ideal For */}
                    <div>
                      <div className="flex items-center mb-3">
                        <h4 className="font-medium text-gray-900 text-sm mr-3">
                          Ideal For
                        </h4>
                        <div className="flex-1 h-px bg-gray-200"></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 px-2 py-1 border border-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-500 text-lg mb-2">Coming Soon</div>
                <p className="text-gray-400 text-sm">
                  {
                    categories.find((cat) => cat.id === activeCategory)?.name
                  }{" "}
                  will be available soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
