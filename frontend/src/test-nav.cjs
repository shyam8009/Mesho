const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false
});

client.fetch(`*[_type == "navigationMenu"][0]{
  title,
  items[]{
    title,
    megaMenuType,
    categories[]->{
      _id,
      title,
      slug,
      description,
      iconSvg,
      highlights
    }
  }
}`).then(data => {
  console.log(JSON.stringify(data, null, 2));
}).catch(console.error);
