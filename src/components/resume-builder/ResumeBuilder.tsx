'use client';

import React, { useState } from 'react';
import FormSection from './FormSection';
import PreviewSection from './PreviewSection';
import TemplateSelector from './TemplateSelector';
import { ResumeData } from '@/types/resume';

const initialResumeState: ResumeData = {
    personalInfo: {
        fullName: '',
        title: '',
        contact: '',
        email: '',
    },
    objective: '',
    experience: [],
    education: [],
    skills: [],
    themeColor: '#0f172a', // Default Slate-900
    sidebarTextColor: '#ffffff', // Default White
    iconColor: '#475569', // Default Slate-600
    imageSettings: {
        shape: 'circle',
        size: 100,
    },
};

type Step = 1 | 2 | 3; // 1: Details, 2: Template, 3: Preview

interface ResumeBuilderProps {
    initialTemplate?: 'classic' | 'modern';
}

export default function ResumeBuilder({ initialTemplate = 'classic' }: ResumeBuilderProps) {
    const [resumeData, setResumeData] = useState<ResumeData>(initialResumeState);
    const [selectedTemplate, setSelectedTemplate] = useState<'classic' | 'modern' | 'creative' | 'executive' | 'minimal'>(initialTemplate);

    const handleInputChange = (section: keyof ResumeData, field: string, value: string) => {
        setResumeData((prev) => {
            if (section === 'personalInfo') {
                return {
                    ...prev,
                    personalInfo: {
                        ...prev.personalInfo,
                        [field]: value,
                    },
                };
            }
            return {
                ...prev,
                [section]: value,
            };
        });
    };

    const handleArrayChange = (
        section: 'experience' | 'education',
        index: number,
        field: string,
        value: string
    ) => {
        setResumeData((prev) => {
            const newArray = [...prev[section]];
            newArray[index] = { ...newArray[index], [field]: value };
            return { ...prev, [section]: newArray };
        });
    };

    const addItem = (section: 'experience' | 'education') => {
        setResumeData((prev) => {
            const newItem =
                section === 'experience'
                    ? {
                        id: crypto.randomUUID(),
                        role: '',
                        company: '',
                        startDate: '',
                        endDate: '',
                        details: [],
                    }
                    : {
                        id: crypto.randomUUID(),
                        degree: '',
                        school: '',
                        startYear: '',
                        endYear: '',
                        details: [],
                    };
            return { ...prev, [section]: [...prev[section], newItem] };
        });
    };

    const removeItem = (section: 'experience' | 'education', index: number) => {
        setResumeData((prev) => {
            const newArray = [...prev[section]];
            newArray.splice(index, 1);
            return { ...prev, [section]: newArray };
        });
    };

    const handleSkillChange = (index: number, value: string) => {
        setResumeData((prev) => {
            const newSkills = [...prev.skills];
            newSkills[index] = value;
            return { ...prev, skills: newSkills };
        });
    };

    const addSkill = () => {
        setResumeData((prev) => ({ ...prev, skills: [...prev.skills, ''] }));
    };

    const removeSkill = (index: number) => {
        setResumeData((prev) => {
            const newSkills = [...prev.skills];
            newSkills.splice(index, 1);
            return { ...prev, skills: newSkills };
        });
    };

    const handleColorChange = (color: string) => {
        setResumeData((prev) => ({ ...prev, themeColor: color }));
    };

    const handleSidebarTextColorChange = (color: string) => {
        setResumeData((prev) => ({ ...prev, sidebarTextColor: color }));
    };

    const handleIconColorChange = (color: string) => {
        setResumeData((prev) => ({ ...prev, iconColor: color }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setResumeData((prev) => ({ ...prev, profileImage: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageSettingsChange = (field: 'shape' | 'size', value: string | number) => {
        setResumeData((prev) => ({
            ...prev,
            imageSettings: {
                ...prev.imageSettings!,
                [field]: value,
            },
        }));
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
            {/* Left Panel: Form Editor */}
            <div className="w-full lg:w-1/2 xl:w-5/12 h-full overflow-y-auto border-r border-slate-200 bg-white shadow-xl z-10">
                <FormSection
                    resumeData={resumeData}
                    handleInputChange={handleInputChange}
                    handleArrayChange={handleArrayChange}
                    addItem={addItem}
                    removeItem={removeItem}
                    handleSkillChange={handleSkillChange}
                    addSkill={addSkill}
                    removeSkill={removeSkill}
                    onNext={() => { }} // No longer needed
                    onImageUpload={handleImageUpload}
                    onImageSettingsChange={handleImageSettingsChange}
                    selectedTemplate={selectedTemplate}
                />
            </div>

            {/* Right Panel: Live Preview */}
            <div className="hidden lg:flex lg:w-1/2 xl:w-7/12 h-full bg-slate-100 items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 overflow-y-auto p-8 flex justify-center custom-scrollbar">
                    <div className="transform scale-[0.65] xl:scale-[0.8] origin-top mt-8 mb-8 transition-transform duration-300">
                        <PreviewSection
                            resumeData={resumeData}
                            selectedTemplate={selectedTemplate}
                            onEdit={() => { }}
                            onChangeTemplate={() => { }}
                            onColorChange={handleColorChange}
                            onSidebarTextColorChange={handleSidebarTextColorChange}
                            onIconColorChange={handleIconColorChange}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Preview Toggle (Optional) */}
            <div className="lg:hidden fixed bottom-4 right-4 z-50">
                <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg font-bold">
                    Preview Resume
                </button>
            </div>
        </div>
    );
}
