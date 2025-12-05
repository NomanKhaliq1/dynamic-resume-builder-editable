'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import TemplateSelector from '@/components/resume-builder/TemplateSelector';

export default function TemplatesPage() {
    const router = useRouter();

    const handleSelect = (template: 'classic' | 'modern' | 'creative' | 'executive' | 'minimal') => {
        router.push(`/create-resume/builder?template=${template}`);
    };

    return (
        <TemplateSelector
            selectedTemplate="classic" // Default, not really used here as we just click to select
            setSelectedTemplate={handleSelect}
            onNext={() => { }} // Handled by setSelectedTemplate
            onBack={() => router.push('/')}
        />
    );
}
