import Link from "next/link";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const HeroBanner = () => {
  const { data: session } = useSession();
  const [isMounted, setIsMounted] = useState(false);
  const [username, setUsername] = useState(null);

  const isLoggedIn = Boolean(session?.user);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">

            {isMounted && isLoggedIn && username && (
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-2">
                  Welcome back, {username}!
                </h2>
              </div>
            )}

            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-tight">
                FITNESS
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="h-1 w-16 md:w-24 bg-emerald-500"></div>
                <p className="text-xl md:text-2xl text-gray-400 font-light">REDEFINED</p>
                <div className="h-1 w-16 md:w-24 bg-emerald-500"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Transform your fitness journey with personalized workouts and expert guidance
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {/* Strength */}
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-emerald-500/30">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-2">Strength Training</h3>
                <p className="text-gray-400 text-sm md:text-base">Build muscle with guided workouts and progressive overload</p>
              </div>

              {/* Goal Tracking */}
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/30">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-2">Goal Tracking</h3>
                <p className="text-gray-400 text-sm md:text-base">Monitor your progress and celebrate milestones</p>
              </div>

              {/* Analytics */}
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-500/30">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-2">Analytics</h3>
                <p className="text-gray-400 text-sm md:text-base">Data-driven insights for optimal performance</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/explore-exercises">
                <span className="bg-emerald-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-xl hover:scale-105 transform inline-block">
                  Explore Exercises
                </span>
              </Link>
              <Link href="/my-saved-exercises">
                <span className="bg-white/10 backdrop-blur-sm text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 inline-block">
                  Saved Workouts
                </span>
              </Link>
              <Link href="/submit-workout">
                <span className="bg-white/10 backdrop-blur-sm text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 inline-block">
                  Submit Workout
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
