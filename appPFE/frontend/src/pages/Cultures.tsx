
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration
const cultureMockData = [
  {
    id: 1,
    name: "Pomme de terre",
    variety: "Bintje",
    category: "Légumes",
    plantedDate: "15/03/2025",
    harvestDate: "15/07/2025",
    area: "2.5 ha",
    status: "En cours",
  },
  {
    id: 2,
    name: "Tomate",
    variety: "Roma",
    category: "Légumes",
    plantedDate: "05/04/2025",
    harvestDate: "15/08/2025",
    area: "1.2 ha",
    status: "En cours",
  },
  {
    id: 3,
    name: "Oignon",
    variety: "Jaune paille",
    category: "Légumes",
    plantedDate: "10/04/2025",
    harvestDate: "30/08/2025",
    area: "0.8 ha",
    status: "En cours",
  },
];

const Cultures = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header 
        title="Mes cultures" 
        subtitle="Gérez vos cultures et parcelles" 
        showAddButton 
        addButtonText="Nouvelle culture" 
        addButtonLink="/cultures/new" 
      />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cultureMockData.map((culture) => (
          <Card key={culture.id} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{culture.name}</CardTitle>
                <Badge variant="outline" className="bg-terre-green-50 border-terre-green-200 text-terre-green-700">
                  {culture.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Variété:</span>
                  <span className="text-sm font-medium">{culture.variety}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Catégorie:</span>
                  <span className="text-sm font-medium">{culture.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Date de plantation:</span>
                  <span className="text-sm font-medium">{culture.plantedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Date de récolte prévue:</span>
                  <span className="text-sm font-medium">{culture.harvestDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Superficie:</span>
                  <span className="text-sm font-medium">{culture.area}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button 
                variant="outline" 
                onClick={() => navigate(`/cultures/${culture.id}`)}
              >
                Détails
              </Button>
              <Button 
                className="bg-terre-green-600 hover:bg-terre-green-700"
                onClick={() => navigate(`/operations/new?cultureId=${culture.id}`)}
              >
                Ajouter opération
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cultures;
