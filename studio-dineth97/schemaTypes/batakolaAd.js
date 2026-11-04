export default {
  name: 'batakolaAd',
  title: 'Batakola Achchi Ad Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Ad Title / Headline', type: 'string' },
    { name: 'description', title: 'Ad Content / Description', type: 'text' },
    { name: 'bannerImage', title: 'Banner Image', type: 'image', options: { hotspot: true } },
    { name: 'buttonText', title: 'Button Text', type: 'string' },
    { name: 'buttonUrl', title: 'Button Target URL', type: 'url' },
    { name: 'isActive', title: 'Show this Ad on Website?', type: 'boolean' },
  ],
}