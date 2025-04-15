import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Trash2 } from "lucide-react";
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

const VisitorForm = () => {
  const [visitors, setVisitors] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "+91",
      organization: "",
      address: "",
      photo: null,
      aadhar: "0000-0000-0000",
    },
  ]);

  const [devices, setDevices] = useState([{ name: "", model: "", type: "" }]);
  const [vehicles, setVehicles] = useState([
    { number: "", model: "", type: "" },
  ]);

  const lastVisitorRef = useRef(null);
  const lastDeviceRef = useRef(null);
  const lastVehicleRef = useRef(null);

  const addVisitor = () => {
    setVisitors((prev) => {
      const updated = [
        ...prev,
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: "+91",
          photo: null,
          aadhar: "",
        },
      ];
      setTimeout(() => {
        lastVisitorRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
      return updated;
    });
  };

  const addDevice = () => {
    setDevices((prev) => {
      const updated = [...prev, { name: "", model: "", type: "" }];
      setTimeout(() => {
        lastDeviceRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
      return updated;
    });
  };

  const addVehicle = () => {
    setVehicles((prev) => {
      const updated = [...prev, { number: "", model: "", type: "" }];
      setTimeout(() => {
        lastVehicleRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
      return updated;
    });
  };

  const removeVisitor = (index) => {
    if (visitors.length > 1) {
      setVisitors(visitors.filter((_, i) => i !== index));
    }
  };

  const removeDevice = (index) => {
    if (devices.length > 1) {
      setDevices(devices.filter((_, i) => i !== index));
    }
  };

  const removeVehicle = (index) => {
    if (vehicles.length > 1) {
      setVehicles(vehicles.filter((_, i) => i !== index));
    }
  };

  const handleChange = (index, field, value, type) => {
    if (type === "visitor") {
      const updatedVisitors = [...visitors];
      updatedVisitors[index][field] = value;
      setVisitors(updatedVisitors);
    } else if (type === "device") {
      const updatedDevices = [...devices];
      updatedDevices[index][field] = value;
      setDevices(updatedDevices);
    } else if (type === "vehicle") {
      const updatedVehicles = [...vehicles];
      updatedVehicles[index][field] = value;
      setVehicles(updatedVehicles);
    }
  };

  return (
    <div className="p-5 my-[2rem] mx-[10%] border shadow">
      <p className="text-3xl text-center font-medium m-2">Visitor Form</p>
      <div className="h-[1px] bg-black/50"></div>

      <div className="space-y-5">
        <div className="p-3 my-5 shadow rounded-sm border">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium my-2">Visitor Details</p>
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
                  <AlertDialogTitle>Add Visitor</AlertDialogTitle>
                  <AlertDialogDescription>
                    Do You Want to add New Visitor Detail?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>No</AlertDialogCancel>
                  <AlertDialogAction onClick={addVisitor}>
                    Yes
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-[0.5px] bg-red-500"></div>

          <Accordion type="multiple">
            {visitors.map((visitor, index) => (
              <AccordionItem
                key={index}
                value={`visitor-${index}`}
                ref={index === visitors.length - 1 ? lastVisitorRef : null}
                className="border p-4 rounded-lg mt-6"
              >
                <AccordionTrigger className="py-4 font-semibold">
                  <div className="flex justify-between items-center px-4">
                    Person {index + 1}
                    {visitors.length > 1 && (
                      <Button
                        size="icon"
                        className="bg-red-500 text-white rounded-full ml-5"
                        onClick={() => removeVisitor(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="mt-4 space-y-4">
                  <div className="flex md:flex-row flex-col flex-wrap gap-4">
                    <div className="flex-1">
                      <label className="text-xs">First Name</label>
                      <Input
                        type="text"
                        value={visitor.firstName}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "firstName",
                            e.target.value,
                            "visitor"
                          )
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs">Last Name</label>
                      <Input
                        type="text"
                        value={visitor.lastName}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "lastName",
                            e.target.value,
                            "visitor"
                          )
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs">Email address</label>
                      <Input
                        type="email"
                        value={visitor.email}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "email",
                            e.target.value,
                            "visitor"
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="flex md:flex-row flex-col flex-wrap gap-4">
                    <div className="flex-1">
                      <label className="text-xs">Phone Number</label>
                      <Input
                        type="tel"
                        value={visitor.phone}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "phone",
                            e.target.value,
                            "visitor"
                          )
                        }
                        placeholder="+91XXXXXXXXXX"
                      />
                    </div>

                    {index === 0 && (
                      <>
                        <div className="flex-1">
                          <label className="text-xs">Organization Name</label>
                          <Input
                            type="text"
                            value={visitor.organization}
                            onChange={(e) =>
                              handleChange(
                                index,
                                "organization",
                                e.target.value,
                                "visitor"
                              )
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <label className="text-xs">
                            Organization's Address
                          </label>
                          <Input
                            type="text"
                            value={visitor.address}
                            onChange={(e) =>
                              handleChange(
                                index,
                                "address",
                                e.target.value,
                                "visitor"
                              )
                            }
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex-1">
                    <label className="text-xs">Aadhar Number</label>
                    <Input
                      type="text"
                      value={visitor.aadhar}
                      onChange={(e) =>
                        handleChange(index, "aadhar", e.target.value, "visitor")
                      }
                    />
                  </div>
                  <div>
                    <label className="text-xs">Upload Visitor's Photo</label>
                    <Input
                      type="file"
                      accept="image/*"
                      className="cursor-pointer"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="border shadow p-3 rounded-sm">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium my-2">Device Details</p>
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
                  <AlertDialogTitle>Add Device</AlertDialogTitle>
                  <AlertDialogDescription>
                    Do You Want to add New Device Detail?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>No</AlertDialogCancel>
                  <AlertDialogAction onClick={addDevice}>Yes</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-[0.5px] bg-red-500"></div>

          {devices.map((device, index) => (
            <div
              key={index}
              ref={index === devices.length - 1 ? lastDeviceRef : null}
              className="mt-4 md:flex-row flex-col flex gap-4"
            >
              <Input
                type="text"
                placeholder="Device Name"
                value={device.name}
                onChange={(e) =>
                  handleChange(index, "name", e.target.value, "device")
                }
              />
              <Input
                type="text"
                placeholder="Device Model"
                value={device.model}
                onChange={(e) =>
                  handleChange(index, "model", e.target.value, "device")
                }
              />
              <Input
                type="text"
                placeholder="Device Type"
                value={device.type}
                onChange={(e) =>
                  handleChange(index, "type", e.target.value, "device")
                }
              />
              {devices.length > 1 && (
                <Button
                  size="sm"
                  className="bg-red-500 rounded-full text-xs"
                  onClick={() => removeDevice(index)}
                >
                  <Trash2 />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="border shadow p-3 rounded-sm">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium my-2">Vehicle Details</p>
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
                  <AlertDialogTitle>Add Vehicle</AlertDialogTitle>
                  <AlertDialogDescription>
                    Do You Want to add New Vehicle Detail?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>No</AlertDialogCancel>
                  <AlertDialogAction onClick={addVehicle}>
                    Yes
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-[0.5px] bg-red-500"></div>

          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              ref={index === vehicles.length - 1 ? lastVehicleRef : null}
              className="mt-4 flex md:flex-row flex-col gap-4"
            >
              <Input
                type="text"
                placeholder="Vehicle Number"
                value={vehicle.number}
                onChange={(e) =>
                  handleChange(index, "number", e.target.value, "vehicle")
                }
              />
              <Input
                type="text"
                placeholder="Vehicle Model"
                value={vehicle.model}
                onChange={(e) =>
                  handleChange(index, "model", e.target.value, "vehicle")
                }
              />
              <Input
                type="text"
                placeholder="Vehicle Type"
                value={vehicle.type}
                onChange={(e) =>
                  handleChange(index, "type", e.target.value, "vehicle")
                }
              />
              {vehicles.length > 1 && (
                <Button
                  size="sm"
                  className="bg-red-500 rounded-full text-xs"
                  onClick={() => removeVehicle(index)}
                >
                  <Trash2 />
                </Button>
              )}
            </div>
          ))}
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

export default VisitorForm;
