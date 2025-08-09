const RecentSales = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">John Doe</p>
          <p className="text-sm text-muted-foreground">john@example.com</p>
        </div>
        <div className="ml-auto font-medium">+$299.99</div>
      </div>
      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Jane Smith</p>
          <p className="text-sm text-muted-foreground">jane@example.com</p>
        </div>
        <div className="ml-auto font-medium">+$599.99</div>
      </div>
    </div>
  );
};

export { RecentSales };