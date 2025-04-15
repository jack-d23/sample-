import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import Materials from "@/components/Materials";

const MaterialDetails = () => {
  const [date, setDate] = useState(null);
  return (
    <div>
      <div className="flex items-center md:w-[35rem] lg:w-[50rem] xl:w-[70rem] justify-between">
        <h1 className="font-medium text-3xl">Material Appoinments</h1>
        <div className="flex items-end">
          <Dialog>
            <DialogTrigger>
              <Button
                className={" cursor-pointer bg-red-500 rounded-full text-xs"}
                size={"sm"}
              >
                Create
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h1 className="font-semibold">Appoinment Request</h1>
              </DialogHeader>
              <div className="py-5 px-2 border mt-2">
                <div className="flex flex-col gap- px-4">
                  <div>
                    <label className="text-xs my-2 mx-1">Supplier Name</label>
                    <Input />
                  </div>
                  <div className="flex gap-10">
                    <div>
                      <label className="text-xs my-2 mx-1 ">Item Name</label>
                      <Input className={"w-[250px]"} />
                    </div>
                    <div>
                      <label className="text-xs my-2 mx-1">Quantity</label>
                      <Input />
                    </div>
                  </div>
                  <div className="flex gap-10 items-center">
                    <div>
                      <p className="text-xs my-2 mx-1">
                        Expected Delivery Date
                      </p>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <label className="text-xs my-2 mx-1">
                        Priority Level
                      </label>
                      <Select>
                        <SelectTrigger className={"w-[150px]"}>
                          <SelectValue placeholder="Select the type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Low</SelectItem>
                          <SelectItem value="2">Medium</SelectItem>
                          <SelectItem value="3">High</SelectItem>
                          <SelectItem value="4">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-5 flex">
                  <div>
                    <label className="text-xs my-2 mx-1">Gate No</label>
                    <Input className="w-[400px]" />
                  </div>
                </div>
                <div className="px-4">
                  <label className="text-xs my-2 mx-1">Request Purpose</label>
                  <Textarea placeholder="Enter the purpose briefly..." />
                </div>
              </div>
              <DialogFooter>
                <Link to="/material/form">
                  <Button
                    type="submit"
                    className="text-sm cursor-pointer ml-auto"
                  >
                    Send Request
                  </Button>
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="h-[1px] mt-2  bg-red-500"></div>
      <div>
        <Materials />
      </div>
    </div>
  );
};

export default MaterialDetails;
