import { Badge, Button } from "../shared";
import * as Icons from "../../assets/icons";
import { useState } from "react";
import { InvoicesTypes } from "../../models";
import InvoiceForm from "../forms/Invoice";

const HomePage = () => {
  const [incoiceDatas, setInvoiceDatas] = useState<InvoicesTypes>([]);
  const [showCreateNewInvoice, setShowCreateNewInvoice] =
    useState<boolean>(false);

  const createNewInvoice = () => {
    setShowCreateNewInvoice(true);
  };

  return (
    <>
      <div className="invoices-page-wrapper w-full">
        {/* Invoice Header */}
        <div className="w-full mb-20">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-col gap-y-3">
              <h1 className="display-h1">Invoices</h1>
              <p className="display-body">
                {incoiceDatas.length > 0
                  ? `There are ${incoiceDatas.length} total invoices`
                  : "No Invoices"}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                title="New Invoice"
                variant="primary"
                icon={<Icons.PlusIcon />}
                onClick={createNewInvoice}
              />
            </div>
          </div>
        </div>
        {/* Invoice Lists */}
        {incoiceDatas.length > 0 ? (
          <div className=" overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody className="table w-full">
                {incoiceDatas.map((invoice) => (
                  <tr key={invoice.id} className="table w-full mb-4">
                    <td className="py-6 pl-4 bg-dark text-secondary-light rounded-l-lg min-w-[100px]">
                      <span className="text-primary">#</span>
                      {invoice.id}
                    </td>
                    <td className="py-6 bg-dark text-secondary-light min-w-[200px]">
                      Due{" "}
                      {new Date(invoice.paymentDue).toLocaleDateString(
                        "en-US",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </td>
                    <td className="py-6 bg-dark text-secondary-light text-left min-w-[200px]">
                      {invoice.clientName}
                    </td>
                    <td className="py-6 bg-dark text-secondary-light min-w-[200px]">
                      &#8356; {invoice.total}
                    </td>
                    <td className="py-6 bg-dark text-secondary-light">
                      <Badge status={invoice.status} />
                    </td>
                    <td className="py-6 bg-dark text-secondary-light rounded-r-lg">
                      <Icons.ArrowRightIcon />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <Icons.EmptyIllustration />
            <h3 className="display-h3 mt-10 text-secondary-light">
              There is nothing here
            </h3>
            <p className="display-base mt-6 text-center text-secondary-light">
              Create a invoice by clicking the <br /> <b>New Invoice</b> button
              and get started.
            </p>
          </div>
        )}
      </div>
      {/* Invoice Form */}
      {showCreateNewInvoice && (
        <InvoiceForm
          setShowCreateNewInvoice={setShowCreateNewInvoice}
          setInvoiceDatas={setInvoiceDatas}
        />
      )}
    </>
  );
};

export default HomePage;
