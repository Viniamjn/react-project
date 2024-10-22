export interface IUsers {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IUsersAddress;
	phone: string;
	website: string;
	company: IUsersCompany;
}
export interface IUsersAddressGeo {
	lat: string;
	lng: string;
}
export interface IUsersAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IUsersAddressGeo;
}
export interface IUsersCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}