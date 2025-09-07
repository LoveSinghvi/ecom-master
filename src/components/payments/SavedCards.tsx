// src/components/payments/SavedCards.tsx
import React from "react";
import { Button } from "../ui/button";

interface SavedCardsProps {
  savedCards: string[]; // Ensure this is an array, never undefined
  onAddCard: () => void;
  onRemoveCard: (index: number) => void;
}

const SavedCards: React.FC<SavedCardsProps> = ({
  savedCards = [], // Default to an empty array to prevent errors
  onAddCard,
  onRemoveCard,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-lg">Saved Cards</h3>
      {savedCards.length > 0 ? (
        savedCards.map((card, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">{card}</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onRemoveCard(index)}
            >
              Remove
            </Button>
          </div>
        ))
      ) : (
        <p className="text-sm text-muted-foreground">No saved cards.</p>
      )}
      <Button variant="outline" size="sm" className="mt-4" onClick={onAddCard}>
        Add Card
      </Button>
    </div>
  );
};

export default SavedCards;
