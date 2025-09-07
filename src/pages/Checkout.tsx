import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, CreditCard, Lock, Loader2 } from "lucide-react";
import { useCart } from "@/pages/CartContext";

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { items, totalAmount, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const shipping = 10;
  const total = totalAmount + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
      clearCart();
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase.",
      });
      navigate("/order-confirmation");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <Button onClick={() => navigate("/products")}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-8" onClick={() => navigate("/cart")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Cart
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <InputWithLabel id="firstName" value={shippingInfo.firstName} onChange={handleInputChange} />
                <InputWithLabel id="lastName" value={shippingInfo.lastName} onChange={handleInputChange} />
              </div>
              <InputWithLabel id="email" value={shippingInfo.email} onChange={handleInputChange} type="email" />
              <InputWithLabel id="address" value={shippingInfo.address} onChange={handleInputChange} />
              <div className="grid grid-cols-2 gap-4">
                <InputWithLabel id="city" value={shippingInfo.city} onChange={handleInputChange} />
                <InputWithLabel id="state" value={shippingInfo.state} onChange={handleInputChange} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputWithLabel id="zipCode" value={shippingInfo.zipCode} onChange={handleInputChange} />
                <InputWithLabel id="country" value={shippingInfo.country} onChange={handleInputChange} />
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="text-xl font-semibold">Payment Method</h3>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <RadioItem id="credit-card" icon={<CreditCard />} label="Credit Card" />
                  <RadioItem id="paypal" label="PayPal" />
                </RadioGroup>

                {paymentMethod === "credit-card" && (
                  <div className="space-y-4 mt-4">
                    <InputWithLabel id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    <div className="grid grid-cols-2 gap-4">
                      <InputWithLabel id="expiry" placeholder="MM/YY" required />
                      <InputWithLabel id="cvv" placeholder="123" required />
                    </div>
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full mt-6" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Place Order
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Reusable Input with Label
const InputWithLabel = ({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required = true
}: {
  id: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</Label>
    <Input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

// Reusable Radio Item
const RadioItem = ({
  id,
  icon,
  label
}: {
  id: string;
  icon?: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center space-x-2">
    <RadioGroupItem value={id} id={id} />
    <Label htmlFor={id} className="flex items-center">
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </Label>
  </div>
);

export default Checkout;
