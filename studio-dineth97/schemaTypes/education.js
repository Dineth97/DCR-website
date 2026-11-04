export default {
  name: 'education',
  title: 'Education & Qualifications',
  type: 'document',
  fields: [
    { name: 'degree', title: 'Degree / Certificate', type: 'string' },
    { name: 'institution', title: 'University / Institute', type: 'string' },
    { name: 'duration', title: 'Year / Duration (e.g. 2022 - Present)', type: 'string' },
    { name: 'details', title: 'Details / Special Notes', type: 'text' },
  ],
}