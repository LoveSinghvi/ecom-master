import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface GiftCardsProps {
  giftCards: number;
  onAddGiftCard: (amount: number) => void;
}

const GiftCards: React.FC<GiftCardsProps> = ({ giftCards, onAddGiftCard }) => {
  const [isAddingGiftCard, setIsAddingGiftCard] = useState(false);
  const [giftCardValue, setGiftCardValue] = useState<number>(0);

  const handleAddGiftCardClick = () => {
    setIsAddingGiftCard(true);
  };

  const handleCancel = () => {
    setIsAddingGiftCard(false);
    setGiftCardValue(0);
  };

  const handleAddGiftCard = () => {
    if (giftCardValue > 0) {
      onAddGiftCard(giftCardValue); // Update the gift card balance
      setGiftCardValue(0);
      setIsAddingGiftCard(false); // Close the input after adding the gift card
    }
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
      <div>
        <h3 className="font-semibold text-lg text-gray-800">Gift Cards</h3>
        <p className="text-sm text-gray-500">Balance: ${giftCards}</p>
      </div>

      {/* Display the "Add Gift Card" button */}
      {!isAddingGiftCard ? (
        <Button
          variant="outline"
          size="sm"
          className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          onClick={handleAddGiftCardClick}
        >
          Add Gift Card
        </Button>
      ) : (
        // Show input for gift card value when adding a new card
        <div className="flex flex-col gap-4 w-1/3">
          <Label htmlFor="giftCardValue">Gift Card Amount</Label>
          <Input
            id="giftCardValue"
            type="number"
            value={giftCardValue}
            onChange={(e) => setGiftCardValue(Number(e.target.value))}
            placeholder="Enter amount"
            min="1"
          />
          <div className="flex gap-4 mt-4">
            <Button variant="outline" className="w-full" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="w-full" onClick={handleAddGiftCard}>
              Add Gift Card
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftCards;
