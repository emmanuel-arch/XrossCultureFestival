"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, MessageSquare, Bot } from "lucide-react"
import { NewsletterForm } from "./newsletter-form"
import { FooterPopup } from "./footer-popup"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const footerSections = [
    {
      id: "about",
      title: "About",
      items: ["About the Festival", "Our Story", "Team", "Past Editions", "Gallery"],
    },
    {
      id: "events",
      title: "Events",
      items: ["Upcoming Shows", "Lineups", "Stages & Areas", "Workshops"],
    },
    {
      id: "tickets",
      title: "Tickets",
      items: ["Buy Tickets", "VIP Packages", "Group Bookings", "Refund Policy"],
    },
    {
      id: "partners",
      title: "Partners",
      items: ["Become a Partner", "Sponsorships", "Press & Media", "Volunteer"]
    },
  ]

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-border/50 relative overflow-hidden">
      {/* Code background */}
      <div className="absolute inset-0 opacity-5">
        <pre className="text-xs text-primary/30 font-mono leading-relaxed transform rotate-6 scale-150 absolute -top-20 -left-20">
          {`function intelligentAnalysis() {
  const insights = [];
  
  // Market Analysis
  insights.push({
    framework: 'TensorFlow',
    backend: 'Python',
    database: 'BigQuery',
    deployment: 'Google Cloud'
  });
  
  // Business Intelligence
  insights.push({
    ai: 'GPT-4',
    analytics: 'Custom ML',
    storage: 'PostgreSQL',
    api: 'FastAPI'
  });
}`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Desktop Footer - simplified */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Cross Culture Festival" className="h-10 w-auto object-contain" style={{ maxWidth: '180px' }} />
            <div className="text-muted-foreground text-xs">&copy; {new Date().getFullYear()} Cross Culture Festival — All rights reserved.</div>
          </div>
        </div>

        {/* Mobile Footer - Stacked with collapsible sections */}
        <div className="md:hidden space-y-6">
          {/* Logo and main info */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <img src="/logo.png" alt="Cross Culture Festival" className="h-10 w-auto object-contain" style={{ maxWidth: '180px' }} />
            </div>
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Cross Culture Festival — All rights reserved.
            </div>
          </div>

          {/* Collapsible sections */}
          <div className="space-y-2">
            {footerSections.map((section) => (
              <div key={section.id} className="border border-border/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-background/50 hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-sm">{section.title}</span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-2 border-t border-border/30">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={index}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Newsletter signup and chat button */}
          <div className="text-center space-y-4 pt-4 border-t border-border/30">
            <div className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Cross Culture Festival — All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
