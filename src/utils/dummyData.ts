import { ResumeData } from '@/types/resume';

export const dummyResumeData: ResumeData = {
  personalInfo: {
    fullName: 'Alice Hart',
    title: 'Math Teacher',
    contact: '(718) 555-0123',
    email: 'alice.hart@example.com',
  },
  objective: 'Passionate Math Teacher with over 8 years of experience creating a nurturing and encouraging learning environment. Adept at designing engaging lesson plans tailored to different learning styles.',
  experience: [
    {
      id: '1',
      role: 'Math Teacher',
      company: 'Liberty Middle School',
      startDate: '2018-09',
      endDate: 'Present',
      details: [],
    },
    {
      id: '2',
      role: 'Junior Teacher',
      company: 'Springfield Elementary',
      startDate: '2015-08',
      endDate: '2018-06',
      details: [],
    },
  ],
  education: [
    {
      id: '1',
      degree: 'Master of Education',
      school: 'University of Alabama',
      startYear: '2013',
      endYear: '2015',
      details: [],
    },
  ],
  skills: ['Curriculum Development', 'Classroom Management', 'Student Assessment', 'Algebra', 'Geometry'],
};
