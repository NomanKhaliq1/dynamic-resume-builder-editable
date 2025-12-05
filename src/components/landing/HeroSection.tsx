import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, ArrowRight, FileText, Star } from 'lucide-react';

interface HeroSectionProps {
    onStart?: () => void; // Optional now
}

export default function HeroSection({ onStart }: HeroSectionProps) {
    const router = useRouter();

    const handleStart = () => {
        router.push('/create-resume/templates');
    };
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navbar */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-2 rounded-lg text-white">
                        <FileText size={24} />
                    </div>
                    <span className="text-xl font-bold tracking-tight">ResumeBuilder</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#" className="hover:text-slate-900 transition-colors">Resume Templates</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">Examples</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">Cover Letter</a>
                </div>
                <button
                    onClick={onStart}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                    Sign In
                </button>
            </nav>

            {/* Hero Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                        This resume builder gets you <span className="text-blue-600">paid more</span>.
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                        Create a professional resume in minutes with our step-by-step builder. Only 2% of resumes win. Yours will be one of them.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleStart}
                            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Create my resume
                            <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 bg-blue-50 text-blue-700 rounded-xl font-bold text-lg hover:bg-blue-100 transition-colors">
                            Upload resume
                        </button>
                    </div>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                            <CheckCircle size={20} className="text-green-500" />
                            <span>39% more likely to land the job</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                            <Star size={20} className="text-green-500 fill-current" />
                            <span>Trustpilot 4.8 out of 5</span>
                        </div>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        {/* Mock Resume Header */}
                        <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-6">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <FileText size={40} />
                            </div>
                            <div>
                                <div className="h-6 w-48 bg-slate-900 rounded mb-2"></div>
                                <div className="h-4 w-32 bg-slate-400 rounded"></div>
                            </div>
                        </div>
                        {/* Mock Resume Body */}
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-slate-100 rounded"></div>
                            <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                            <div className="h-4 w-4/6 bg-slate-100 rounded"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -left-8 top-1/2 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                            <div className="bg-green-100 text-green-600 p-2 rounded-lg font-bold">85%</div>
                            <div className="text-sm font-semibold text-slate-700">Resume Score</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
