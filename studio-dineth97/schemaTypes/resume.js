export default {
  name: 'resumeSection',
  title: 'Resume & Work Experience',
  type: 'document',
  fields: [
    { name: 'jobTitle', title: 'Job Title / Position', type: 'string' },
    { name: 'company', title: 'Company / Organization', type: 'string' },
    { name: 'duration', title: 'Duration (e.g. 2023 - Present)', type: 'string' },
    { name: 'description', title: 'Work Description / Responsibilities', type: 'text' },
  ],
}