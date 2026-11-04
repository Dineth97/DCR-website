export default {
  name: 'profile',
  title: 'Profile & About',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string' },
    { name: 'headline', title: 'Headline / Role', type: 'string' },
    { name: 'heroImage', title: 'Hero Main Image', type: 'image', options: { hotspot: true } },
    { name: 'aboutText', title: 'About Me Description', type: 'text' },
    { name: 'resumeFile', title: 'Resume (PDF)', type: 'file' },
  ],
}