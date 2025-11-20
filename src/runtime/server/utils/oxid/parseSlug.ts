export const parseSlug = (type: 'category' | 'product', slug: string): { slug: string } | { id: string } => {
  const [slugPart, id] = slug.split(':');

  if (type === 'category' && !id) {
    return { slug: slugPart };
  }

  if (!id) {
    throw new Error(`Invalid slug: ${slug}. Must contain an id.`);
  }

  return { id };
};
