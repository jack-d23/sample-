import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Edit = () => {
  const [open, setOpen] = useState(false);
  const [warehouseName, setWarehouseName] = useState("Central Storage");
  const [warehouseInCharge, setWarehouseInCharge] = useState("Mr. Kumar");
  const [warehouseContact, setWarehouseContact] = useState("9876543210");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      warehouseName,
      warehouseInCharge,
      warehouseContact,
    });
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button
            size={"sm"}
            variant={"outline"}
            className={
              "text-xs border-gray-500 cursor-pointer hover:bg-gray-100"
            }
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className={"max-h-[80vh] overflow-y-auto"}>
          <DialogHeader>
            <DialogTitle>Edit Warehouse Details</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="p-4 space-y-4 text-sm">
            {/* Supplier Info - ReadOnly */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Supplier Info</p>
              <div className="h-[1px] bg-red-500" />
              <div className="border p-3 rounded space-y-2">
                <div>
                  <label className="block text-xs">Supplier Name</label>
                  <input
                    type="text"
                    value="ABC Traders"
                    readOnly
                    className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-xs">Contact</label>
                  <input
                    type="text"
                    value="9876543210"
                    readOnly
                    className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Material Info - ReadOnly */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Material Info</p>
              <div className="h-[1px] bg-red-500" />
              <div className="border p-3 rounded space-y-2">
                <div>
                  <label className="block text-xs">Material Type</label>
                  <input
                    type="text"
                    value="Steel Rods"
                    readOnly
                    className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-xs">Quantity</label>
                  <input
                    type="text"
                    value="500 kg"
                    readOnly
                    className="border p-1 rounded w-full bg-gray-100 text-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Warehouse Details - Editable */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Warehouse Details</p>
              <div className="h-[1px] bg-red-500" />
              <div className="space-y-2">
                <div>
                  <label className="block text-xs">Warehouse Name</label>
                  <input
                    type="text"
                    value={warehouseName}
                    onChange={(e) => setWarehouseName(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs">In-Charge</label>
                  <input
                    type="text"
                    value={warehouseInCharge}
                    onChange={(e) => setWarehouseInCharge(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs">Contact Number</label>
                  <input
                    type="text"
                    value={warehouseContact}
                    onChange={(e) => setWarehouseContact(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Edit;
