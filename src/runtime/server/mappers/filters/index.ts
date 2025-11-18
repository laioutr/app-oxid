import { AvailableFilter } from '#orchestr/types';
import { Manufacturer, Vendor } from '../../../../generated/types';

export const mapOxidFacetsToAvailableFilters = ({
  manufacturers,
  vendors,
}: {
  manufacturers: Pick<Manufacturer, 'id' | 'title'>[];
  vendors: Pick<Vendor, 'id' | 'title'>[];
}): AvailableFilter[] => {
  const filters = [] as AvailableFilter[];

  if (manufacturers.length) {
    filters.push({
      id: 'manufacturers',
      type: 'list',
      presentation: 'text',
      label: 'Manufacturers',
      values: manufacturers.map((manufacturer) => ({ id: manufacturer.id, label: manufacturer.title })),
    });
  }

  if (vendors.length) {
    filters.push({
      id: 'vendors',
      type: 'list',
      presentation: 'text',
      label: 'Vendors',
      values: vendors.map((vendor) => ({ id: vendor.id, label: vendor.title })),
    });
  }

  return filters;
};
