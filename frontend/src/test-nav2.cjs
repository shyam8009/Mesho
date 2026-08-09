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
      highlights,
      "systems": *[_type == "ecosystemPage" && category == ^.slug.current] {
        _id,
        title,
        slug,
        "description": hero.intro,
        "image": hero.bgImage
      }
    }
  }
}`).then(data => {
  console.log(JSON.stringify(data, null, 2));
}).catch(console.error);
