"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import { toast, Toaster } from "sonner"
import { submitEmail } from "@/actions/form"
import { Kalnia } from "next/font/google";
import Footer from "@/components/Footer";
import DemoVideo from "@/components/DemoVideo";

const kalniaBold = Kalnia({ subsets: ["latin"], weight: "700" });

export default function Page() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await submitEmail(email)

      if (result.success) {
        toast.success("You're on the list! Get ready for some AI-powered romance.", {
          icon: "🎉",
          style: {
            background: "white",
            color: "black",
            border: "1px solid #E5E7EB",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
          },
          duration: 6000,
        });
        setEmail("")
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        icon: "😢",
        style: {
          background: "white",
          color: "black",
          border: "1px solid #E5E7EB",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        duration: 6000,
      });
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="bg-gradient flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-[#876DAF] to-[#A5C3CE]">
      <div className="w-full max-w-4xl mx-auto space-y-12 text-center">
        <div className="space-y-4 mt-[7rem]">
          <div className={`text-white text-[3.125rem] font-bold leading-[1.375rem] mb-10 ${kalniaBold.className}`}>
            Pairfecto
          </div>
          <p className="text-white/80 text-xl">
            Pairfecto's AI Knows Your Partner's Taste in Dining – You Just Take the Credit! 😉
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="relative mb-[5rem]">
            <input
              type="email"
              placeholder="Enter e-mail to join the beta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-16 px-6 rounded-[3.125rem] bg-white shadow-[0px_0px_15px_0px_rgba(255,255,255,0.60)] text-lg focus:outline-none focus:ring-2 focus:ring-white/20 pr-14"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 inline-flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : <ArrowRight className="h-6 w-6" />}
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">AI-Powered, Partner-Approved Recommendations 💕</h3>
            <p className="text-white/80">No more endless scrolling or dinner debates! Pairfecto’s AI learns your partner's dining preferences—ambiance, cuisine, dietary needs—and delivers personalized restaurant picks they’ll love.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Effortless Date Planning with Smart Search 🔍</h3>
            <p className="text-white/80">Find the perfect spot in seconds with natural language search. Filter by location, price and more—whether it’s a romantic Valentine’s dinner or a casual brunch.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Seamless Sharing, Zero App Downloads 📲</h3>
            <p className="text-white/80">No need to ask, “Does this look good?” Send her a link with curated picks—she can view them instantly, no downloads required!</p>
          </div>
        </div>
        <p className="text-white/90 text-xl font-medium mt-4">
          See Pairfecto AI in action! 🍽️✨
        </p>
        <div className="w-full mt-12">
          <DemoVideo />
        </div>
        
        <p className="text-white/90 text-xl font-medium">
          Pairfecto AI: The Cupid for Foodie Couples – Get the Perfect Dinner Every Time! 🎯❤️
        </p>
      </div>
      <Footer />
      < Toaster position="top-center"/>
    </main>
  )
}

