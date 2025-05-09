
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Mock data for operations
const operationMockData = [
  {
    id: 1,
    type: "Fertilisation",
    date: "15/04/2025",
    culture: "Pomme de terre",
    product: "NPK 15-15-15",
    quantity: "300 kg/ha",
    cost: "350 €",
  },
  {
    id: 2,
    type: "Traitement",
    date: "20/04/2025",
    culture: "Tomate",
    product: "Fongicide Bio",
    quantity: "2 L/ha",
    cost: "120 €",
  },
  {
    id: 3,
    type: "Irrigation",
    date: "25/04/2025",
    culture: "Oignon",
    product: "Eau",
    quantity: "15 mm",
    cost: "80 €",
  },
  {
    id: 4,
    type: "Désherbage",
    date: "28/04/2025",
    culture: "Pomme de terre",
    product: "Manuel",
    quantity: "-",
    cost: "200 €",
  },
  {
    id: 5,
    type: "Fertilisation",
    date: "02/05/2025",
    culture: "Tomate",
    product: "Compost",
    quantity: "5 t/ha",
    cost: "300 €",
  },
];

const Operations = () => {
  const navigate = useNavigate();

  const getOperationTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      "Fertilisation": "bg-terre-green-50 border-terre-green-200 text-terre-green-700",
      "Traitement": "bg-blue-50 border-blue-200 text-blue-700",
      "Irrigation": "bg-cyan-50 border-cyan-200 text-cyan-700",
      "Désherbage": "bg-purple-50 border-purple-200 text-purple-700",
      "Récolte": "bg-amber-50 border-amber-200 text-amber-700",
    };
    return colors[type] || "bg-gray-50 border-gray-200 text-gray-700";
  };

  return (
    <>
      <Header 
        title="Opérations & Intrants" 
        subtitle="Gérez les opérations effectuées sur vos cultures" 
        showAddButton 
        addButtonText="Nouvelle opération" 
        addButtonLink="/operations/new" 
      />
      
      <Card>
        <CardHeader>
          <CardTitle>Liste des opérations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Culture</TableHead>
                <TableHead>Produit</TableHead>
                <TableHead>Quantité</TableHead>
                <TableHead>Coût</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {operationMockData.map((operation) => (
                <TableRow key={operation.id}>
                  <TableCell>
                    <Badge 
                      variant="outline"
                      className={getOperationTypeColor(operation.type)}
                    >
                      {operation.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{operation.date}</TableCell>
                  <TableCell>{operation.culture}</TableCell>
                  <TableCell>{operation.product}</TableCell>
                  <TableCell>{operation.quantity}</TableCell>
                  <TableCell>{operation.cost}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/operations/${operation.id}`)}
                    >
                      Détails
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Operations;
