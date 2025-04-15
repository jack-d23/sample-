import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Check, X } from "lucide-react";
import View from "@/components/View";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Edit from "./Edit";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import MaterialView from "./MaterialView";

const Materials = () => {
  const details = [
    {
      supplierName: "Alice",
      organizationName: "TechCorp",
      purpose: "Meeting",
      entryDate: "2025-04-14",
      driverName: "John Doe",
      itemType: "Electronics",
      accepted: false,
      rejected: false,
    },
    {
      supplierName: "Brian",
      organizationName: "InnoSoft",
      purpose: "Customer Visit",
      entryDate: "2025-04-14",
      driverName: "Mark Smith",
      itemType: "Stationery",
      accepted: false,
      rejected: false,
    },
    {
      supplierName: "Carla",
      organizationName: "GreenWorks",
      purpose: "Client Meeting",
      entryDate: "2025-04-14",
      driverName: "David Johnson",
      itemType: "Machinery Parts",
      accepted: false,
      rejected: false,
    },
    {
      supplierName: "Daniel",
      organizationName: "BuildRight",
      purpose: "Site Inspection",
      entryDate: "2025-04-14",
      driverName: "Steve Miller",
      itemType: "Construction Tools",
      accepted: false,
      rejected: false,
    },
    {
      supplierName: "Elena",
      organizationName: "SmartLogix",
      purpose: "Delivery",
      entryDate: "2025-04-14",
      driverName: "Nancy Drew",
      itemType: "Networking Equipment",
      accepted: false,
      rejected: false,
    },
    {
      supplierName: "Frank",
      organizationName: "MechGear",
      purpose: "Product Demo",
      entryDate: "2025-04-14",
      driverName: "George Blake",
      itemType: "Mechanical Components",
      accepted: false,
      rejected: false,
    },
    {
      supplierName: "Grace",
      organizationName: "EcoSupply",
      purpose: "Vendor Meeting",
      entryDate: "2025-04-14",
      driverName: "Linda Park",
      itemType: "Eco Materials",
      accepted: false,
      rejected: false,
    },
    {
      supplierName: "Harry",
      organizationName: "AutoLink",
      purpose: "Parts Delivery",
      entryDate: "2025-04-14",
      driverName: "Tom Cruise",
      itemType: "Automobile Parts",
      accepted: false,
      rejected: false,
    },
    {
      supplierName: "Isha",
      organizationName: "SoftEdge",
      purpose: "Project Kickoff",
      entryDate: "2025-04-14",
      driverName: "Akash Roy",
      itemType: "Laptops",
      accepted: false,
      rejected: false,
    },
    {
      supplierName: "Jack",
      organizationName: "CoreTech",
      purpose: "Tech Review",
      entryDate: "2025-04-14",
      driverName: "Peter Shawn",
      itemType: "Servers",
      accepted: false,
      rejected: false,
    },
  ];

  const [accepted, setAccepted] = useState(details);
  const [reason, setReason] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(accepted.length / itemsPerPage);
  const paginatedSuppliers = accepted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const accept = (index) => {
    const newDetails = [...accepted];
    const globalIndex = (currentPage - 1) * itemsPerPage + index;
    newDetails[globalIndex].accepted = true;
    setAccepted(newDetails);
  };

  const reject = (index) => {
    const newDetails = [...accepted];
    const globalIndex = (currentPage - 1) * itemsPerPage + index;
    newDetails[globalIndex].rejected = true;
    setAccepted(newDetails);
  };

  return (
    <>
      <Table className={"text-left mt-5 border shadow-xs"}>
        <TableHeader className={"bg-gray-100"}>
          <TableRow>
            <TableHead>Supplier</TableHead>
            <TableHead>Organization</TableHead>
            <TableHead>Purpose</TableHead>
            <TableHead>Entry Date</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Item Type</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedSuppliers.map((s, i) => (
            <TableRow
              key={`${s.supplierName}-${i}`}
              className={`${s.rejected ? "line-through text-gray-400" : ""}`}
            >
              <TableCell className="font-medium">{s.supplierName}</TableCell>
              <TableCell>{s.organizationName}</TableCell>
              <TableCell>{s.purpose}</TableCell>
              <TableCell>{s.entryDate}</TableCell>
              <TableCell>{s.driverName}</TableCell>
              <TableCell>{s.itemType}</TableCell>
              <TableCell className={"px-0 text-center"}>
                {s.accepted ? (
                  <MaterialView />
                ) : (
                  <Dialog>
                    <DialogTrigger>
                      <Button
                        variant="outline"
                        className="text-xs border-green-400 cursor-pointer hover:bg-green-100"
                      >
                        <Check />
                      </Button>
                    </DialogTrigger>
                    <form>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Accept</DialogTitle>
                          <div className="h-[1px] bg-red-500" />
                        </DialogHeader>
                        <div>
                          <label className="text-xs">Warehouse Location</label>
                          <Input required className="w-[300px]" />
                          <label className="text-xs">Additional Notes</label>
                          <Textarea />
                        </div>
                        <DialogFooter>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                onClick={() => accept(i)}
                                className="cursor-pointer bg-green-500"
                              >
                                Accept
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Form Submitted
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Accepted ✅
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Close</AlertDialogCancel>
                                <AlertDialogAction>Okay</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                )}
              </TableCell>
              <TableCell className={"px-0 text-center"}>
                {s.accepted ? (
                  <Edit />
                ) : (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-xs border-red-400 cursor-pointer hover:bg-red-100"
                      >
                        <X />
                      </Button>
                    </AlertDialogTrigger>
                    <form>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Reject Material Pass
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Please select a reason for rejection:
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div className="flex flex-col gap-4">
                          <Select onValueChange={(value) => setReason(value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the reason" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="incomplete">
                                Incomplete Info
                              </SelectItem>
                              <SelectItem value="unavailable">
                                Slot Unavailable
                              </SelectItem>
                              <SelectItem value="duplicate">
                                Duplicate Entry
                              </SelectItem>
                              <SelectItem value="others">Others</SelectItem>
                            </SelectContent>
                          </Select>

                          {reason === "incomplete" && (
                            <Textarea placeholder="Missing details" />
                          )}
                          {reason === "unavailable" && (
                            <Input
                              placeholder="Suggested New Time"
                              className="w-[250px]"
                            />
                          )}
                          {reason === "duplicate" && (
                            <Textarea placeholder="Reason" />
                          )}
                          {reason === "others" && (
                            <Textarea
                              placeholder="Enter your reason here"
                              className="w-full min-h-[100px]"
                            />
                          )}
                        </div>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => reject(i)}>
                            Reject
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </form>
                  </AlertDialog>
                )}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-end items-center mt-2">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <button
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1 ? "bg-gray-300" : ""
                  }`}
                >
                  {i + 1}
                </button>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Materials;
