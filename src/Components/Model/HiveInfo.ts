export type HiveDental = {
    name: string;
    address: Address;
    phoneNumber: string;
    email: string;
    hours: OperatingHours[];
}

export type Address = {
    streetNumber: string;
    unitNumber?: string;
    city: string;
    province: string;
    zipCode: string;
}

export type OperatingHours = {
    day: string;
    time: string;
}