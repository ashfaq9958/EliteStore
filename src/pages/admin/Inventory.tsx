import { useState } from "react";
import {
  Search,
  AlertTriangle,
  Package,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AdminInventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const inventory = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      sku: "PWH-001",
      currentStock: 45,
      minStock: 10,
      maxStock: 100,
      status: "In Stock",
      location: "Warehouse A",
      value: 13499.55,
    },
    {
      id: 2,
      name: "Luxury Leather Jacket",
      sku: "LLJ-002",
      currentStock: 3,
      minStock: 5,
      maxStock: 25,
      status: "Low Stock",
      location: "Warehouse B",
      value: 1799.97,
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      sku: "SFW-003",
      currentStock: 0,
      minStock: 15,
      maxStock: 50,
      status: "Out of Stock",
      location: "Warehouse A",
      value: 0,
    },
  ];

  const getStockLevel = (current: number, _: number, max: number) => {
    return (current / max) * 100;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "default";
      case "Low Stock":
        return "secondary";
      case "Out of Stock":
        return "destructive";
      default:
        return "default";
    }
  };

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalValue = inventory.reduce((sum, item) => sum + item.value, 0);
  const lowStockItems = inventory.filter((item) => item.status === "Low Stock").length;
  const outOfStockItems = inventory.filter((item) => item.status === "Out of Stock").length;

  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
          <p className="text-muted-foreground text-sm">
            Monitor stock levels and inventory value
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalValue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Across all warehouses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{lowStockItems}</div>
            <p className="text-xs text-muted-foreground">Need restocking soon</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{outOfStockItems}</div>
            <p className="text-xs text-muted-foreground">Immediate attention required</p>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl">Inventory Management</CardTitle>
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search inventory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Stock Level</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInventory.length > 0 ? (
                  filteredInventory.map((item) => (
                    <TableRow key={item.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>
                              {item.currentStock} / {item.maxStock}
                            </span>
                            <span>
                              {Math.round(getStockLevel(item.currentStock, item.minStock, item.maxStock))}%
                            </span>
                          </div>
                          <Progress
                            value={getStockLevel(item.currentStock, item.minStock, item.maxStock)}
                            className="h-2"
                          />
                        </div>
                      </TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>${item.value.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(item.status)}>{item.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6">
                      <p className="text-muted-foreground">No inventory items found.</p>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminInventory;
