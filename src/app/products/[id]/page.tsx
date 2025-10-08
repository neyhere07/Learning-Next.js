export default async function Product({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <h1>Product: {id}</h1>;
}
// param is a type of object which contains a key ID of type string
// ID here refers to the special folder name.
// In Next.js 15, dynamic APIs have been made asynchronous, params is one of them.
// So we wxtract ID by awaiting params and we convert our react component into an async function component, display the destructed ID in an h1 tag
// Back in the browser you should now be able to see the product ID displayed on the page.

// Let's say you want specific layout for all product detail pages, within the ID folder create a new file layout.tsx and default export a react component with Children prop