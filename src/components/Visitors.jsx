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

const Visitors = () => {
  const details = [
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Alice",
      Host: "David",
      type: "meeting",
      checkin: "9:00 AM",
      checkout: "10:00 AM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Brian",
      Host: "Emily",
      type: "customer visit",
      checkin: "11:30 AM",
      checkout: "12:30 PM",
      accepted: false,
      rejected: false,
    },
    {
      guest: "Carla",
      Host: "James",
      type: "client",
      checkin: "2:00 PM",
      checkout: "3:00 PM",
      accepted: false,
      rejected: false,
    },
  ];

  const [accepted, setAccepted] = useState(details);
  const [reason, setReason] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(accepted.length / itemsPerPage);
  const paginatedVisitors = accepted.slice(
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
    <div className="overflow-x-auto w-full">
      <Table className={"text-left mt-5 border shadow-xs"}>
        <TableHeader className={"bg-gray-100"}>
          <TableRow>
            <TableHead>Visitor</TableHead>
            <TableHead>Host</TableHead>
            <TableHead>Visit Type</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedVisitors.map((v, i) => (
            <TableRow
              key={`${v.guest}-${i}`}
              className={`${v.rejected ? "line-through text-gray-400" : ""}`}
            >
              <TableCell className="font-medium">{v.guest}</TableCell>
              <TableCell>{v.Host}</TableCell>
              <TableCell>{v.type}</TableCell>
              <TableCell>{v.checkin}</TableCell>
              <TableCell>{v.checkout}</TableCell>
              <TableCell className={"px-0 text-center"}>
                {v.accepted ? (
                  <View />
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
                          <label className="text-xs">Meeting Hall</label>
                          <Input required className="w-[300px]" />
                          <label className="text-xs">Instructions</label>
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
                {v.accepted ? (
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
                            Reject the application
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
                              <SelectItem value="duration">
                                Duration not suitable
                              </SelectItem>
                              <SelectItem value="date">
                                Date not suitable
                              </SelectItem>
                              <SelectItem value="room">
                                Meeting room unavailable
                              </SelectItem>
                              <SelectItem value="others">Others</SelectItem>
                            </SelectContent>
                          </Select>

                          {reason === "duration" && (
                            <div className="flex flex-col gap-2">
                              <Input
                                placeholder="Check In Time"
                                className="w-[150px]"
                              />
                              <Input
                                placeholder="Check Out Time"
                                className="w-[150px]"
                              />
                            </div>
                          )}
                          {reason === "room" && (
                            <Input
                              placeholder="Meeting Room"
                              className="w-[250px]"
                            />
                          )}
                          {reason === "date" && (
                            <Input
                              placeholder="Modified Date"
                              className="w-[250px]"
                            />
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
    </div>
  );
};

export default Visitors;
