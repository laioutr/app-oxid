/** Menu ids are orchestr-specific ids generated from oxid ids. This will allow us to use menus that are not categories. */
export const getMenuId = (type: 'category', id: string) => `${type}:${id}`;

/** Parses a menu id into its type and id. */
export const parseMenuId = (menuId: string) => {
  const [type, id] = menuId.split(':');
  return { type, id };
};
