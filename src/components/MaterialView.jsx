import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";

const MaterialView = () => {
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
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Supplier Form Details</DialogTitle>
          </DialogHeader>

          <div className="p-4 space-y-4 text-sm">
            {/* Supplier Info */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Supplier Details</p>
              <div className="h-[1px] bg-red-500" />

              <div className="border p-3 rounded space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Supplier Name</label>
                    <input
                      type="text"
                      value="Alice"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Organization Name</label>
                    <input
                      type="text"
                      value="TechCorp"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs">Purpose</label>
                  <input
                    type="text"
                    value="Meeting"
                    readOnly
                    className="border p-1 rounded w-full"
                  />
                </div>

                <div>
                  <label className="block text-xs">Entry Date</label>
                  <input
                    type="text"
                    value="2025-04-14"
                    readOnly
                    className="border p-1 rounded w-full"
                  />
                </div>
              </div>
            </div>

            {/* Driver Details */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Driver & Cleaner Details</p>
              <div className="h-px bg-red-500" />
              <div className="border p-3 rounded space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Driver Name</label>
                    <input
                      type="text"
                      value="John Doe"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Cleaner Name</label>
                    <input
                      type="text"
                      value="Sarah Lee"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Vehicle Details</p>
              <div className="h-px bg-red-500" />
              <div className="border p-3 rounded space-y-2">
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
                    <label className="block text-xs">Vehicle Type</label>
                    <input
                      type="text"
                      value="Truck"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Item Details */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Item Details</p>
              <div className="h-px bg-red-500" />
              <div className="border p-3 rounded space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Item Name</label>
                    <input
                      type="text"
                      value="Power Supply Unit"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Item Type</label>
                    <input
                      type="text"
                      value="Electronics"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Warehouse Details */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Warehouse Details</p>
              <div className="h-px bg-red-500" />
              <div className="border p-3 rounded space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs">Warehouse Name</label>
                    <input
                      type="text"
                      value="Main Storage Unit A"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs">Storage Bay Number</label>
                    <input
                      type="text"
                      value="B12"
                      readOnly
                      className="border p-1 rounded w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MaterialView;
