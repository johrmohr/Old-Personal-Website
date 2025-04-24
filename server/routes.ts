import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for any backend functionality (if needed in the future)
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact form submission endpoint
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, subject, message, isResearch } = req.body;
      
      // In a real application, you would validate the data,
      // save it to a database, and possibly send an email notification
      
      console.log("Contact form submission:", { name, email, subject, message, isResearch });
      
      res.json({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon." 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
