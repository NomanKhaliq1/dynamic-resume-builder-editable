'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ResumeBuilder from '@/components/resume-builder/ResumeBuilder';

function BuilderContent() {
    const searchParams = useSearchParams();
    const template = searchParams.get('template') as 'classic' | 'modern' | null;

    return <ResumeBuilder initialTemplate={template || 'classic'} />;
}

export default function BuilderPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BuilderContent />
        </Suspense>
    );
}
