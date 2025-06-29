import type React from "react";
import Head from "next/head";
import router from "next/router";
import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/button/ThemeToggle";
import { Button } from "@/components/button/Button";
import { useRouter } from "next/router";
import { LogOut } from "lucide-react";
import { useEffect } from "react";

const PersonAILanding: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("personai_logged_in");
      if (!loggedIn) {
        router.replace("/login");
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>personAI - Your Persona-Based AI Voice Assistant</title>
        <meta
          name="description"
          content="A personalized AI voice assistant with a unique persona tailored to your preferences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: {
                      DEFAULT: '#8b5cf6',
                      foreground: '#ffffff',
                    },
                  }
                }
              }
            }
          `,
          }}
        /> */}
      </Head>

      <div className="bg-base dark:bg-black text-gray-900 min-h-screen flex flex-col">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex justify-between items-center">
          {/* Logo moved slightly left */}
          {/* <div className="flex items-center gap-2 -ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            <span className="text-2xl font-bold">personAI</span>
          </div> */}
          <Link href="/">
            <Logo className="dark:text-white" />
          </Link>

          {/* Navigation moved to the right */}
          <nav className="flex gap-6 items-center">
            <a href="#features" className="text-lg text-gray-700 font-bold hover:text-primary transition-colors">
              Features
            </a>
            {/* <Link href="/about" className="text-lg text-gray-700 font-bold hover:text-primary transition-colors">
              About Us
            </Link> */}
            <ThemeToggle />
            <Button
              accentColor="rose"
              className="ml-2 flex items-center gap-2 font-semibold px-4 py-2 text-base
                bg-white border border-rose-500 text-rose-600
                hover:bg-rose-600 hover:text-white hover:border-rose-600
                dark:bg-rose-600 dark:text-white dark:border-rose-600
                transition"
              onClick={() => {
                localStorage.removeItem("personai_logged_in");
                router.push('/login');
              }}
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Button>
          </nav>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <div className="">
            <section 
            className="h-screen p-20 container mx-auto px-4 text-center"
            style={{
              backgroundImage: "url('/robot.png')",
              backgroundSize: "cover",
              backgroundPosition: "center top 150px",
              backgroundRepeat: "no-repeat",
            }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Meet <span className="text-prim">personAI</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-white max-w-2xl mx-auto mb-10">
                Your personal AI voice assistant with a unique persona tailored to your preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                onClick={() => router.push("/form")} 
                className="px-6 py-3 bg-prim text-white rounded-md font-medium"
                >
                  Try personAI
                </button>
                <Link href="learnmore">
                  <button className="px-6 py-3 border border-gray-300 rounded-md font-medium">Learn More</button>
                </Link>
              </div>
            </section>
          </div>

          {/* Features Section */}
          <section id="features" className="py-20 bg-gray-50 rounded-3xl m-10 mt-0 mb-2">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">Why Choose <span className="text-prim">personAI</span>?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-base dark:bg-black p-6 rounded-lg border dark:border-white shadow-sm dark:text-white">
                  <h3 className="text-2xl font-medium mb-2">Personalized Experience</h3>
                  <p className="text-lg text-gray-500 dark:text-white">
                    Create custom personas that match your preferences and communication style.
                  </p>
                </div>
                <div className="bg-base dark:bg-black p-6 rounded-lg border dark:border-white shadow-sm dark:text-white">
                  <h3 className="text-2xl font-medium mb-2">Advanced AI</h3>
                  <p className="text-lg text-gray-500 dark:text-white">
                    Powered by cutting-edge voice recognition and natural language processing.
                  </p>
                </div>
                <div className="bg-base dark:bg-black p-6 rounded-lg border dark:border-white shadow-sm dark:text-white">
                  <h3 className="text-2xl font-medium mb-2">Secure & Private</h3>
                  <p className="text-lg text-gray-500 dark:text-white">
                    Your data stays private with end-to-end encryption and secure AI models.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-6 bg-gray-900 text-white text-center">
          <p className="text-sm">© {currentYear} personAI. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default PersonAILanding;