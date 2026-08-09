const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false
});

async function run() {
  const categories = await client.fetch(`*[_type == "category"]{_id, title, slug, parentCategory->{title}}`);
  const ecosystemPages = await client.fetch(`*[_type == "ecosystemPage"]{_id, title, slug, category}`);
  const products = await client.fetch(`*[_type == "product"]{_id, title, slug, category->{title, slug}}`);
  
  console.log("Categories:", categories);
  console.log("Ecosystem Pages:", ecosystemPages);
  console.log("Products:", products);
}

run();
