import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PANCardInformation: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [panNumber, setPanNumber] = useState("ABCDE1234F"); // Example default value
  const [error, setError] = useState("");

  const handleSave = () => {
    // PAN number validation (simple regex)
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panPattern.test(panNumber)) {
      setError("Please enter a valid PAN number.");
      return;
    }

    setError(""); // Clear error
    setIsEditing(false);
    // Optionally send `panNumber` to the backend
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>PAN Card Information</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="text-sm text-muted-foreground space-y-4 mt-2">
        {!isEditing ? (
          <>
            <p className="text-muted-foreground">Your PAN Number:</p>
            <div className="font-medium text-black dark:text-white">
              {panNumber}
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsEditing(true)}
            >
              Update PAN
            </Button>
          </>
        ) : (
          <>
            <Label htmlFor="pan">PAN Number</Label>
            <Input
              id="pan"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
              placeholder="ABCDE1234F"
              maxLength={10}
              className={error ? "border-red-500" : ""}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex gap-2">
              <Button className="w-full" onClick={handleSave}>
                Save
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PANCardInformation;
