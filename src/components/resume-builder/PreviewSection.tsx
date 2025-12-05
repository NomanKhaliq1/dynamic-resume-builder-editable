import React from 'react';
import { ResumeData } from '@/types/resume';
import { ArrowLeft, Edit, Download } from 'lucide-react';

interface PreviewSectionProps {
    resumeData: ResumeData;
    selectedTemplate: 'classic' | 'modern' | 'creative' | 'executive' | 'minimal';
    onEdit: () => void;
    onChangeTemplate: () => void;
    isThumbnail?: boolean;
    onColorChange?: (color: string) => void;
    onSidebarTextColorChange?: (color: string) => void;
    onIconColorChange?: (color: string) => void;
}


export default function PreviewSection({
    resumeData,
    selectedTemplate,
    onEdit,
    onChangeTemplate,
    isThumbnail = false,
    onColorChange,
    onSidebarTextColorChange,
    onIconColorChange
}: PreviewSectionProps) {

    const themeColor = resumeData.themeColor || '#0f172a';
    const sidebarTextColor = resumeData.sidebarTextColor || '#ffffff';
    const iconColor = resumeData.iconColor || '#475569';

    const ClassicTemplate = () => (
        <div
            className="bg-white shadow-2xl w-[210mm] min-h-[297mm] p-[20mm] text-slate-800"
            id="resume-preview"
            style={{ fontFamily: 'var(--font-merriweather), serif' }}
        >
            {/* Header */}
            <header className="border-b-2 pb-6 mb-8" style={{ borderColor: themeColor }}>
                <h1 className="text-4xl font-black uppercase tracking-wider mb-2" style={{ color: themeColor }}>
                    {resumeData.personalInfo.fullName || 'Your Name'}
                </h1>
                <p className="text-xl font-medium text-slate-600 tracking-wide">
                    {resumeData.personalInfo.title || 'Job Title'}
                </p>
                <div className="flex flex-wrap gap-6 mt-5 text-sm text-slate-600 font-sans">
                    {resumeData.personalInfo.contact && (
                        <span className="flex items-center gap-1">
                            <span style={{ color: iconColor }}>📞</span> {resumeData.personalInfo.contact}
                        </span>
                    )}
                    {resumeData.personalInfo.email && (
                        <span className="flex items-center gap-1">
                            <span style={{ color: iconColor }}>✉️</span> {resumeData.personalInfo.email}
                        </span>
                    )}
                </div>
            </header>

            {/* Objective */}
            {resumeData.objective && (
                <section className="mb-8">
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b pb-2 mb-4 font-sans" style={{ color: themeColor, borderColor: '#cbd5e1' }}>
                        Professional Summary
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-700 text-justify">
                        {resumeData.objective}
                    </p>
                </section>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b pb-2 mb-4 font-sans" style={{ color: themeColor, borderColor: '#cbd5e1' }}>
                        Experience
                    </h2>
                    <div className="space-y-6">
                        {resumeData.experience.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-lg text-slate-800">{exp.role}</h3>
                                    <span className="text-sm text-slate-500 font-sans font-medium">
                                        {exp.startDate} – {exp.endDate || 'Present'}
                                    </span>
                                </div>
                                <p className="text-base font-semibold text-slate-600 mb-2 italic">
                                    {exp.company}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {resumeData.education.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b pb-2 mb-4 font-sans" style={{ color: themeColor, borderColor: '#cbd5e1' }}>
                        Education
                    </h2>
                    <div className="space-y-6">
                        {resumeData.education.map((edu) => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-lg text-slate-800">{edu.degree}</h3>
                                    <span className="text-sm text-slate-500 font-sans font-medium">
                                        {edu.startYear} – {edu.endYear || 'Present'}
                                    </span>
                                </div>
                                <p className="text-base text-slate-600 italic">{edu.school}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {resumeData.skills.length > 0 && (
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest border-b pb-2 mb-4 font-sans" style={{ color: themeColor, borderColor: '#cbd5e1' }}>
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-x-2 gap-y-2 font-sans text-sm">
                        {resumeData.skills.map((skill, index) => (
                            <span key={index} className="text-slate-700 bg-slate-100 px-3 py-1 rounded-md font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );

    const ModernTemplate = () => (
        <div
            className="bg-white shadow-2xl w-[210mm] min-h-[297mm] flex text-slate-800"
            id="resume-preview"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
            {/* Sidebar */}
            <aside className="w-[70mm] p-8 flex flex-col gap-8" style={{ backgroundColor: themeColor, color: sidebarTextColor }}>
                <div className="text-center">
                    {resumeData.profileImage ? (
                        <div className="mx-auto mb-4 flex items-center justify-center overflow-hidden bg-white/10"
                            style={{
                                width: `${(resumeData.imageSettings?.size || 100) * 0.96}px`,
                                height: `${(resumeData.imageSettings?.size || 100) * 0.96}px`,
                                borderRadius: resumeData.imageSettings?.shape === 'circle' ? '50%' : resumeData.imageSettings?.shape === 'rounded' ? '1rem' : '0',
                            }}
                        >
                            <img
                                src={resumeData.profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
                            {resumeData.personalInfo.fullName.charAt(0) || 'U'}
                        </div>
                    )}
                    <h2 className="text-xl font-bold leading-tight">{resumeData.personalInfo.fullName}</h2>
                    <p className="text-sm mt-1 opacity-80">{resumeData.personalInfo.title}</p>
                </div>

                <div className="space-y-4 text-sm">
                    {resumeData.personalInfo.email && (
                        <div>
                            <p className="text-xs uppercase tracking-wider mb-1 opacity-60">Email</p>
                            <p>{resumeData.personalInfo.email}</p>
                        </div>
                    )}
                    {resumeData.personalInfo.contact && (
                        <div>
                            <p className="text-xs uppercase tracking-wider mb-1 opacity-60">Phone</p>
                            <p>{resumeData.personalInfo.contact}</p>
                        </div>
                    )}
                </div>

                {resumeData.skills.length > 0 && (
                    <div>
                        <h3 className="text-lg font-bold border-b border-white/20 pb-2 mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill, index) => (
                                <span key={index} className="bg-white/20 px-2 py-1 rounded text-xs">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {resumeData.objective && (
                    <section className="mb-8">
                        <h3 className="text-xl font-bold border-b-2 border-slate-100 pb-2 mb-4" style={{ color: themeColor }}>Profile</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            {resumeData.objective}
                        </p>
                    </section>
                )}

                {resumeData.experience.length > 0 && (
                    <section className="mb-8">
                        <h3 className="text-xl font-bold border-b-2 border-slate-100 pb-2 mb-4" style={{ color: themeColor }}>Experience</h3>
                        <div className="space-y-6">
                            {resumeData.experience.map((exp) => (
                                <div key={exp.id}>
                                    <h4 className="font-bold text-lg text-slate-800">{exp.role}</h4>
                                    <div className="flex justify-between text-sm text-slate-500 mb-2">
                                        <span className="font-medium" style={{ color: themeColor }}>{exp.company}</span>
                                        <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {resumeData.education.length > 0 && (
                    <section>
                        <h3 className="text-xl font-bold border-b-2 border-slate-100 pb-2 mb-4" style={{ color: themeColor }}>Education</h3>
                        <div className="space-y-6">
                            {resumeData.education.map((edu) => (
                                <div key={edu.id}>
                                    <h4 className="font-bold text-lg text-slate-800">{edu.degree}</h4>
                                    <div className="flex justify-between text-sm text-slate-500 mb-2">
                                        <span className="font-medium" style={{ color: themeColor }}>{edu.school}</span>
                                        <span>{edu.startYear} – {edu.endYear || 'Present'}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );

    const CreativeTemplate = () => (
        <div
            className="bg-white shadow-2xl w-[210mm] min-h-[297mm] text-slate-800"
            id="resume-preview"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
            {/* Header Block */}
            <header className="p-10 text-white" style={{ backgroundColor: themeColor }}>
                <div className="flex items-center gap-8">
                    {resumeData.profileImage && (
                        <div className="flex-shrink-0 overflow-hidden border-4 border-white/30"
                            style={{
                                width: `${(resumeData.imageSettings?.size || 100) * 1.2}px`,
                                height: `${(resumeData.imageSettings?.size || 100) * 1.2}px`,
                                borderRadius: resumeData.imageSettings?.shape === 'circle' ? '50%' : resumeData.imageSettings?.shape === 'rounded' ? '1rem' : '0',
                            }}
                        >
                            <img src={resumeData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    )}
                    <div>
                        <h1 className="text-5xl font-black tracking-tight mb-2">{resumeData.personalInfo.fullName}</h1>
                        <p className="text-xl font-medium opacity-90">{resumeData.personalInfo.title}</p>
                        <div className="flex flex-wrap gap-4 mt-4 text-sm opacity-80">
                            {resumeData.personalInfo.email && <span><span style={{ color: iconColor }}>✉️</span> {resumeData.personalInfo.email}</span>}
                            {resumeData.personalInfo.contact && <span><span style={{ color: iconColor }}>📞</span> {resumeData.personalInfo.contact}</span>}
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-10 grid grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="col-span-8 space-y-8">
                    {resumeData.objective && (
                        <section>
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: themeColor }}>
                                <span className="w-8 h-1 rounded-full" style={{ backgroundColor: themeColor }}></span>
                                Profile
                            </h3>
                            <p className="text-slate-600 leading-relaxed">{resumeData.objective}</p>
                        </section>
                    )}

                    {resumeData.experience.length > 0 && (
                        <section>
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2" style={{ color: themeColor }}>
                                <span className="w-8 h-1 rounded-full" style={{ backgroundColor: themeColor }}></span>
                                Experience
                            </h3>
                            <div className="space-y-8 border-l-2 border-slate-100 pl-6 ml-2">
                                {resumeData.experience.map((exp) => (
                                    <div key={exp.id} className="relative">
                                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 bg-white" style={{ borderColor: themeColor }}></div>
                                        <h4 className="font-bold text-lg text-slate-800">{exp.role}</h4>
                                        <div className="text-sm font-semibold mb-2" style={{ color: themeColor }}>{exp.company}</div>
                                        <p className="text-xs text-slate-400 mb-2 uppercase tracking-wide">{exp.startDate} – {exp.endDate || 'Present'}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right Column */}
                <div className="col-span-4 space-y-8">
                    {resumeData.education.length > 0 && (
                        <section className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-4" style={{ color: themeColor }}>Education</h3>
                            <div className="space-y-4">
                                {resumeData.education.map((edu) => (
                                    <div key={edu.id}>
                                        <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                                        <p className="text-sm text-slate-600">{edu.school}</p>
                                        <p className="text-xs text-slate-400 mt-1">{edu.startYear} – {edu.endYear}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {resumeData.skills.length > 0 && (
                        <section>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-4" style={{ color: themeColor }}>Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-1.5 rounded-lg text-sm font-bold text-white shadow-sm" style={{ backgroundColor: themeColor }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );

    const ExecutiveTemplate = () => (
        <div
            className="bg-white shadow-2xl w-[210mm] min-h-[297mm] p-[15mm] text-slate-800"
            id="resume-preview"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
            <header className="border-b-4 border-slate-800 pb-6 mb-8 flex justify-between items-end" style={{ borderColor: themeColor }}>
                <div>
                    <h1 className="text-5xl font-bold text-slate-900 uppercase tracking-tight mb-2">{resumeData.personalInfo.fullName}</h1>
                    <p className="text-2xl text-slate-600 font-light">{resumeData.personalInfo.title}</p>
                </div>
                {resumeData.profileImage && (
                    <div className="w-24 h-24 overflow-hidden border-2 border-slate-200"
                        style={{
                            borderRadius: resumeData.imageSettings?.shape === 'circle' ? '50%' : resumeData.imageSettings?.shape === 'rounded' ? '0.5rem' : '0',
                        }}
                    >
                        <img src={resumeData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                )}
            </header>

            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-8">
                    {resumeData.objective && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Executive Summary</h3>
                            <p className="text-slate-700 leading-relaxed font-medium">{resumeData.objective}</p>
                        </section>
                    )}

                    {resumeData.experience.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Professional Experience</h3>
                            <div className="space-y-8">
                                {resumeData.experience.map((exp) => (
                                    <div key={exp.id} className="border-l-2 border-slate-200 pl-4">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                                            <span className="text-sm font-mono text-slate-500">{exp.startDate} – {exp.endDate || 'Present'}</span>
                                        </div>
                                        <p className="text-base font-semibold mb-2" style={{ color: themeColor }}>{exp.company}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <div className="col-span-1 space-y-8 border-l border-slate-100 pl-8">
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Contact</h3>
                        <div className="space-y-2 text-sm">
                            {resumeData.personalInfo.email && <div className="font-medium">{resumeData.personalInfo.email}</div>}
                            {resumeData.personalInfo.contact && <div className="font-medium">{resumeData.personalInfo.contact}</div>}
                        </div>
                    </section>

                    {resumeData.education.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Education</h3>
                            <div className="space-y-4">
                                {resumeData.education.map((edu) => (
                                    <div key={edu.id}>
                                        <div className="font-bold text-slate-900">{edu.degree}</div>
                                        <div className="text-sm text-slate-600">{edu.school}</div>
                                        <div className="text-xs text-slate-400 mt-1">{edu.startYear} – {edu.endYear}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {resumeData.skills.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Expertise</h3>
                            <ul className="space-y-2">
                                {resumeData.skills.map((skill, index) => (
                                    <li key={index} className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }}></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );

    const MinimalTemplate = () => (
        <div
            className="bg-white shadow-2xl w-[210mm] min-h-[297mm] p-[20mm] text-slate-800 flex flex-col items-center text-center"
            id="resume-preview"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
            {resumeData.profileImage && (
                <div className="mb-6 overflow-hidden"
                    style={{
                        width: `${(resumeData.imageSettings?.size || 100)}px`,
                        height: `${(resumeData.imageSettings?.size || 100)}px`,
                        borderRadius: resumeData.imageSettings?.shape === 'circle' ? '50%' : resumeData.imageSettings?.shape === 'rounded' ? '1rem' : '0',
                    }}
                >
                    <img src={resumeData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                </div>
            )}

            <h1 className="text-3xl font-light tracking-widest uppercase mb-2">{resumeData.personalInfo.fullName}</h1>
            <p className="text-sm uppercase tracking-widest text-slate-400 mb-6">{resumeData.personalInfo.title}</p>

            <div className="flex gap-4 text-xs text-slate-500 mb-12">
                {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                {resumeData.personalInfo.contact && <span>• {resumeData.personalInfo.contact}</span>}
            </div>

            <div className="w-full max-w-2xl space-y-12 text-left">
                {resumeData.objective && (
                    <section>
                        <p className="text-center text-slate-600 leading-relaxed italic">"{resumeData.objective}"</p>
                    </section>
                )}

                {resumeData.experience.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-center mb-8 border-b border-slate-100 pb-4">Experience</h3>
                        <div className="space-y-8">
                            {resumeData.experience.map((exp) => (
                                <div key={exp.id} className="grid grid-cols-4 gap-4">
                                    <div className="col-span-1 text-right text-xs text-slate-400 pt-1">
                                        {exp.startDate} – {exp.endDate || 'Present'}
                                    </div>
                                    <div className="col-span-3">
                                        <h4 className="font-bold text-slate-800">{exp.role}</h4>
                                        <p className="text-sm text-slate-500 mb-2">{exp.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {resumeData.education.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-center mb-8 border-b border-slate-100 pb-4">Education</h3>
                        <div className="grid grid-cols-2 gap-8">
                            {resumeData.education.map((edu) => (
                                <div key={edu.id} className="text-center">
                                    <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                                    <p className="text-sm text-slate-500">{edu.school}</p>
                                    <p className="text-xs text-slate-400 mt-1">{edu.startYear} – {edu.endYear}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {resumeData.skills.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-center mb-8 border-b border-slate-100 pb-4">Skills</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {resumeData.skills.map((skill, index) => (
                                <span key={index} className="text-sm text-slate-600 border-b border-slate-200 pb-0.5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );

    return (
        <div className={`flex flex-col ${isThumbnail ? 'bg-transparent' : 'bg-slate-100 min-h-full'}`}>
            {/* Toolbar - Only show if NOT thumbnail */}
            {!isThumbnail && (
                <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex justify-between items-center sticky top-0 z-20 shadow-sm">
                    <div className="flex items-center gap-6">
                        {/* Theme Color Picker */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="color-picker" className="text-sm font-medium text-slate-500">
                                Theme:
                            </label>
                            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
                                <input
                                    id="color-picker"
                                    type="color"
                                    value={themeColor}
                                    onChange={(e) => onColorChange?.(e.target.value)}
                                    className="w-8 h-8 rounded cursor-pointer border-none p-0 bg-transparent"
                                    title="Pick Theme Color"
                                />
                            </div>
                        </div>

                        {/* Text Color Picker - Only for Modern Template */}
                        {selectedTemplate === 'modern' && (
                            <div className="flex items-center gap-2">
                                <label htmlFor="text-color-picker" className="text-sm font-medium text-slate-500">
                                    Text:
                                </label>
                                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
                                    <input
                                        id="text-color-picker"
                                        type="color"
                                        value={sidebarTextColor}
                                        onChange={(e) => onSidebarTextColorChange?.(e.target.value)}
                                        className="w-8 h-8 rounded cursor-pointer border-none p-0 bg-transparent"
                                        title="Pick Text Color"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm text-sm">
                        <Download size={16} />
                        Download PDF
                    </button>
                </div>
            )}

            {/* Preview Area */}
            <div className={`flex-1 flex justify-center ${isThumbnail ? '' : 'p-8'}`}>
                <div className={`transform transition-transform duration-200 origin-top ${isThumbnail ? 'scale-100' : 'scale-[1]'} shadow-2xl`}>
                    {selectedTemplate === 'classic' && <ClassicTemplate />}
                    {selectedTemplate === 'modern' && <ModernTemplate />}
                    {selectedTemplate === 'creative' && <CreativeTemplate />}
                    {selectedTemplate === 'executive' && <ExecutiveTemplate />}
                    {selectedTemplate === 'minimal' && <MinimalTemplate />}
                </div>
            </div>
        </div>
    );
}
