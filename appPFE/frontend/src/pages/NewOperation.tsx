
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

// Mock data for operations
const operationTypes = [
  { id: "1", name: "Fertilisation" },
  { id: "2", name: "Traitement" },
  { id: "3", name: "Irrigation" },
  { id: "4", name: "Désherbage" },
  { id: "5", name: "Récolte" },
];

// Mock data for cultures
const cultures = [
  { id: "1", name: "Pomme de terre - Bintje" },
  { id: "2", name: "Tomate - Roma" },
  { id: "3", name: "Oignon - Jaune paille" },
];

const NewOperation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [selectedCulture, setSelectedCulture] = useState(searchParams.get('cultureId') || "");
  const [operationType, setOperationType] = useState("");
  const [operationDate, setOperationDate] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg/ha");
  const [productCost, setProductCost] = useState("");
  const [laborCost, setLaborCost] = useState("");
  const [equipmentCost, setEquipmentCost] = useState("");
  const [otherCost, setOtherCost] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const totalCost = (
    parseFloat(productCost || "0") +
    parseFloat(laborCost || "0") +
    parseFloat(equipmentCost || "0") +
    parseFloat(otherCost || "0")
  ).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Opération ajoutée avec succès!");
      navigate("/operations");
    }, 1000);
  };

  return (
    <>
      <Header 
        title="Nouvelle opération" 
        subtitle="Enregistrez une opération effectuée sur une culture" 
      />
      
      <Card className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Détails de l'opération</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="culture">Culture concernée</Label>
                <Select 
                  value={selectedCulture} 
                  onValueChange={setSelectedCulture}
                >
                  <SelectTrigger id="culture">
                    <SelectValue placeholder="Sélectionnez une culture" />
                  </SelectTrigger>
                  <SelectContent>
                    {cultures.map((culture) => (
                      <SelectItem key={culture.id} value={culture.id}>
                        {culture.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="operationType">Type d'opération</Label>
                <Select 
                  value={operationType} 
                  onValueChange={setOperationType}
                >
                  <SelectTrigger id="operationType">
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent>
                    {operationTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="operationDate">Date de l'opération</Label>
                <Input
                  id="operationDate"
                  type="date"
                  value={operationDate}
                  onChange={(e) => setOperationDate(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Détails du produit utilisé</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product">Produit</Label>
                  <Input
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    placeholder="Ex: NPK 15-15-15, Fongicide, etc."
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantité</Label>
                    <Input
                      id="quantity"
                      type="number"
                      step="0.01"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Ex: 300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unité</Label>
                    <Select 
                      value={unit} 
                      onValueChange={setUnit}
                    >
                      <SelectTrigger id="unit">
                        <SelectValue placeholder="kg/ha" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg/ha">kg/ha</SelectItem>
                        <SelectItem value="L/ha">L/ha</SelectItem>
                        <SelectItem value="t/ha">t/ha</SelectItem>
                        <SelectItem value="mm">mm</SelectItem>
                        <SelectItem value="unité">unité</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Coûts associés</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productCost">Coût du produit (€)</Label>
                  <Input
                    id="productCost"
                    type="number"
                    step="0.01"
                    value={productCost}
                    onChange={(e) => setProductCost(e.target.value)}
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="laborCost">Coût de main d'œuvre (€)</Label>
                  <Input
                    id="laborCost"
                    type="number"
                    step="0.01"
                    value={laborCost}
                    onChange={(e) => setLaborCost(e.target.value)}
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="equipmentCost">Coût d'équipement (€)</Label>
                  <Input
                    id="equipmentCost"
                    type="number"
                    step="0.01"
                    value={equipmentCost}
                    onChange={(e) => setEquipmentCost(e.target.value)}
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="otherCost">Autres coûts (€)</Label>
                  <Input
                    id="otherCost"
                    type="number"
                    step="0.01"
                    value={otherCost}
                    onChange={(e) => setOtherCost(e.target.value)}
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex justify-between">
                  <span className="font-medium">Coût total:</span>
                  <span className="font-bold">{totalCost} €</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Remarques</Label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Conditions climatiques, problèmes rencontrés, etc."
                className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/operations")}
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              className="bg-terre-green-600 hover:bg-terre-green-700" 
              disabled={!selectedCulture || !operationType || !operationDate || isLoading}
            >
              {isLoading ? "Chargement..." : "Enregistrer"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

export default NewOperation;
