import { FC } from "react";
import { InvoiceStatus } from "../../models";

type BadgeTypes = {
  status: string;
};

export const Badge: FC<BadgeTypes> = ({ status }) => {
  return (
    <>
      <div
        className={`px-6 py-2 w-max rounded-xl ${
          status === InvoiceStatus.PAID
            ? "text-green-600 bg-green-100"
            : status === InvoiceStatus.PENDING
            ? "text-yellow-600 bg-yellow-100"
            : "text-secondary bg-dark-light"
        }`}
      >
        {status === InvoiceStatus.PAID
          ? "Paid"
          : status === InvoiceStatus.PENDING
          ? "Pending"
          : "Draft"}
      </div>
    </>
  );
};
