import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";

const View = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button
            size={"sm"}
            variant={"outline"}
            className={
              "text-xs border-gray-500 cursor-pointer hover:bg-gray-100"
            }
          >
            View
          </Button>
        </DialogTrigger>
        <DialogContent className={"max-h-[80vh] overflow-y-auto"}>
          <DialogHeader>
            <DialogTitle>View profile</DialogTitle>
          </DialogHeader>
          <div className="p-4 space-y-4 text-sm">
            <div className="space-y-2">
              <p className="text-sm font-medium">Visitor Details</p>
              <div className="h-[1px] bg-red-500" />

              <div className="border p-3 rounded space-y-2">
                <p className="text-base font-semibold">Person 1</p>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">First Name</label>
                    <input
                      type="text"
                      value="Alice"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Last Name</label>
                    <input
                      type="text"
                      value="Johnson"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs">Email</label>
                  <input
                    type="email"
                    value="alice@example.com"
                    readOnly
                    className="border p-1 rounded w-full"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Phone</label>
                    <input
                      type="tel"
                      value="+919876543210"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Organization</label>
                    <input
                      type="text"
                      value="TechCorp"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs">Address</label>
                  <input
                    type="text"
                    value="123 Tech Street, Bangalore"
                    readOnly
                    className="border p-1 rounded w-full"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Device Details</p>
              <div className="h-px bg-red-500" />
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Device Name</label>
                    <input
                      type="text"
                      value="Laptop"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Device Model</label>
                    <input
                      type="text"
                      value="Dell XPS 13"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs">Device Type</label>
                  <input
                    type="text"
                    value="Laptop"
                    readOnly
                    className="border p-1 rounded w-full"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Vehicle Details</p>
              <div className="h-px bg-red-500" />
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Vehicle Number</label>
                    <input
                      type="text"
                      value="KA01AB1234"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Vehicle Model</label>
                    <input
                      type="text"
                      value="Hyundai i20"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs">Vehicle Type</label>
                  <input
                    type="text"
                    value="Car"
                    readOnly
                    className="border p-1 rounded w-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Other Details</p>
              <div className="h-px bg-red-500" />
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Hall Number</label>
                    <input
                      type="text"
                      value="3"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Check In</label>
                    <input
                      type="text"
                      value="10:00 pm "
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs">Check Out</label>
                  <input
                    type="text"
                    value="11:00 pm"
                    readOnly
                    className="border p-1 rounded w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default View;
