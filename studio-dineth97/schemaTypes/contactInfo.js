export default {
  name: 'contactInfo',
  title: 'Contact & Social Links',
  type: 'document',
  fields: [
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'github', title: 'GitHub URL', type: 'url' },
    { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
    { name: 'facebook', title: 'Facebook URL', type: 'url' },
    { name: 'whatsapp', title: 'WhatsApp Number / Link', type: 'string' },
  ],
}