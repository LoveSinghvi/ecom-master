// src/components/payments/SavedUpi.tsx
import { Button } from "../ui/button";

interface SavedUpiProps {
  savedUpi: string;
  onAddUpi: () => void;
}

const SavedUpi: React.FC<SavedUpiProps> = ({ savedUpi, onAddUpi }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h3 className="font-semibold text-lg">Saved UPI</h3>
        <p className="text-sm text-muted-foreground">Current UPI: {savedUpi}</p>
      </div>
      <Button variant="outline" size="sm" onClick={onAddUpi}>
        Add UPI
      </Button>
    </div>
  );
};

export default SavedUpi;
