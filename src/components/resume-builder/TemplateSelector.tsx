import React from 'react';
import { LayoutTemplate, Check } from 'lucide-react';
import PreviewSection from './PreviewSection';
import { dummyResumeData } from '@/utils/dummyData';

interface TemplateSelectorProps {
    selectedTemplate: 'classic' | 'modern' | 'creative' | 'executive' | 'minimal';
    setSelectedTemplate: (template: 'classic' | 'modern' | 'creative' | 'executive' | 'minimal') => void;
    onNext: () => void;
    onBack: () => void;
}

export default function TemplateSelector({
    selectedTemplate,
    setSelectedTemplate,
    onNext,
    onBack,
}: TemplateSelectorProps) {

    const templates = [
        {
            id: 'classic',
            name: 'Classic Professional',
            description: 'Serif fonts, traditional layout, perfect for corporate roles.',
            color: 'blue',
        },
        {
            id: 'modern',
            name: 'Modern Minimalist',
            description: 'Clean sans-serif, sidebar layout, great for creative and tech roles.',
            color: 'purple',
        },
        {
            id: 'creative',
            name: 'Creative Bold',
            description: 'Vibrant header, modern typography, stands out from the crowd.',
            color: 'pink',
        },
        {
            id: 'executive',
            name: 'Executive Suite',
            description: 'Authoritative layout with strong section dividers and clear hierarchy.',
            color: 'slate',
        },
        {
            id: 'minimal',
            name: 'Pure Minimal',
            description: 'Whitespace-focused, elegant, and distraction-free.',
            color: 'emerald',
        }
    ] as const;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Resume Templates</h2>
                    <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                        Pick one of our free resume templates and build your resume in minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="group relative flex flex-col"
                        >
                            {/* Card Container */}
                            <div className="relative aspect-[210/297] bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">

                                {/* Realistic Preview Area */}
                                <div className="absolute inset-0 overflow-hidden bg-slate-100 flex items-center justify-center">
                                    <div className="transform scale-[0.4] origin-center pointer-events-none">
                                        <PreviewSection
                                            resumeData={dummyResumeData}
                                            selectedTemplate={template.id}
                                            onEdit={() => { }}
                                            onChangeTemplate={() => { }}
                                            isThumbnail={true}
                                        />
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                                    <button
                                        onClick={() => {
                                            setSelectedTemplate(template.id);
                                            onNext();
                                        }}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                                    >
                                        Use This Template
                                    </button>
                                </div>
                            </div>

                            {/* Template Info */}
                            <div className="mt-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900">{template.name}</h3>
                                <p className="text-sm text-slate-500 mt-2 leading-relaxed px-4">{template.description}</p>
                            </div>
                        </div>
                    ))}

                    {/* Coming Soon Placeholder */}
                    <div className="relative aspect-[210/297] bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                        <LayoutTemplate size={48} className="mb-4 opacity-50" />
                        <h3 className="font-bold text-lg">More Coming Soon</h3>
                        <p className="text-sm mt-2">We are working on creative and executive designs.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={onBack}
                        className="px-8 py-3 rounded-full border border-slate-300 text-slate-600 font-medium hover:bg-white hover:shadow-md transition-all"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
