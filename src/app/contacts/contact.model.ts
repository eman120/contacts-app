export interface Contact {
  id: string,
  firstName: string,
  lastName: string,
  dateOfBirth: Date | null,
  favoritesRanking: number | null,
  phone: Phone,
  address: Address,
}

export interface Phone {
  phoneNumber: string,
  phoneType: string,
}

export interface Address {
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  addressType: string,
}

export const phoneTypeValues = [
  { value: 'mobile', title: 'Mobile' },
  { value: 'work', title: 'Work' },
  { value: 'other', title: 'Other' }
];

export const addressTypeValues = [
  { value: 'home', title: 'Home' },
  { value: 'work', title: 'Work' },
  { value: 'other', title: 'Other' }
];