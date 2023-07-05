export enum InvoiceStatus {
  PAID = "paid",
  PENDING = "pending",
  DRAFT = "draft"
}

export type InvoiceStatusTypes =
  | InvoiceStatus.PAID
  | InvoiceStatus.PENDING
  | InvoiceStatus.DRAFT;

type AddressDataTypes = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type ItemDataTypes = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type InvoiceDataTypes = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: AddressDataTypes;
  clientAddress: AddressDataTypes;
  items: ItemDataTypes[];
  total: number;
};

export type InvoicesTypes = InvoiceDataTypes[];
