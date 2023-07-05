import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, FormInput } from "../shared";
import * as Icons from "../../assets/icons";
import { getRandomNumber } from "../../utils";

const initialState = {
  sender_street_address: "",
  sender_city: "",
  sender_post_code: "",
  sender_country: "",
  client_name: "",
  client_email: "",
  client_street_address: "",
  client_city: "",
  client_post_code: "",
  client_country: "",
  issue_date: "",
  payment_terms: "",
  project_description: ""
};

type InvoicePropsTypes = {
  setShowCreateNewInvoice: Dispatch<SetStateAction<boolean>>;
  setInvoiceDatas: any;
};

const InvoiceForm: FC<InvoicePropsTypes> = ({
  setShowCreateNewInvoice,
  setInvoiceDatas
}) => {
  const [submitTriggred, setSubmitTriggred] = useState<null | "send" | "draft">(
    "send"
  );

  const [values, setValues] = useState<any>(initialState);

  const [items, setItems] = useState<any[]>([
    {
      name: "",
      quantity: "",
      price: "",
      total: ""
    }
  ]);

  const inputs = [
    {
      component: "input",
      name: "sender_street_address",
      type: "text",
      placeholder: "Street Address",
      errorMessage: "Fill sender street address",
      label: "Street Address",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "sender_city",
      type: "text",
      placeholder: "City",
      errorMessage: "Fill sender city",
      label: "City",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "sender_post_code",
      type: "text",
      placeholder: "Post Code",
      errorMessage: "Fill sender post code",
      label: "Post Code",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "sender_country",
      type: "text",
      placeholder: "Country",
      errorMessage: "Fill sender country",
      label: "Country",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "client_name",
      type: "text",
      placeholder: "Client's Name",
      errorMessage: "Fill Client's Name",
      label: "Client's Name",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "client_email",
      type: "text",
      placeholder: "Client's Email",
      errorMessage: "Fill Client's Email",
      label: "Client's Name",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "client_street_address",
      type: "text",
      placeholder: "Street Address",
      errorMessage: "Fill client street address",
      label: "Street Address",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "client_city",
      type: "text",
      placeholder: "City",
      errorMessage: "Fill client city",
      label: "City",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "client_post_code",
      type: "text",
      placeholder: "Post Code",
      errorMessage: "Fill client post code",
      label: "Post Code",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "client_country",
      type: "text",
      placeholder: "Country",
      errorMessage: "Fill client country",
      label: "Country",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "issue_date",
      type: "date",
      placeholder: "Issue Date",
      errorMessage: "Fill issue date",
      label: "Issue Date",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "client_country",
      type: "text",
      placeholder: "Country",
      errorMessage: "Fill client country",
      label: "Country",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "project_description",
      type: "text",
      placeholder: "Project Description",
      errorMessage: "Fill project description",
      label: "Project Description",
      required: submitTriggred === "send" && true
    }
  ];

  const itemsInput = [
    {
      component: "input",
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Fill item name",
      label: "Name",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "quantity",
      type: "number",
      placeholder: "Qty",
      errorMessage: "Fill item quantity",
      label: "Qty.",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "price",
      type: "number",
      placeholder: "Price",
      errorMessage: "Fill item price",
      label: "Price",
      required: submitTriggred === "send" && true
    },
    {
      component: "input",
      name: "total",
      type: "number",
      placeholder: "Total",
      label: "Total"
    }
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleItemsChange = (index: number, e: any) => {
    const { name, value } = e.target;
    let newItems = [...items];
    newItems[index][name] = value;
    if (name === "quantity" && newItems[index]["price"]) {
      newItems[index]["total"] = newItems[index]["price"] * value;
    } else if (name === "price" && newItems[index]["quantity"]) {
      newItems[index]["total"] = newItems[index]["quantity"] * value;
    }
    setItems(newItems);
  };

  let removeItems = (index: number) => {
    let newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const addItemsList = () => {
    setItems([
      ...items,
      {
        name: "",
        quantity: "",
        price: "",
        total: ""
      }
    ]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitTriggred("send");
    const datas = {
      id: getRandomNumber(),
      createdAt: Date.now(),
      status: "paid",
      paymentDue: values.issue_date,
      senderAddress: {
        street: values.sender_street_address,
        city: values.sender_city,
        postCode: values.sender_post_code,
        country: values.sender_country
      },
      clientName: values.client_name,
      clientEmail: values.client_email,
      clientAddress: {
        street: values.client_street_address,
        city: values.client_city,
        postCode: values.client_post_code,
        country: values.client_country
      },
      items: items,
      total: items.reduce((previousValue, currentObject) => {
        return previousValue + Number(currentObject.total);
      }, 0),
      description: values.description
    };
    setInvoiceDatas((prev: any) => [...prev, datas]);
    setShowCreateNewInvoice(false);
  };

  return (
    <div className="w-[800px] pl-[130px] pr-10 absolute bg-dark-light text-secondary-light left-0 top-0 bottom-0 rounded-r-2xl py-16 overflow-y-auto">
      <h3 className="display-h3">New Invoice</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-6 mt-8">
          <div className="text-primary font-semibold">Bill From</div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3">
              <FormInput
                {...inputs[0]}
                value={values.street_address}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            {inputs.slice(1, 4).map((input) => {
              return (
                <FormInput
                  key={input.name}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                  className="w-full"
                />
              );
            })}
          </div>
          <div className="text-primary font-semibold">Bill To</div>
          <div className="grid grid-cols-3 gap-6">
            {inputs.slice(4, 7).map((input) => {
              return (
                <div key={input.name} className="col-span-3">
                  <FormInput
                    {...input}
                    value={values[input.name]}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              );
            })}
            {inputs.slice(7, 10).map((input) => {
              return (
                <FormInput
                  key={input.name}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                  className="w-full"
                />
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-6">
            {inputs.slice(10, 12).map((input) => {
              return (
                <FormInput
                  key={input.name}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                  className="w-full"
                />
              );
            })}
            <div className="col-span-3">
              <FormInput
                {...inputs[12]}
                value={values.project_description}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
          {/* Items */}
          <div className="text-darkprimary-light text-xl font-semibold">
            Items List
          </div>
          <div className="flex flex-col items-center gap-4">
            {items.map((input, index) => {
              return (
                <div key={index} className="flex items-center gap-4">
                  {itemsInput.map((inputs, i) => {
                    return (
                      <FormInput
                        key={`${index}-${i}`}
                        {...inputs}
                        value={input[inputs.name]}
                        onChange={(e: any) => handleItemsChange(index, e)}
                        className="w-full"
                      />
                    );
                  })}
                  <Icons.DeleteIcon
                    className="cursor-pointer mt-3 flex-shrink-0"
                    onClick={() => removeItems(index)}
                  />
                </div>
              );
            })}
          </div>
          <Button
            type="button"
            variant="default"
            className="text-center"
            onClick={addItemsList}
          >
            Add Items
          </Button>
        </div>

        <div className="flex justify-between items-center mt-10">
          <Button
            title="Discard"
            onClick={() => setShowCreateNewInvoice(false)}
          />
          <Button type="submit" variant="primary" title="Save and Send" />
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
