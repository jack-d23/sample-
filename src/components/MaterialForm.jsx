import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const MaterialForm = () => {
  const [items, setItems] = useState([
    {
      itemName: "",
      quantity: "",
      unit: "",
      type: "",
      serialNo: "",
    },
  ]);

  const [driverDetails, setDriverDetails] = useState({
    name: "",
    phone: "",
    licenseNo: "",
  });

  const [cleanerDetails, setCleanerDetails] = useState({
    name: "",
    phone: "",
  });

  const addItem = () => {
    setItems([
      ...items,
      {
        itemName: "",
        quantity: "",
        unit: "",
        type: "",
        serialNo: "",
      },
    ]);
    setTimeout(() => {
      lastItemRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const removeItem = (index) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleDriverChange = (field, value) => {
    setDriverDetails({ ...driverDetails, [field]: value });
  };

  const handleCleanerChange = (field, value) => {
    setCleanerDetails({ ...cleanerDetails, [field]: value });
  };
  const lastItemRef = useRef(null);

  return (
    <div className="p-5 my-[2rem] mx-[10%] border shadow">
      <p className="text-3xl text-center font-medium m-2">
        Supplier Material Pass Form
      </p>
      <div className="h-[1px] bg-black/50"></div>

      <div className="space-y-6 mt-6">
        <div className="border shadow p-3 rounded-sm">
          <p className="text-sm font-medium my-2">Supplier Details</p>
          <div className="h-[0.5px] bg-red-500 mb-4"></div>

          <div className="flex md:flex-row flex-col gap-4 mb-4">
            <div className="flex-1">
              <label className="text-xs">Supplier Name</label>
              <Input type="text" placeholder="Enter Supplier Name" />
            </div>
            <div className="flex-1">
              <label className="text-xs">Organization Name</label>
              <Input type="text" placeholder="Enter Organization Name" />
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4 mb-4">
            <div className="flex-1">
              <label className="text-xs">Phone Number</label>
              <Input type="tel" placeholder="+91XXXXXXXXXX" />
            </div>
            <div className="flex-1">
              <label className="text-xs">Email Address</label>
              <Input type="email" placeholder="example@supplier.com" />
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex-1">
              <label className="text-xs">Purpose of Visit</label>
              <Input type="text" placeholder="E.g., Material Delivery" />
            </div>
            <div className="flex-1">
              <label className="text-xs">Material Entry Date & Time</label>
              <Input type="datetime-local" />
            </div>
          </div>
        </div>

        <div className="border shadow p-4 rounded-sm">
          <div className="flex justify-between">
            <p className="text-sm font-medium my-2">Item Details</p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  className="text-xs mb-2 cursor-pointer bg-red-500 ml-auto mt-4"
                >
                  Add
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Add New Item</AlertDialogTitle>
                  <AlertDialogDescription>
                    Do You Want to add New Item Detail?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>No</AlertDialogCancel>
                  <AlertDialogAction onClick={addItem}>Yes</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-[0.5px] bg-red-500 mb-4"></div>

          <Accordion type="multiple" className="space-y-2">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-md"
              >
                <AccordionTrigger className="py-4 font-semibold">
                  <div className="flex justify-between items-center px-4">
                    Item {index + 1}
                    {items.length > 1 && (
                      <Button
                        size="icon"
                        className="bg-red-500 text-white rounded-full ml-5"
                        onClick={() => removeItem(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    <Input
                      type="text"
                      placeholder="Item Name"
                      value={item.itemName}
                      onChange={(e) =>
                        handleItemChange(index, "itemName", e.target.value)
                      }
                    />
                    <Input
                      type="number"
                      placeholder="Quantity"
                      value={item.quantity}
                      onChange={(e) =>
                        handleItemChange(index, "quantity", e.target.value)
                      }
                    />
                    <Input
                      type="text"
                      placeholder="Unit (e.g. kg, pcs)"
                      value={item.unit}
                      onChange={(e) =>
                        handleItemChange(index, "unit", e.target.value)
                      }
                    />
                    <select
                      value={item.type}
                      onChange={(e) =>
                        handleItemChange(index, "type", e.target.value)
                      }
                      className="border rounded p-2 text-sm"
                    >
                      <option value="">Select Type</option>
                      <option value="Returnable">Returnable</option>
                      <option value="Non-returnable">Non-returnable</option>
                    </select>
                    <Input
                      type="text"
                      placeholder="Serial Number"
                      value={item.serialNo}
                      onChange={(e) =>
                        handleItemChange(index, "serialNo", e.target.value)
                      }
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="border shadow p-4 rounded-sm">
          <p className="text-sm font-medium my-2">Driver Details</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              type="text"
              placeholder="Driver Name"
              value={driverDetails.name}
              onChange={(e) => handleDriverChange("name", e.target.value)}
            />
            <Input
              type="tel"
              placeholder="Driver Phone"
              value={driverDetails.phone}
              onChange={(e) => handleDriverChange("phone", e.target.value)}
            />
            <Input
              type="text"
              placeholder="License Number"
              value={driverDetails.licenseNo}
              onChange={(e) => handleDriverChange("licenseNo", e.target.value)}
            />
          </div>
        </div>

        <div className="border shadow p-4 rounded-sm">
          <p className="text-sm font-medium my-2">Cleaner Details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Cleaner Name"
              value={cleanerDetails.name}
              onChange={(e) => handleCleanerChange("name", e.target.value)}
            />
            <Input
              type="tel"
              placeholder="Cleaner Phone"
              value={cleanerDetails.phone}
              onChange={(e) => handleCleanerChange("phone", e.target.value)}
            />
          </div>
        </div>
        <div className="border shadow p-4 rounded-sm">
          <p className="text-sm font-medium my-2">Vehicle Details</p>
          <div className="flex md:flex-row flex-col gap-4 mb-4">
            <div className="flex-1">
              <label className="text-xs">Vehicle Number</label>
              <Input type="text" placeholder="TN XX XX XXXX" />
            </div>
            <div className="flex-1">
              <label className="text-xs">Vehicle Type</label>
              <Input type="text" placeholder="Truck, Lorry, etc." />
            </div>
          </div>
        </div>

        <div className="flex">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                size="lg"
                className="text-xs cursor-pointer bg-red-500 ml-auto mt-4"
              >
                Submit
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div className="flex gap-10 flex-col items-center">
                <img src="/send-mail.png" width={200} alt="" />
                <h1 className="font-semibold">
                  Your Form has been submitted successfully!!
                </h1>
                <Link to={"/home"}>
                  <AlertDialogAction>Go Back To Home Page</AlertDialogAction>
                </Link>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default MaterialForm;
