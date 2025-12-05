export interface Experience {
  id: string;
  role: string;
  company: string; // Legacy didn't have company explicitly in the HTML structure shown, but usually it's there. I'll keep it or map it.
  // Wait, legacy HTML has: Role, Start, End, Details. No Company/Institute for Experience?
  // Line 33: Label Role, Input experience-role.
  // It seems the legacy form missed "Company" for experience! I should probably add it as an improvement or stick to legacy.
  // I'll add it because a resume without company name is weird.
  startDate: string;
  endDate: string;
  details: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string; // Legacy: "Institute"
  startYear: string;
  endYear: string;
  details: string[];
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    title: string;
    contact: string;
    email: string;
  };
  objective: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  themeColor?: string;
  sidebarTextColor?: string;
  profileImage?: string;
  iconColor?: string;
  imageSettings?: {
    shape: 'circle' | 'square' | 'rounded';
    size: number; // Percentage (e.g., 100 for normal, 50 for half)
  };
}
