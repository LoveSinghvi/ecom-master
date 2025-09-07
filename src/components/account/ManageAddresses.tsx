import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Pencil } from "lucide-react";

type Address = {
  id: number;
  label: string;
  address: string;
};

const ManageAddresses = () => {
  // Initial state with a "Home" address
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, label: "Home", address: "123 Main St, New Delhi, India" },
  ]);

  // Form state for input fields
  const [form, setForm] = useState({ label: "", address: "" });

  // State for tracking which address is being edited
  const [editId, setEditId] = useState<number | null>(null);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Edit address
  const handleAddOrEdit = () => {
    if (!form.label || !form.address) return;

    if (editId !== null) {
      // Edit an existing address
      setAddresses((prev) =>
        prev.map((item) => (item.id === editId ? { ...item, ...form } : item))
      );
      setEditId(null);
    } else {
      // Add a new address
      const newAddress: Address = {
        id: Date.now(),
        label: form.label,
        address: form.address,
      };
      setAddresses([...addresses, newAddress]);
    }

    // Reset form after adding/editing
    setForm({ label: "", address: "" });
  };

  // Edit an existing address
  const handleEdit = (id: number) => {
    const addr = addresses.find((a) => a.id === id);
    if (addr) {
      setForm({ label: addr.label, address: addr.address });
      setEditId(id);
    }
  };

  // Delete an address
  const handleDelete = (id: number) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    if (editId === id) {
      setForm({ label: "", address: "" });
      setEditId(null);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto p-6 mt-5 mb-5">
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>
      <CardContent className="space-y-4">
        {addresses.length === 0 ? (
          <p className="text-muted-foreground">
            You have no addresses. Add a new one below.
          </p>
        ) : (
          addresses.map((item) => (
            <div
              key={item.id}
              className="border rounded p-3 flex justify-between items-start"
            >
              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-muted-foreground text-sm">{item.address}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleEdit(item.id)}
                >
                  <Pencil size={16} />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))
        )}

        <div className="pt-4 border-t mt-6 space-y-3">
          <h3 className="text-lg font-medium">
            {editId ? "Edit Address" : "Add New Address"}
          </h3>
          <Input
            placeholder="Label (e.g. Home, Office)"
            name="label"
            value={form.label}
            onChange={handleChange}
          />
          <Textarea
            placeholder="Full Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          <Button onClick={handleAddOrEdit}>
            {editId ? "Update Address" : "Add Address"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManageAddresses;
