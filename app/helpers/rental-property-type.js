import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]) { // {{rentalPropertyType "Apartment" "Estate"}} would result in myHelper(["Apartment", "Estate"])
  if(communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }

  return 'Standalone';
}

export default helper(rentalPropertyType);
