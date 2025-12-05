import React, { useState } from 'react';
import { ResumeData } from '@/types/resume';
import {
    User,
    Briefcase,
    GraduationCap,
    Code,
    Plus,
    Trash2,
    ChevronDown,
    ChevronUp,
    Mail,
    Phone,
    Type,
    ArrowRight
} from 'lucide-react';

interface FormSectionProps {
    resumeData: ResumeData;
    handleInputChange: (section: keyof ResumeData, field: string, value: string) => void;
    handleArrayChange: (section: 'experience' | 'education', index: number, field: string, value: string) => void;
    addItem: (section: 'experience' | 'education') => void;
    removeItem: (section: 'experience' | 'education', index: number) => void;
    handleSkillChange: (index: number, value: string) => void;
    addSkill: () => void;
    removeSkill: (index: number) => void;
    onNext: () => void;
    onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onImageSettingsChange: (field: 'shape' | 'size', value: string | number) => void;
    selectedTemplate: 'classic' | 'modern' | 'creative' | 'executive' | 'minimal';
}

export default function FormSection({
    resumeData,
    handleInputChange,
    handleArrayChange,
    addItem,
    removeItem,
    handleSkillChange,
    addSkill,
    removeSkill,
    onNext,
    onImageUpload,
    onImageSettingsChange,
    selectedTemplate
}: FormSectionProps) {
    const [activeSection, setActiveSection] = useState<string | null>('personal');

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-8 pb-24">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Build Your Resume</h2>
                <p className="mt-2 text-slate-600">Fill in your details below. The preview updates automatically.</p>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-md">
                <button
                    onClick={() => toggleSection('personal')}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                            <User size={24} />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-slate-800 text-xl">Personal Details</h3>
                            <p className="text-sm text-slate-500">Name, contact, and summary</p>
                        </div>
                    </div>
                    {activeSection === 'personal' ? <ChevronUp size={24} className="text-slate-400" /> : <ChevronDown size={24} className="text-slate-400" />}
                </button>

                {activeSection === 'personal' && (
                    <div className="p-6 border-t border-slate-100 space-y-6 animate-in slide-in-from-top-2 duration-200">

                        {/* Profile Image Section - Only for templates with images */}
                        {['modern', 'creative', 'executive', 'minimal'].includes(selectedTemplate) && (
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                                <label className="block text-sm font-bold text-slate-700 mb-3">Profile Photo</label>
                                <div className="flex flex-col gap-4">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={onImageUpload}
                                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />

                                    {resumeData.profileImage && (
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Shape</label>
                                                <div className="flex gap-2">
                                                    {['circle', 'rounded', 'square'].map((shape) => (
                                                        <button
                                                            key={shape}
                                                            onClick={() => onImageSettingsChange('shape', shape)}
                                                            className={`px-3 py-1 text-sm rounded-md border capitalize ${resumeData.imageSettings?.shape === shape ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'}`}
                                                        >
                                                            {shape}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
                                                    Size: {resumeData.imageSettings?.size}%
                                                </label>
                                                <input
                                                    type="range"
                                                    min="50"
                                                    max="150"
                                                    value={resumeData.imageSettings?.size || 100}
                                                    onChange={(e) => onImageSettingsChange('size', parseInt(e.target.value))}
                                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-3 top-3.5 text-slate-400" />
                                    <input
                                        type="text"
                                        value={resumeData.personalInfo.fullName}
                                        onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Job Title</label>
                                <div className="relative">
                                    <Type size={18} className="absolute left-3 top-3.5 text-slate-400" />
                                    <input
                                        type="text"
                                        value={resumeData.personalInfo.title}
                                        onChange={(e) => handleInputChange('personalInfo', 'title', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Software Engineer"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Email</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-3 top-3.5 text-slate-400" />
                                    <input
                                        type="email"
                                        value={resumeData.personalInfo.email}
                                        onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Phone</label>
                                <div className="relative">
                                    <Phone size={18} className="absolute left-3 top-3.5 text-slate-400" />
                                    <input
                                        type="text"
                                        value={resumeData.personalInfo.contact}
                                        onChange={(e) => handleInputChange('personalInfo', 'contact', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="+1 234 567 890"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Professional Summary</label>
                            <textarea
                                value={resumeData.objective}
                                onChange={(e) => handleInputChange('objective', '', e.target.value)}
                                rows={4}
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Briefly describe your professional background and goals..."
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                <button
                    onClick={() => toggleSection('experience')}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                            <Briefcase size={24} />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-slate-800 text-xl">Experience</h3>
                            <p className="text-sm text-slate-500">Work history and roles</p>
                        </div>
                    </div>
                    {activeSection === 'experience' ? <ChevronUp size={24} className="text-slate-400" /> : <ChevronDown size={24} className="text-slate-400" />}
                </button>

                {activeSection === 'experience' && (
                    <div className="p-6 border-t border-slate-100 space-y-6 animate-in slide-in-from-top-2 duration-200">
                        {resumeData.experience.map((exp, index) => (
                            <div key={exp.id} className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative group transition-all hover:border-purple-200">
                                <button
                                    onClick={() => removeItem('experience', index)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-2 hover:bg-red-50 rounded-full"
                                    title="Remove Item"
                                >
                                    <Trash2 size={18} />
                                </button>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Role</label>
                                        <input
                                            type="text"
                                            value={exp.role}
                                            onChange={(e) => handleArrayChange('experience', index, 'role', e.target.value)}
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                            placeholder="Senior Developer"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company</label>
                                        <input
                                            type="text"
                                            value={exp.company}
                                            onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                            placeholder="Tech Corp Inc."
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Start Date</label>
                                            <input
                                                type="date"
                                                value={exp.startDate}
                                                onChange={(e) => handleArrayChange('experience', index, 'startDate', e.target.value)}
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">End Date</label>
                                            <input
                                                type="date"
                                                value={exp.endDate}
                                                onChange={(e) => handleArrayChange('experience', index, 'endDate', e.target.value)}
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={() => addItem('experience')}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all flex items-center justify-center gap-2 font-semibold"
                        >
                            <Plus size={20} />
                            Add Experience
                        </button>
                    </div>
                )}
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                <button
                    onClick={() => toggleSection('education')}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                            <GraduationCap size={24} />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-slate-800 text-xl">Education</h3>
                            <p className="text-sm text-slate-500">Degrees and certifications</p>
                        </div>
                    </div>
                    {activeSection === 'education' ? <ChevronUp size={24} className="text-slate-400" /> : <ChevronDown size={24} className="text-slate-400" />}
                </button>

                {activeSection === 'education' && (
                    <div className="p-6 border-t border-slate-100 space-y-6 animate-in slide-in-from-top-2 duration-200">
                        {resumeData.education.map((edu, index) => (
                            <div key={edu.id} className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative group transition-all hover:border-emerald-200">
                                <button
                                    onClick={() => removeItem('education', index)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-2 hover:bg-red-50 rounded-full"
                                    title="Remove Item"
                                >
                                    <Trash2 size={18} />
                                </button>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Degree</label>
                                        <input
                                            type="text"
                                            value={edu.degree}
                                            onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                                            placeholder="BSc Computer Science"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">School</label>
                                        <input
                                            type="text"
                                            value={edu.school}
                                            onChange={(e) => handleArrayChange('education', index, 'school', e.target.value)}
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                                            placeholder="University of Technology"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Start Year</label>
                                            <input
                                                type="date"
                                                value={edu.startYear}
                                                onChange={(e) => handleArrayChange('education', index, 'startYear', e.target.value)}
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">End Year</label>
                                            <input
                                                type="date"
                                                value={edu.endYear}
                                                onChange={(e) => handleArrayChange('education', index, 'endYear', e.target.value)}
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={() => addItem('education')}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 font-semibold"
                        >
                            <Plus size={20} />
                            Add Education
                        </button>
                    </div>
                )}
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                <button
                    onClick={() => toggleSection('skills')}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                            <Code size={24} />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-slate-800 text-xl">Skills</h3>
                            <p className="text-sm text-slate-500">Technical and soft skills</p>
                        </div>
                    </div>
                    {activeSection === 'skills' ? <ChevronUp size={24} className="text-slate-400" /> : <ChevronDown size={24} className="text-slate-400" />}
                </button>

                {activeSection === 'skills' && (
                    <div className="p-6 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-wrap gap-3 mb-6">
                            {resumeData.skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 group hover:border-orange-300 transition-colors">
                                    <input
                                        type="text"
                                        value={skill}
                                        onChange={(e) => handleSkillChange(index, e.target.value)}
                                        className="bg-transparent border-none focus:ring-0 p-0 text-sm w-32 text-slate-700 font-medium"
                                        placeholder="Skill (e.g. React)"
                                    />
                                    <button
                                        onClick={() => removeSkill(index)}
                                        className="text-slate-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={addSkill}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-all flex items-center justify-center gap-2 font-semibold"
                        >
                            <Plus size={20} />
                            Add Skill
                        </button>
                    </div>
                )}
            </div>

            {/* No Next Button needed in Split View */}
        </div>
    );
}
